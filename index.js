const express = require('express')

const app = express()

const path = require('path')
const port = 2882;
const ejs = require('ejs')

app.use(express.static('public'))
app.set('view engine', ejs)
app.listen(port, ()=>{
    console.log("App listening at port " + port);
})

app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'))
})

app.get('/about', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about.html'))
})

app.get('/contact', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/contact.html'))
})

app.get('/post', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'pages/post.html'))
})

// app.get('/about', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'about.html'))
// })