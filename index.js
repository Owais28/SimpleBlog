const express = require('express')

const app = express()

const path = require('path')
const port = process.env.PORT || 3000;
const ejs = require('ejs')

app.use(express.static('public'))
app.set('view engine','ejs')

app.listen(port, ()=>{
    console.log("App listening at port " + port);
})

app.get('/',(req, res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('index')
})

app.get('/about', (req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})

app.get('/contact', (req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact')
})

app.get('/post', (req,res)=>{
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
})

// app.get('/about', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'about.html'))
// })