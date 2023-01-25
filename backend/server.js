const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser")
const mongoose=require("mongoose");
const dotenv=require("dotenv")

dotenv.config()
const app=express();
app.use(cors());
app.use(bodyParser.json())

const {Schema}=mongoose;
const flowerSchema=new Schema(
    {
      url:{
          type:String,
        //   required:true,
      },
      name:{
          type:String,
        //   required:true
      },
      price:{
          type:Number,
        //   required:true
      }
    },
    {timeStamps:true}
)
const Flowers=mongoose.model("flowers",flowerSchema);
//get all flowers
app.get("/flowers",(req,res)=>{
    Flowers.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    })
})
//add flower
app.post("/flowers",(req,res)=>{
    const flower=new Flowers({
        url:req.body.url,
        name:req.body.name,
        price:req.body.price
    })
    flower.save();
    res.send({message:"Successfully"})
})
//get flower by id
app.get("/flowers/:id",(req,res)=>{
    const {id}=req.params;
    Flowers.findById(id,(err,docs)=>{
        if(!err){
         if(docs){
            res.send(docs)
         }else{
            res.status(404).json({message:"Not Found"});
         }
        }else{
            res.status(500).json({message:err});
        }
    })
})
//delete
app.delete("/flowers/:id",(req,res)=>{
    const {id}=req.params;
    Flowers.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("succesfully deleted")
        }else{
            res.status(500).json({message:err})
        }
    })
})


const PORT=process.env.PORT;
const DB=process.env.DB_URL.replace("<password>",process.env.DB_PASSWORD)
mongoose.connect(DB,err=>{
    console.log(err);
    if(!err){
        console.log("connected");
        app.listen(PORT,()=>{
            console.log("App is up and running");
        })
    }
})

