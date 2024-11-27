const { json } = require("body-parser");
const { default: mongoose } = require("mongoose");
const moongose=require("mongoose")


const commentSchema = new mongoose.Schema({
    post_id:{
        type:String,
        required:true
    },
    comment: {
        type:String,
        required:true
    }
})

const CommentModel=moongose.model('comment',commentSchema)
module.exports=CommentModel;