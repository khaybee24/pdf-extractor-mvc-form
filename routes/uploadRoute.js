const express = require('express');
const uploaded = require('../controller/addResume');
const multer = require('multer');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload',upload.single('resume'), uploaded )

module.exports = router