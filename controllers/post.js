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

const deletePostById= async (req,res)=>{
    const item = await postModel.findByIdAndDelete(req.params.id)
    console.log("Post deleted by ID")
    res.send("post deleted by id")
};

const deleteAllPosts = async(req,res)=>{
    const item = await postModel.deleteMany({})
    console.log("All documents deleted")
    res.send("All items deleted from database")
}

const updatePost = async(req,res)=>{
    const data = req.body
    const item = await postModel.findByIdAndUpdate(req.params.id,{title:data.title,content:data.content,owner:data.owner})
    console.log("Item replaced")
    res.send("Item replaced")
}

module.exports={
    getAllPosts,
    createPost,
    getPostBySender,
    deletePostById,
    deleteAllPosts,
    updatePost
};