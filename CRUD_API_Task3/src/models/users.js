const connection = require('../configs/db')

module.exports = {
    createUser: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE email = ?', data.email, (err, result) => {
                if (!err) {
                    if (result != '') {
                        resolve('Email is already exists')
                    } else {
                        connection.query('INSERT INTO user SET ?', data, (err, result) => {
                            if (!err) {
                                resolve(result)
                            } else {
                                console.log(err)
                                reject(new Error(err))
                            }
                        })
                    }
                } else {
                    console.log(err)
                    reject(new Error(err))
                }
            })
        })
    },
    readUser: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    console.log(err)
                    reject(new Error(err))
                }
            })
        })
    },
    updateUser: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET ? WHERE id = ? ', [data, id], (err, result) => {
                if (!err) {
                    resolve('Update User Success')
                } else {
                    console.log(err)
                    reject(new Error(err))
                }
            })
        })
    },
    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user WHERE id = ?', id, (err, result) => {
                if (!err) {
                    resolve('Delete User Success')
                } else {
                    console.log(err)
                    reject(new Error(err))
                }
            })
        })
    }
}
