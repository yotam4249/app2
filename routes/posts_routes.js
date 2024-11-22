const express=require("express");
const router= express.Router();
const Post =require("../controllers/post")
router.get("/", Post.getAllPosts);

router.get("/", Post.getPostBySender);

router.post("/",Post.createPost);

router.delete("/",Post.deletePost);

router.delete("/:id",Post.deletePostById);

module.exports=router;