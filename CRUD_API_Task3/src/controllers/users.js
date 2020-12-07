const modelUser = require('../models/users')

module.exports = {
    createUser: (req, res) => {
        const { name, email, age } = req.body
        const data = {
            name,
            email,
            age
        }

        modelUser.createUser(data)
        .then((result) => {
            res.json({
                status: 201,
                messages: '',
                data: result,
              });
        })
        .catch((err) => {
            console.log(err)
            res.json({
                status: 422,
                messages: 'validation not passed',
                data: {},
              });
        })
    },
    readUser: (req, res) => {
        modelUser.readUser()
        .then((result) => {
            res.json({
                status: 200,
                messages: '',
                data: result,
              });
        })
        .catch((err) => {
            res.json({
                status: 404,
                messages: 'user not found',
                data: {},
              });
        })
    },
    updateUser: (req, res) => {
        const id = req.params.id
        const { name, email, age } = req.body
        const data = {
            name,
            email,
            age
        }

        modelUser.updateUser(id, data)
        .then((result) => {
            res.json({
                status: 200,
                messages: result
              });
        })
        .catch((err) => {
            console.log(err)
            res.json({
                status: 403,
                messages: 'Update failed'
              });
        })
    },
    deleteUser: (req, res) => {
        const id = req.params.id
        modelUser.deleteUser(id)
        .then((result) => {
            res.json({
                status: 200,
                messages: result
              });
        })
        .catch((err) => {
            res.json({
                status: 403,
                messages: 'Delete failed'
              });
        })
    }
}