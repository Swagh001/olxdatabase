const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://shailesh:shailesh@cluster0.rors66x.mongodb.net/olxdata?retryWrites=true&w=majority"); 
// mongodb://localhost:27017
// const connection=mongoose.connect("mongodb://localhost:27017/olx");

module.exports={
    connection
}