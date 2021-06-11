'use strict';

const User = require('../models/user.model');

exports.getAll = function(req, res){
    User.getAll(function(err, user){
        if(err)

        res.send(err);

        res.send(user);
    });
}

exports.create = function(req, res){
    const new_user = new User(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(422).send({ error:true, message: 'Please provide all required field' });
    } else {
        User.create(new_user, function(err, employee){
            if(err)

            res.send(err);

            res.json({
                error: false,
                message: "User added",
                data: user
            });
        });
    }
}

exports.update = function(req, res){
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(422).send({ error:true, message: 'Please provide all required field' });
    } else {
        User.update(req.params.id, new User(req.body), function(err, user){
            if(err)

            req.send(err);

            res.json({
                message: 'User updated'
            });
        });
    }
}

exports.delete = function(req, res){
    User.delete(req.params.id, function(err, user){
        if(err)

        res.send(err);

        res.json({
            message: 'User deleted'
        });
    });
}