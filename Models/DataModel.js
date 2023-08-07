const mongoose=require("mongoose");

const DataSchema=new mongoose.Schema({
    name: {type:String},
    description : {type:String},
    category : {type:String},
    image : {type:String},
    location : {type:String},
    postedAt : {type:String},
    price : {type:Number}
})

const DataModel=mongoose.model("data",DataSchema);

module.exports={
    DataModel
}