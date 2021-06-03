const db_connection = require("../db-connection").promise();

// INSERTING USER
exports.insert = async (req, res, next) => {

  if (!req.body.name || !req.body.email) {
    return res.status(400).json({
      message: "The fields are required to fill!",
      fields: ["name", "email"],
    });
  }

  try {
      
    const [rows] = await db_connection.execute(
      "INSERT INTO `user`(`name`,`email`,`age`) VALUES(?, ?)",
      [req.body.name, req.body.email]
    );

    if (rows.affectedRows === 1) {
      return res.status(201).json({
        message: "The user added successfully!",
        userID: rows.insertId,
      });
    }

  } catch (err) {
    next(err);
  }
  
};

// FETCHING ALL USERS
exports.getAllUsers = async (req, res, next) => {
  try {

    const [rows] = await db_connection.execute("SELECT * FROM `user`");

    if (rows.length === 0) {
      return res.status(200).json({
        message:
          "Data not found, please add data users!",
      });
    }

    res.status(200).json(rows);

  } catch (err) {
    next(err);
  }

};


// FETCHING SINGLE USER
exports.getUserByID = async (req, res, next) => {

  try {

    const [row] = await db_connection.execute(
        "SELECT * FROM `user` WHERE `id`=?",
        [req.params.id]
    );

    if (row.length === 0) {
      return res.status(404).json({
        message: "User Not Found!",
      });
    }

    res.status(200).json(row[0]);

  } catch (err) {
    next(err);
  }

};

// UPDATING USER
exports.updateUser = async (req, res, next) => {
  try {

    const [row] = await db_connection.execute(
        "SELECT * FROM `user` WHERE `id`=?",
        [req.params.id]
    );

    if (row.length === 0) {
      return res.status(404).json({
        message: "User ID is not valid!",
      });
    }

    if (req.body.name) row[0].name = req.body.name;

    if (req.body.email) row[0].email = req.body.email;

    const [update] = await db_connection.execute(
      "UPDATE `user` SET `name`=?, `email`=?, `age`=? WHERE `id`=?",
      [row[0].name, row[0].email, req.params.id]
    );

    if (update.affectedRows === 1) {
      return res.json({
        message: "The User has been updated.",
      });
    }

  } catch (err) {
    next(err);
  }

};

// DELETING USER
exports.deleteUser = async (req, res, next) => {

  try {

    const [row] = await db_connection.execute(
        "DELETE FROM `user` WHERE `id`=?",
        [req.params.id]
    );

    if (row.affectedRows === 0) {
      return res.status(404).json({
        message: "Invalid user ID (No User Found!)",
      });
    }

    res.status(200).json({
      message: "The user has been deleted!.",
    });
    
  } catch (err) {
    next(err);
  }

};