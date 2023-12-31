const express = require('express')
const dotenv = require('dotenv').config()

const contactRoutes = require('./routes/contactRoutes')
const usersRoute = require('./routes/usersRoute')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')

connectDB()
const app = express()

const port = process.env.PORT

app.use(express.json())

app.use('/api/contacts', contactRoutes)
app.use('/api/users', usersRoute)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})