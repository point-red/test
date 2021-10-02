const express = require('express');
const app = express();

const userRouter = require('./src/routes/user');

app.use(express.json());


app.use('/user', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
