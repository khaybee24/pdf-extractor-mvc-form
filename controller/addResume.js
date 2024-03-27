const express = require('express');
const multer = require('multer');
// const multer = require('../utils/multer');
const pdfParse = require('pdf-parse');
const Resume = require('../model/ResumeModel');

const storage = multer.memoryStorage();
const upload = multer({ storage });

// module.exports = upload;

const uploaded =  async (req, res) => {
  try {
    
    if (!req.file) {
    res.status(400).json({ error: 'No file uploaded' });
    }
    const buffer = req.file.buffer;


    const data = await pdfParse(buffer);
    // console.log('Parsed data:', data);
    
    if (!data || !data.text) {
      return res.status(400).json({ error: 'Failed to parse PDF content' });
    }

    const resumeData = {
      name: extractName(data.text),
      email: extractEmail(data.text),
      phone: extractPhone(data.text),
      content: data.text,
    };
    
    const savedResume = await new Resume(resumeData).save();

    res.json({ success: true, resume: savedResume });
    function extractName(text) {
      const nameRegex = /([a-zA-Z]+[a-zA-Z\s]+)/;
      const match = text.match(nameRegex);
      return match ? match[0] : '';
    }
    
    function extractEmail(text) {
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const match = text.match(emailRegex);
      return match ? match[0] : '';
    }
    
    function extractPhone(text) {
      const phoneRegex = /(\+\d{1,2}\s?)?(\d{10,})/;
      const match = text.match(phoneRegex);
      return match ? match[0] : '';
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};











  module.exports = uploaded;