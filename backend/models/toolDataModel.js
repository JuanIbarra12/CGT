const mongoose = require('mongoose');

const ToolDataSchema = new mongoose.Schema({
  clinicianAssessing: {
    type: String,
    required: true,
  },
  areaOfUse: {
    type: String,
    required: true,
  },
  providedCondition: {
    type: String,
    required: true,
  },languageStatus
  : {
    type: Boolean,
    required: true,
  },
  clientLanguageStatus: {
    type: String,
    required: true,
  },
  languageOfTest: {
    type: String,
    required: true,
  },
  ethnicity: {
    type: String,
    required: true,
  },
  educationalLanguage: {
    type: String,
    required: true,
  },
  certifiedInterpreter: {
    type: Boolean,
    required: true,
  },
  clinician: {
    type: mongoose.Schema.Types.String,
    ref: 'User' 
  },
}, { timestamps: true });

module.exports = mongoose.model('Tool', ToolDataSchema);