const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const usersRoutes = require('./src/routes/users');

app.use(bodyParser.json())

app.use('/', usersRoutes)
app.get("*", (req, res) => {
    res.status(422).send("data validation not passed");
});
app.listen(4000);