const { readdir } = require("fs").promises
const { join } = require("path")

const express = require("express")
const app = express()

const routersPath = join(__dirname, "routers")
console.log(routersPath)

readdir(routersPath)
    .then((files) => {
        files.forEach((file) => {
            app.use(require(routersPath + "/" + file))
            console.log(`Router file ${file} is loaded.`)
        })
    })
    .catch((e) => console.log(e))

app.listen(3000, () => {
    console.log("listen at port 3000")
})
