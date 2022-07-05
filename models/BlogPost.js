const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
// const uri = process.env.URI 
mongoose.connect(process.env.URI || "mongodb+srv://heroku-server-blog:5MrMbZva21tGI49m@learningmongodb.th3y3yh.mongodb.net/my_database?retryWrites=true&w=majority", {useNewUrlParser: true});
const Schema = mongoose.Schema;

// Blog Post Schema for Blog Post Model
const BlogPostSchema = new Schema(
    {
        title : String,
        body : String
    }
)

const BlogPost = mongoose.model('BlogPost',BlogPostSchema)

module.exports = BlogPost