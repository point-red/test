var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

var table = 'user';

/* GET users listing. */
router.get('/', function(req, res, next) {
    dbConn.query('SELECT * FROM '+ table +' ORDER BY id desc',function(err,rows)     {
        if(err) {
          res.send({
            code: 422,
            message:"User not found"
          });
        } else {
          res.send({data:rows});
        }
    });
});

// add a new user
router.post('/add', function(req, res, next) {

    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;
    let errors = false;

    if(name.length === 0 || email.length === 0) {
        errors = true;
        res.send({
          code: 422,
          message:"Please enter all required field"
        });
    }

    if (age.length === 0) age = 0

    // if no error
    if(!errors) {

        var form_data = {
            name: name,
            email: email,
            age: age
        }

        dbConn.query('SELECT * FROM '+ table +' WHERE email = "' + email +'"', function(checkerr, checkrows) {
            if(checkerr) {
              res.send({
                code: 422,
                message:checkerr
              });
            } else if (checkrows.length > 0) {
              res.send({
                code: 422,
                message:"Email already exist"
              });
            } else {
              dbConn.query('INSERT INTO '+ table +' SET ?', form_data, function(err, result) {
                  if (err) {
                      res.send({
                        code: 422,
                        message:err
                      });
                  } else {
                    res.send({
                        code: 200,
                        message:"add user successfull"
                      });
                  }
              })
            }
        })
    }
})

// update user data
router.post('/update/:id', function(req, res, next) {

    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;
    let errors = false;

    if(id.length === 0 || name.length === 0 || email.length === 0) {
        errors = true;
        res.send( {
          code: 422,
          message:"Please enter all required field"
        });
    }

    if (age.length === 0) age = 0

    // if no error
    if( !errors ) {

        var form_data = {
            name: name,
            email: email,
            age: age
        }

        dbConn.query('SELECT * FROM '+ table +' WHERE id != '+ id +' and email = "' + email +'"', function(checkerr, checkrows, fields) {
            if(checkerr){
              res.send({
                code: 422,
                message:checkerr
              });
            }

            // if user not found
            if (checkrows.length > 0) {
              res.send({
                code: 422,
                message:"Email already exist"
              });
            }
            else {
              // update query
              dbConn.query('UPDATE '+ table +' SET ? WHERE id = ' + id, form_data, function(err, result) {
                  if (err) {
                      res.send({
                        code: 422,
                        message:err
                      });
                  } else {
                      res.send({
                        code: 200,
                        message:"update user successfull"
                      });
                  }
              })
            }
        })
    }
})

// delete user
router.get('/delete/(:id)', function(req, res, next) {

    let id = req.params.id;

    dbConn.query('DELETE FROM '+ table +' WHERE id = ' + id, function(err, result) {
        //if(err) throw err
        if (err) {
          res.send({
            code: 422,
            message:err
          });
        } else {
          res.send({
            code: 200,
            message:"delete user successfull"
          });
        }
    })
})

module.exports = router;
