const users = [];

class Controllers {
    async add(req, res) {
        const data = {
            id: users.length + 1,
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        }

        users.push(data)

        const isSuccess = users.filter((user) => user.id === id).length > 0;

        if(!isSuccess) {
            return res.status(500).send({
                status: 'fail',
                message: 'Internal Error'
            })
        }
        return res.status(200).json({
            status: 'success',
            data: users[0],
        })
    }

    async one(req, res) {
        const userId = req.params.id;

        const userData = users.filter((user) => user.id === userId)[0];

        if(userData !== undefined) {
            return res.status(200).json({
                status: 'success',
                data: {
                    userData
                }
            })
        } else {
            return res.status(500).send({
                status: 'fail',
                message: 'Internal Error'
            })
        }
    }

    async all(req, res) {
        const data = users.map((user) => ({
            id: users.id,
            name: users.name,
            email: users.email,
            age: users.age,
        }));

        return res.status(200).json({
            status: 'success',
            data: data,
        })
    }

    async update(req, res) {
        const userId = req.params.id;

        const data = {
            id: userId,
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        };

        let findUser = users.find(user => user.id == userId);

        if(!findUser) {
            return res.status(402).send({
                status: 'fail',
                message: 'User ID not found!',
            })
        }

        findUser.id = data.id,
        findUser.name = data.name,
        findUser.email = data.email,
        findUser.age = data.age

        return res.status(200).json({
            status: 'success',
            data: findUser
        })
    }

    async delete(req, res) {
        const userId = req.params.id;
        let findUser = users.findIndex(user => user.id == userId);

        if(!findUser) {
            return res.status(402).send({
                status: 'fail',
                message: 'User ID not found!',
            })
        }

        const splices = users.splice(findUser, 1)

        return res.status(200).json({
            status: 'success',
            message: 'User deleted!',
            data: null
        })
    }
}

module.exports = new Controllers;