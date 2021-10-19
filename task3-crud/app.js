const express = require('express')

const { sequelize,
  User,
} = require('./models')
const { body, oneOf, validationResult, check} = require('express-validator');
const app = express()
app.use(express.json())

app.post('/users',
    body('name').exists().withMessage('must be exist with current Name string datatype'),
    body('email').isEmail(),
    async (req, res) => {
  const { name, email, age } = req.body

  try {
    const user = await User.create({ name, email, age })

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll()

    return res.json(users)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
})


app.listen({ port: 5000 }, async () => {
  console.log('Server up on http://localhost:5000')
  await sequelize.authenticate()
  console.log('Database Connected!')
})
