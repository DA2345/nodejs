const express = require('express')
require('dotenv').config()
const app = express ()
const PORT = 3000 || process.env.PORT
const HOST = "127.0.0.1"|| process.env.HOST

app.use(express.static('public'))

app.use(express.json())

const countries=[]

app.get('/',(req,res)=>{
    res.json("Hello World!")
})



app.get('/welcome',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/countries', (req,res)=>{
    res.status(200).json(countries)
})

app.get('/countries/:id', (req,res)=>{
    const countryID = parseInt(req.params.id)
    const country= countries.find(c=> c.id === countryID)
    if (!country)
       return res.status(404).send("Error the country id is not found")
    else {
        res.status(200).json(country)
    }
})

app.post('/countries',(req,res)=>{
    const country=req.body;
    const countryExists= countries.find(c=> c.name === country.name)
    if (countryExists)
        res.status(400).json({errror: "The country already exists!"})
    else
    {
        country.id=countries.length+1
        countries.push(country)
        res.status(201).json(country)
    }
        

})

app.listen(PORT)
console.log('Listening to the http://'+HOST +":" +PORT)



