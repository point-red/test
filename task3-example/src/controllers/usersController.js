exports.create = (res, req, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;

    res.json({
        message: 'success',
        data:{
            id: 1,
            name: name,
            email: email,
            age: age
        }
    });
    next();
}