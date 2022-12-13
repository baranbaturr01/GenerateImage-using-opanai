const express = require("express")
const path = require('path')
require('dotenv').config()


const app = express()

app.get('/', (req, res, next) => {
    res.json("hello")
})
// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/opeaiRoutes'))

app.listen(process.env.PORT, () => {
    console.log("Server is started on port " + process.env.PORT);
})