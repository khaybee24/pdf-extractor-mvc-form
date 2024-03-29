const mongoose = require('mongoose');



const db = async () => {
 try {
    await mongoose.connect(process.env.MONGO)

    console.log('connected to Mongoose');

} catch (error) {
    console.log('error connecting to Mongoose');
}}

module.exports = db;