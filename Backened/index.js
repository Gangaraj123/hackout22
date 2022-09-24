// index.js, starting point of the app
const express = require('express'); // importing express
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, './.env') });

const mongoose=require('mongoose')
const port=process.env.PORT || 3000;
 const app = express(); // creating an instance of express
 mongoose.connect(process.env.MONGO_URI)
 .then((result) => {
     console.log('Connected!!')
     app.listen(port); // launching app after connected to db
     // listening on port
 })
 .catch((err) => {
     console.log("some error occured");
 })
//Home page
app.get('/', (req, res) => {
   res.send("ehllwo sdjfk ")
})
