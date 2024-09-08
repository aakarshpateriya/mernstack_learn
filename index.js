const express = require('express') 
require('dotenv').config() // This is to use different port in production in env file

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send("This is Twitter.")
})

app.get('/login', (req,res) => {
  res.send('<h1> This is Login Page </h1>')

})

app.get('/youtube', (req, res) => {
  res.send("<h1> Bootstrap LPU </h2>")
})

app.listen(process.env.PORT , () => { // Here the port is taken from .env file
  console.log(`Example app listening on port ${port}`)
})

