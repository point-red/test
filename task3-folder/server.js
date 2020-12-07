//definition of dependencies 
const express = require ('express');
// const bodyParser = require ('body-parser');
//const path = require('path');
const fileUpload = require('express-fileupload');
//const mime = require('mime/Mime');
//const uuid = require('uuid/v5');
//const JWT = require('jsonwebtoken');

//use defendencies of express
const app = express(),
dotenv = require('dotenv').config();


// USE CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});


//routes
const routes = require ('./routes');


//Port USE
app.listen(process.env.PORT,function()
{
    console.log('server is running on port '+process.env.PORT+' !');
});

routes(app);