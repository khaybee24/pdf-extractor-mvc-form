const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  content: { type: String },
});

const Resume = mongoose.model('Resume', resumeSchema);


module.exports = Resume;