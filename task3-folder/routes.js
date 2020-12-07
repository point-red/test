module.exports = function (app) {
  
  const controller = require ('./controller/controller');
  const welcome = require ('./controller/welcome');


  //Routing engineers
  //GET
  app.route ('/').get(welcome.welcome);
//   app.route ('/engineers/users').get (controller.users);
//   app.route ('/engineers/user/:id').get (controller.user);
//   //POST
//   app.route ('/engineers/user').post (controller.add);
//   //PATCH
//   app.route ('/engineers/user/:id').patch (controller.update);
//   //DELETE
//   app.route ('/engineers/user/:id').delete (controller.destroy);
 
};

