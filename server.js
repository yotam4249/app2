const express = require('express')
const app = express();
const dotenv= require("dotenv").config();
const mongoose=require('mongoose')




const initApp = ()=>{
return new Promise((resolve,reject)=>{

    const db=mongoose.connection
    db.on('error',error=>{console.error(error)})
    db.once('open',()=>console.log('connected to mongo'))
    mongoose.connect(process.env.DATABASE_URL).then(()=>{

        const bodyParser=require("body-parser");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
    
        const postRoutes= require("./routes/posts_routes");
        app.use("/posts",postRoutes);
    
        const commentRoutes = require("./routes/comment_routes")
        app.use("/comments",commentRoutes)

        resolve(app)

    })
    })
}


module.exports = initApp

