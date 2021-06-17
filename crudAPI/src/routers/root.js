const express = require('express')
const router = new express.Router()

router.get("", (_, res) => {
    res.send({message: "OK"})
})

module.exports = router
