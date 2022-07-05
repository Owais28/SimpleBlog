const express = require('express')
const mongoose = require('mongoose')

const app = express()

const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 3000;
const ejs = require('ejs')

const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log("App listening at port " + port);
})

app.get('/',async (req,res)=>{

    const blogposts = await BlogPost.find({})
    res.render('index',{
        blogposts
    });
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

app.get('/posts/new', (req, res)=>{
    res.render('create');
})

app.post('/posts/store', async(req,res)=>{

    // console.log("New Post created"+req.body);
    // model creates a new doc with browser data
    await BlogPost.create(req.body)
    res.redirect('/')
})
// app.get('/about', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'about.html'))
// })