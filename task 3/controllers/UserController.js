const { User } = require("../models");

class UserController {
  getAll = async (req, res) => {
    try {
      const findAll = await User.find();
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  };

  getOne = async (req, res) => {
    try {
      const findAll = await User.findOne({
        _id: req.params.id
      })
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  };

  create = async (req, res) => {
    try {
      const data = await User.create(req.body)

      return res.status(201).json({
        messge: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }

  };

  update = async (req, res) => {
    try {
      const data = await User.updateOne({
        _id: req.params.id
      }, req.body, {new: true})

      return res.status(201).json({
        message: "Success",
        data
      })
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error at Controller",
        error: e
      })
    }

  };

  delete = async (req, res) => {
    try {
      await user.deleteOne({
        _id: req.params.id
      })

      return res.status(200).json({
        message: "Success"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error"
      })
    }

  };
}

module.exports = new UserController();
