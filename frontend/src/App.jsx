import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Tool from './features/Tool/Tool';
import "./App.css"
import Login from './features/Login/Login';
import SignUp from './features/SignUp/SignUp';
import Resources from './features/Resources/Resources';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Recommendations from './features/Recommendations/Recommendations';
import ScrollToTop from './components/layout/ScrollToTop';
import CognitiveTesting from './features/Tests/CognitiveTesting';
import CulturalCompetency from './features/Tests/CulturalCompetency';
import ResearchData from './features/Tests/ResearchData';
import FullResearch from './features/Tests/FullResearch';

function App() {
  
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <AuthProvider>
            <Router>
              <ScrollToTop />
              <main className='flex-grow'>
                  <Routes>
                      {/* <Route path="/" element={<Home />}/> */}
                      <Route
                          path="/"
                          element={
                              <>
                                <Navbar />
                                <Home />
                              </>                       
                      }
                      />
                      <Route
                          path="/tool"
                          element={
                            <>
                              <ProtectedRoute>
                                <Navbar />
                                <Tool />
                              </ProtectedRoute>
                            </>
                          }
                      />
                      <Route
                          path="/recommendations"
                          element={
                            <>
                              <ProtectedRoute>
                                <Navbar />
                                <Recommendations />
                              </ProtectedRoute>
                            </>
                          }
                      />
                      {/* <Route path="/tool" element={<Tool />} /> */}
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/resources" element={<><Navbar/><Resources /></>} />
                      <Route path="/cognitive-testing" element={<><Navbar/><CognitiveTesting /></>} />
                      <Route path="/cultural-competency" element={<><Navbar/><CulturalCompetency /></>} />
                      <Route path="/research-data" element={<><Navbar/><ResearchData /></>} />
                      <Route path="/full-research" element={<><Navbar/><FullResearch /></>} />
                      <Route path="*" element={<><Navbar /><p className='flex items-center justify-center py-64 text-center text-[70px]'>404 Not Found</p></>} />
                  </Routes>
              </main>
              <Footer />
            </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;