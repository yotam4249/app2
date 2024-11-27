const { error } = require("console");
const postModel = require("../models/comments_model");
const posts_model = require("../models/comments_model");
const CommentModel = require("../models/comments_model");

const getComment=async(req,res)=>{
    const comment_id  = req.params.id;
    const {post_id} = req.query;
    if(!comment_id){
        const data = await CommentModel.find({post_id:post_id})
        res.status(200).send(data)
    }
    else
    {
        const data = await CommentModel.findById(comment_id)
        res.status(200).send(data)
    }

};

const createComment = async(req,res)=>{
    const comment= req.body;
    try{
        const newComment= await CommentModel.create(comment);
        res.status(201).send(newPost);
     }catch(error){res.status(400).send(error)};     
 
 };
 

const updateComment =  async(req,res)=>{
    const data = req.body
    const item = await CommentModel.findByIdAndUpdate(req.params.id,{post_id:data.post_id,comment:data.comment})
    console.log("Item replaced")
    res.send("Item replaced")
}


const deleteCommentById = async (req,res)=>{
    const item = await CommentModel.findByIdAndDelete(req.params.id)
    console.log("Post deleted by ID")
    res.send("post deleted by id")
};


module.exports={
    getComment,
    createComment,
    updateComment,
    deleteCommentById
};