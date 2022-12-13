const express = require("express")
require('dotenv').config()


const app = express()

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/openai', require('./routes/opeaiRoutes'))

app.listen(process.env.PORT, () => {
    console.log("Server is started on port " + process.env.PORT);
})