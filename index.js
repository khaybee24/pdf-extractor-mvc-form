const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const morgan = require('morgan');
const db = require('./db/db');
const app = express();
const router = require('./routes/uploadRoute');
// const Resume = require('./controller/addResume');
const model = require('./model/ResumeModel');

const port = process.env.Port || 3000;
app.use(morgan('dev'));

db();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use("/api/v1", router);

app.get('/', (req,res)=> {
    res.send('Home page')
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});