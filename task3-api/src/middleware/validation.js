const helper = require('../helpers')
require('dotenv').config()

module.exports = {
    validation: function(request, response, next) {

       const data=request.body
       if(data.name && data.email){
           next()
       }
       else{
        helper.response(response, 422, {message: "data validation not passed"})
       }
    } ,
    
}