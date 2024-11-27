const express=require("express");
const router= express.Router();
const comment = require("../controllers/comments")

router.get("/", comment.getComment);

router.post("/",comment.createComment);

router.put("/:id",comment.updateComment)

router.delete("/:id",comment.deleteCommentById);


module.exports=router;