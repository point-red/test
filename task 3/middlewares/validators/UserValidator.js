const { User } = require("../../models")
const validator = require("validator")

class UserValidators {
  getOne = (req, res, next) => {
    if(req.params.id) {
      return res.status(400).json({
        message: "Bad request",
        error: "Id is required",
      });
    }
    next()
  }

  create = (req, res, next) => {
    const error = []
    if(!validator.isEmail(req.body.email)){
      error.push("Not Valid email")
    }
    if(req.body.name.length < 0){
      error.push("Name is required")
      
    }
    if(error.length > 0){
      return res.status(422).json({
        message: error.join(", ")
      });
    } 
    
    next()
  }

  update = (req, res, next) => {
    const error = []

    if(req.params.id) {
      error.push("id is required")
    }
    if(!validator.isEmail(req.body.email)){
      error.push("Not Valid email")
    }
    if(req.body.name.length < 0){
      error.push("Name is required")
    }
    if(error.length > 0){
      return res.status(422).json({
        message: error.join(", ")
      });
    } 
    
    next()
  }
  delete = (req, res, next) => {
    if(req.params.id) {
      return res.status(400).json({
        message: "Bad request",
        error: "Id is required",
      });
    }
  }
}

module.exports = new UserValidators();