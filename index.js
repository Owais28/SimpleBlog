const express = require('express')

const app = express()
const path = require('path')

const port = 2882;
app.use(express.static('public'))
app.listen(port, ()=>{
    console.log("App listening at port " + port);
})

app.get('/',(req, res)=>{
    res.json(
        {
            name : "Owais Athar"
        }
    )
})

app.get('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'contact.html'))
})

// app.get('/about', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'about.html'))
// })