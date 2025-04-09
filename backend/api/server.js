require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const User = require('../models/userModel');
const ToolData = require('../models/toolDataModel');
const { AutoEncryptionLoggerLevel } = require('mongodb');
app.use(cookieParser());//Parses cookies sent with requests, making them accessible via req.cookies.


app.use(
  cors({
    origin: process.env.FRONTEND || "*", // Allow frontend domain
    credentials: true, // Allow cookies and headers
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Allow these methods
    allowedHeaders: "Content-Type, Authorization", // Allow custom headers
  })
);

// ✅ Set CORS Headers in Every Response (Extra Protection)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); // Allow cookies

  // Handle CORS Preflight Requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // No Content
  }
  next();
});

//DB Connection
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("connected to database")
});

app.use(bodyParser.json());

function authenticateToken(req, res, next) {
  const token = req.cookies.accessToken; // Get the token from cookies

  if (!token) {
    return res.status(401).json({ error: "Access denied, token missing" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info to the request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
}

//frontend protection
app.get("/auth/check", authenticateToken, async (req, res) => {
  const recommendationCount = await ToolData.countDocuments({ clinician: req.user.email });
  res.status(200).json({ authenticated: true, email: req.user.email, recommendationCount });
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running!" });
});


// Protected Route Example - to protect backend
app.get("/protected-backend", authenticateToken, (req, res) => {
  res.json({ message: "Access granted!" });
});

app.post("/signup", async (req, res) => {
    try {
        // Get user data from the request body
        const data = req.body;
        console.log(data);
        // Create and save the user (this creates the database and collection if they don't exist)
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = new User({ ...data, password: hashedPassword });
        await newUser.save()
        // Create a token with non-sensitive information (e.g., user ID, email)
        const tokenPayload = { _id: newUser._id, email: newUser.email }
        const token = jwt.sign(tokenPayload, SECRET_KEY, {
            expiresIn: "1h", // Token expires in 1 hour
        });

        console.log(token)
        // ✅ Set HTTP-only cookie & send JSON response
        res.status(200).cookie("accessToken", token, {
          httpOnly: true,
          // secure: true,
          secure: process.env.NODE_ENV === "production", // ✅ Secure only in production
          sameSite: "none",
          maxAge: 60 * 60 * 1000, // 1 hour
        }).json({ message: "Signed Up successfully" });  
      } catch (err) {
        console.error("Signup error:", err.message);
        res.status(500).json({ error: "Failed to sign up" });
    }

    // frontend and backend are on different domains or ports, that means you're dealing with cross-origin requests, and sameSite: "None" is the correct configuration to use for cookies.
    // However, when using sameSite: "None", cookies must be marked as secure, meaning your site must be served over HTTPS for this to work. This is likely why you're encountering issues locally, as local development servers typically run on HTTP (not HTTPS).
});

app.post("/login", async (req, res) => {
  try {
      // Get user data from the request body
      const data = req.body;
      // Check if the user already exists using the findOne() method
      const existingUser = await User.findOne({ email: data.email }).lean();

      if (!existingUser || !await bcrypt.compare(data.password, existingUser.password)) {
         // Don't reveal user existence
         return res.status(401).json({ error: "Invalid email or password" });//generic response either credential issue or user not found
      }

      const tokenPayload = { _id: existingUser._id, email: existingUser.email }
      const token = jwt.sign(tokenPayload, SECRET_KEY, {
        expiresIn: "1h", // Token expires in 1 hour
      });

       // ✅ Set HTTP-only cookie & send JSON response
        res.status(200).cookie("accessToken", token, {
        httpOnly: true,
        // secure: true,
        secure: process.env.NODE_ENV === "production", // ✅ Secure only in production
        sameSite: "none",
        maxAge: 60 * 60 * 1000, // 1 hour
      }).json({ message: "Logged in successfully" });

      //json need to be passed to send a cookie usually
      // CORS is necessary when the frontend and backend are on different origins (domains or ports). sameSite: "Strict" is permitted to the frontend domain only
  } catch (err) {
      console.error("Sign in error:", err.message);
      return res.status(500).json({ error: "Failed to sign in" });
  }
});

// Logout route to clear the cookie
app.post("/logout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
  }); // Clear the token cookie
  res.json({ message: "Logged out successfully" });
});

app.post("/tool", authenticateToken, async (req, res) => {
  try {
      const data = req.body;
      console.log(data)
      const toolData = new ToolData(data);
      await toolData.save();
      res.status(200).json({ message: "Tool Data added successfully" });
  } catch (err) {
      console.error("Tool creation error:", err.message);
      res.status(500).json({ error: "Failed to add tool", err });
  }
});

app.get("/recommendations", authenticateToken, async (req, res) => {
  try {
      const token = req.cookies.accessToken; // Get the token from cookies
      const decoded = jwt.verify(token, SECRET_KEY);
      const tools = await ToolData.find({ clinician: decoded.email }).lean();
      res.status(200).json({ tools });
  } catch (err) {
      console.error("Tool fetching error:", err);
      res.status(500).json({ error: "Failed to fetch tools" });
  }
});


// ✅ Catch-All Route (404)
app.get("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

module.exports = app;
