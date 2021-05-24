const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.static("assets"));
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "task3",
});

app.get("/", (req, res) => {
    connection.query("SELECT * FROM users", (error, results) => {
        res.render("index.ejs", { users: results });
    });
});

app.get("/add-user", (req, res) => {
    res.render("add.ejs");
});

app.post("/create", (req, res) => {
    const adduser = {
        name: req.body.userName,
        email: req.body.userEmail,
        age: req.body.userAge,
    };
    connection.query("INSERT INTO users SET ?", adduser, (error, results) => {
        res.redirect("/");
    });
});

app.post("/delete/:id", (req, res) => {
    connection.query(
        "DELETE FROM users WHERE id = ?",
        [req.params.id],
        (error, results) => {
            res.redirect("/");
        }
    );
});

app.get("/edit/:id", (req, res) => {
    connection.query(
        "SELECT * FROM users WHERE id = ?",
        [req.params.id],
        (error, results) => {
            res.render("update.ejs", { user: results[0] });
        }
    );
});

app.post("/update/:id", (req, res) => {
    const updateuser = {
        name: req.body.userName,
        email: req.body.userEmail,
        age: req.body.userAge,
    };
    connection.query(
        "UPDATE users SET ? WHERE id = ?",
        [updateuser, req.params.id],
        (error, results) => {
            res.redirect("/");
        }
    );
});

app.get("*", (request, response) => {
    response.status(422).send("data validation not passed");
});

app.listen(3000);