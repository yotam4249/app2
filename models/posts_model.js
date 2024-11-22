const moongose=require("mongoose")
const postSchema= new moongose.Schema({
    title: {type :String,
        required:true,
    },
    content: {type :String,
        required:true,
    },
    owner: {type :String,
        required:true,
    },
});
const postModel=moongose.model('Post',postSchema)
module.exports=postModel;