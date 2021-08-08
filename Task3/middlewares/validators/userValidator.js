const {
    User
} = require("../../models") // Import models
const {
    check,
    validationResult,
    matchedData,
    sanitize
} = require('express-validator'); //form validation & sanitize form params

const multer = require('multer'); //multipar form-data
const path = require('path'); // to detect path of directory
const crypto = require('crypto'); // to encrypt something

module.exports = {
    create: [
        check('name').isString().custom(value => {
            return User.findOne({
                where: {
                    id: value
                }
            }).then(b => {
                if (!b) {
                    throw new Error('nama tidak terdaftar');
                }
            })
        }),
        check('email').isString().custom(value => {
            return User.findOne({
                where: {
                    id: value
                }
            }).then(p => {
                if (!p) {
                    throw new Error('email tidak terdaftar');
                }
            })
        }),
        check('age').isNumeric().custom(value => {
            return User.findOne({
              where: {
                id: value
              }
            }).then(p => {
              if (!p) {
                throw new Error('usia tidak terdaftar');
              }
            })
          }),
    ],

    update: [
        //Set form validation rule
        check('name').isNumeric().custom(value => {
            return User.findOne({
                where: {
                    id: value
                }
            }).then(b => {
                if (!b) {
                    throw new Error('nama tidak ada!');
                }
            })
        }),
        check('email').isString().custom(value => {
            return User.findOne({
                where: {
                    id: value
                }
            }).then(p => {
                if (!p) {
                    throw new Error('email tidak terdaftar');
                }
            })
        }),
        check('age').isNumeric().custom(value => {
            return User.findOne({
              where: {
                id: value
              }
            }).then(p => {
              if (!p) {
                throw new Error('usia tidak terdaftar');
              }
            })
          })
    ],
};