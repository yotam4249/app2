const postModel = require("../models/posts_model");
const posts_model = require("../models/posts_model");

const getAllPosts= async(req,res)=>{
    try{
        const posts=await postModel.find();
        res.status(200).send(posts);
    }catch(error){ res.status(400).send(error.message)};

};

const getPostBySender= async(req,res)=>{
    const senderFilter=req.query.owner;
    try{
        if(senderFilter){
            const postsbysender=await postModel.find({owner:senderFilter});
            res.status(200).send(postsbysender);
           
        }else{
            const postsbysender=await postModel.find();
            res.status(200).send(postsbysender);    
        }
        }catch(error){res.status(400).send(error.message)};
};

const createPost= async(req,res)=>{
   const post= req.body;
   try{
       const newPost= await postModel.create(post);
       res.status(201).send(newPost);
    }catch(error){res.status(400).send(error)};     

};

const deletePost= (req,res)=>{
    console.log("post deleted");
    res.send("post deleted")
};

const deletePostById= (req,res)=>{
    console.log("post deleted By is");
    res.send("post deleted by id")
};

module.exports={getAllPosts,createPost,deletePost,getPostBySender,deletePostById};