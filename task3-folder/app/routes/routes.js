module.exports = (app) => {
    const data = require('../controllers/controller.js');
    const validator = require("../middlewares/validators/validator.js");
    // Create a new data
    app.post('/data/', validator.create, data.create);

    // Retrieve all datas
    app.get('/data/', data.findAll);

    // Retrieve a single data with data id
    app.get('/data/:id', data.findOne);

    // Update a data with data id
    app.put('/data/:id',validator.update, data.update);

    // Delete a data with data id
    app.delete('/data/:id', data.delete);
}