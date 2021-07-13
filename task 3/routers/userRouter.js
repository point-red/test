// import express and use router method
const router = require("express").Router();
const UserController = require("../controllers/UserController");
const UserValidator = require("../middlewares/validators/UserValidator");
// router setup
router.get("/",  UserController.getAll);
router.get("/:id", UserValidator.getOne, UserController.getOne);
router.post("/", UserValidator.getOne, UserController.create);
router.put("/", UserValidator.getOne, UserController.update);
router.delete("/:id", UserValidator.getOne, UserController.delete);
// export router object
module.exports = router;