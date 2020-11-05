const userModel = require('../models/users')
const helper = require('../helpers')


module.exports = {

    getUsers: async function (request, response) {
        try {
            const result = await userModel.getUsers()
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)

            return helper.response(response, 500, error)

        }

    },
    getUserByName: async function (request, response) {
        try {
            const name = request.params.name
            const result = await userModel.getUserByName(name)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
    postUser: async function (request, response) {
        try {
            const body = request.body
            const result = await userModel.postUser(body)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
    putUser: async function (request, response) {
        try {
            const body = request.body
            const name = request.params.name
            const result = await userModel.putUser(name,body)
            return helper.response(response, 200, result)

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
    deleteUser: async function (request, response) {
        try {
            const name = request.params.name
          
            const result = await userModel.deleteUser(name)
            if(result.affectedRows>0){
                return helper.response(response, 200, result)
            }
           
            return response.json({"Status code":204})

        } catch (error) {
            console.log(error)
            return helper.response(response, 500, error)
        }

    },
   
}
