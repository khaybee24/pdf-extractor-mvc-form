const mongoose = require('mongoose');



const db = async () => {
 try {
    await mongoose.connect("mongodb+srv://okeowokabir:Adebayo14@atbclass.mq1ccmn.mongodb.net/")

    console.log('connected to Mongoose');

} catch (error) {
    console.log('error connecting to Mongoose');
}}

module.exports = db;