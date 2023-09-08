const express = require('express')
require('dotenv').config()
const app = express ()
const PORT = 3000 || process.env.PORT
const HOST = "127.0.0.1"|| process.env.HOST


app.get('/',(req,res)=>{
    res.json("Hello World!")
})


app.get('/welcome',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})



app.listen(PORT)
console.log('Listening to the http://'+HOST +":" +PORT)