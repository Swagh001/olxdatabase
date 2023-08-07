const express=require("express");
const {connection} =require("./config/db")
const {DataModel} =require("./Models/DataModel")
const cors=require("cors");
const app=express();


app.get("/",(req,res)=>{
    res.send("data")
})

app.use(express.json());

app.use(cors());
app.post("/postclassifieds",(req,res)=>{

    const {name,
        description,
        category,
        image,
        location,
        postedAt,
        price} =req.body;

    const saveDataModel=new DataModel({name,
        description,
        category,
        image,
        location,
        postedAt,
        price})
        
    saveDataModel.save();
    // console.log(name)
    res.send({msg:"posted"});
})

app.get("/BrowseClassifieds",async (req,res)=>{
    try{
        let Alldata=await DataModel.find();

        // console.log(Alldata);
        res.send({Alldata});
    }
    catch(err){
        res.send("something went wrong !!");
    }
})

app.get(`/BrowseClassifieds/category/:category`,async (req,res)=>{
    try{
        // clothing
        // let Alldata=await DataModel.find();
        let val=req.params;
        console.log(val);
        let fileterdata= Alldata.filter((elem)=>{
            if(val.category==elem.category){
                return elem;
            }
        })
        // console.log(fileterdata);
        res.send({fileterdata});
    }
    catch(err){
        res.send("something went wrong !!");
    }
})

app.listen(8081, async()=>{
    try{
        await connection
        console.log("connected");
    }
    catch(err){
        console.log("connection error")
    }
})