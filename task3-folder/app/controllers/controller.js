const dataUser = require('../models/model.js');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    dataUser.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving datas."
        });
    });
};

// Find a single user with an id
exports.findOne = (req, res) => {
    dataUser.findById(req.params.id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.id
        });
    });
};

// Create and Save a new data User
exports.create = (req, res) => {

    // Create a Data
    const Data = new dataUser({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });

    // Save Data in the database
    Data.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the data."
        });
    });
};

// Update a data user identified by the id in the request
exports.update = (req, res) => {

    // Find data user and update it with the request body
    dataUser.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }, {new: true})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating data with id " + req.params.id
        });
    });
};

// Delete a data with the specified id in the request
exports.delete = (req, res) => {
    dataUser.findByIdAndRemove(req.params.id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send({message: "Data user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete data with id " + req.params.id
        });
    });
};