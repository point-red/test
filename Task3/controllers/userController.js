const user = require("../models").User;

class UserController {
    async getAll(req, res) {
        user.findAll().then(user => {
            res.json(user)
        })
    }

    async getOne(req, res) {
        user.findOne({
            where: {
                id: req.params.id
            },
        }) .then(user => {
            res.json(user)
        })
    }

    async create(req, res) {
        user.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })
        .then(newUser => {
            res.json({
                "Status": "Success",
                "Message": "Pelanggan added",
                "data": newUser
            })
        })
    }

    async update(req, res) {
        const update = {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
        user.update(update, {
                where: {
                    id: req.params.id
                }
            })
            .then(affectedRow => {
                if (affectedRow) {
                    return user.findOne({
                        where: {
                            id: req.params.id
                        }
                    })
                }

            })
            .then(user => {
                res.json({
                    "status": "success",
                    "message": "User berhasil di update",
                    "data": user
                })
            })
    }

    async delete(req, res) {
        user.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(affectedRow => {
                if (affectedRow) {
                    return {
                        "status": "success",
                        "message": "User berhasil dihapus",
                        "data": null
                    }
                }

                return {
                    "status": "error",
                    "message": "Failed",
                    "data": null
                }

            })
            .then(r => {
                res.json(r)
            })

    }

}

module.exports = new UserController;