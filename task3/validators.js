module.exports = {
    fields: [
        (req, res, next) => {
            const data = {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
            }

            if(data.name !== String || data.name == undefined) {
                return res.status(422).send({
                    status: 'failed',
                    message: 'Please fill the name field!'
                })
            } 

            if(data.email !== string || data.email == undefined) {
                return res.status(422).send({
                    status: 'failed',
                    message: 'Please fill the email field!'
                })
            } 

            if(data.age !== number && data.age.length > 2 && data.age == undefined) {
                return res.status(422).send({
                    status: 'failed',
                    message: 'Please enter valid age!'
                })
            }

            next();
        }
    ],

    one: [
       (req, res, next) => {
           const id = req.params.id;

           if(id !== Number || id == undefined) {
               return res.status(422).send({
                   status: 'failed',
                   message: 'User ID is not found!'
               })
           }

           next();
       }
    ],

    both: [
        (req, res, next) => {
            const data = {
                id: req.params.id,
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
            }

            if(data.id !== Number || data.id == undefined) {
                return res.status(422).send({
                    status: 'failed',
                    message: 'User ID not found!'
                })
            }

            if(data.name !== String || data.name == undefined) {
                return res.status(422).send({
                    status: 'failed',
                    message: 'Please fill the name field!'
                })
            } 

            if(data.email !== string || data.email == undefined) {
                return res.status(422).send({
                    status: 'failed',
                    message: 'Please fill the email field!'
                })
            } 

            if(data.age !== number && data.age.length > 2 && data.age == undefined) {
                return res.status(422).send({
                    status: 'failed',
                    message: 'Please enter valid age!'
                })
            }

            next();
        }
    ],
}
