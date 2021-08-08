// Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //post body handler
const userRoutes = require('./routes/userRoutes.js')

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

//set static assets to public directory
app.use(express.static('public'));

app.use('/user', userRoutes) // if accessing localhost:3000/user/* we will go to userRoutes

app.listen(3000, () => console.log("server running on http://localhost:3000"))
