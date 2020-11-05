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
    getUserById: function(id) {
        return new Promise(function(resolve,reject){
            connection.query(`SELECT * from user WHERE id=${id}`,function (error,result) {
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
    putUser: function(id,body) {
        return new Promise(function(resolve,reject){
            connection.query('UPDATE user SET ? WHERE id = ?', [body, id], function(error, result) {
                if(!error){
                    const newData = {
                        id: parseInt(id),
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
    deleteUser: function(id) {
        return new Promise(function(resolve,reject){
            connection.query('DELETE from user WHERE id = ?',id, function(error, result) {
                if(!error){
                    const newData = {
                        id: parseInt(id),
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