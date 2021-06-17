const express = require("express")
const router = new express.Router()
const { user } = require("../../models")
const Service = require("../services/user")

const service = new Service(user)

router.get("/user", service.getAll)
router.post("/user", service.create)
router.delete("/user", service.delete)

module.exports = router
