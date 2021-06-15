const express = require('express');
const app = express();
const Validators = require('./validators');
const Controllers = require('./controllers')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`🚀 Server run on port ${port} 🚀`)
})

app.get('/all', Controllers.all);
app.get('/one/:id', Validators.one, Controllers.one);
app.post('/add', Validators.fields, Controllers.add);
app.put('/update/:id', Validators.both, Controllers.update);
app.delete('/delete', Validators.one, Controllers.delete)
