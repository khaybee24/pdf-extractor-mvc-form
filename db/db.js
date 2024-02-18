const mongoose = require('mongoose');



const db = async () => {
 try {
    await mongoose.connect('mongodb://0.0.0.0:27017/ResumeApp')

    console.log('connected to Mongoose');

} catch (error) {
    console.log('error connecting to Mongoose');
}}

module.exports = db;