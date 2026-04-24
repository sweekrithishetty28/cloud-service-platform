require("dotenv").config()

const express=require("express")
const app=express()
const multer=require("multer")
const postModel=require("./db/models/post.model")
const cors=require("cors");
const uploadFile=require("./db/services/storage.service")

app.use(cors())
app.use(express.json())

const upload=multer({storage:multer.memoryStorage()})

app.post("/createPost",upload.single("image"),async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const result=await uploadFile(req.file.buffer);
    const post=await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    res.status(201).json({
        message:"Post Created Successfully",
        post
    })

})

app.get('/getPosts',async(req, res)=>{
    const posts=await postModel.find()

    res.status(200).json({
        message:"Posts fetched successfully",
        posts

    })
})



module.exports=app