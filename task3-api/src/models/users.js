const connection = require('../config/mysqlConn')

module.exports = {
    getUsers: function() {
        return new Promise(function(resolve,reject){
            connection.query('SELECT * from user',function (error,result) {
                if(!error){
                    resolve(result)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    getUserByName: function(name) {
        return new Promise(function(resolve,reject){
            connection.query(`SELECT * from user WHERE name=${name}`,function (error,result) {
                if(!error){
                    resolve(result)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    postUser: function(body) {
        return new Promise(function(resolve,reject){
            connection.query('INSERT INTO user SET ?', body, function(error, result) {
                if(!error){
                    const newData = {
                        id: result.insertId,
                        ...body ,
                    }
                    resolve(newData)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    putUser: function(name,body) {
        return new Promise(function(resolve,reject){
            connection.query('UPDATE user SET ? WHERE name = ?', [body, name], function(error, result) {
                if(!error){
                    const newData = {
                        name: name,
                        ...body ,
                        
                    }
                    resolve(newData)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
    deleteUser: function(name) {
        return new Promise(function(resolve,reject){
            connection.query('DELETE from user WHERE name = ?',name, function(error, result) {
                if(!error){
                    const newData = {
                        name: name,
                        ...result
                        
                    }
                    resolve(newData)
                }
                else{
                    reject(new Error(error))
                }
            })
        })
    },
}