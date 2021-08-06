const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const database = require("./config/database");
const UsersModel = require("./models/model")();

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Task No.3 BMI");
});

// add data name, enail, age
app.post("/add", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    let saveData = await UsersModel.create({
      name,
      email: email,
      age: age,
    }); // save to database table

    res.send({
      status: 201,
      message: "add data success!!",
      data: saveData,
    });
  } catch (error) {
    res.send({
      status: 422,
      message: "this email has already used",
    });
  }
});

// get data
app.get("/get", async (req, res) => {
  const filter = { email: req.body.email };
  try {
    let getData = await UsersModel.findOne(filter);
    //  data validation
    if (!getData) {
      res.send({
        status: 422,
        message: `data with email ${email} not found`,
      });
    } else {
      res.send({
        status: 201,
        message: "success get data!",
        data: getData,
      });
    }
  } catch (error) {
    res.send({
      status: 422,
      message: `data with email ${req.body.email} not found`,
    });
  }
});

// update data by email
app.put("/update", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const filter = { email: email };

    let data = {
      name: name,
      email: email,
      age: age,
    };
    // data validation
    let getData = await UsersModel.findOne(filter);
    //
    if (!getData) {
      res.send({
        status: 422,
        message: `data with email ${email} not found`,
      });
    } else {
      const updateData = await UsersModel.findOneAndUpdate(filter, data, {
        new: true,
      });

      res.send({
        status: 201,
        message: "update data success",
        data: updateData,
      });
    }
  } catch (error) {
    res.send({
      status: 422,
      message: `email ${email} is not found`,
    });
  }
});

// delete by email
app.delete("/delete", async (req, res) => {
  const { email } = req.body;
  try {
    const filter = { email: email };
    // data validation
    let getData = await UsersModel.findOne(filter);
    //
    if (!getData) {
      res.send({
        status: 422,
        message: `data with email ${email} not found`,
      });
    } else {
      let deleteUser = await UsersModel.findOneAndDelete(filter);

      res.send({
        status: 201,
        message: `data with email ${email} has been deleted`,
      });
    }
  } catch (error) {
    res.send({
      status: 422,
      message: error,
    });
  }
});
