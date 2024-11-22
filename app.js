const express = require('express')
const app =express();
const dotenv= require("dotenv").config();
const moongose=require('mongoose')
moongose.connect(process.env.DATABASE_URL)
const db=moongose.connection
db.on('error',error=>{console.error(error)})
db.once('open',()=>console.log('connected to mongo'))
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const port = process.env.PORT;


const postRoutes= require("./routes/posts_routes");
app.use("/posts",postRoutes);

app.listen(port,()=>{
    console.log(`Example app listenenig on port : http://localhost:${port} !`);
});



