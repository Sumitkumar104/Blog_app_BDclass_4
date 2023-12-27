const mongoose=require("mongoose");
require("dotenv").config();

const connectdb= ()=>{
    mongoose.connect(process.env.URL,{})
    .then(
        console.log("your Connection with databse is successfully established")
    )
    .catch((err)=>{
        console.error(err);
        process.exit(1);
    })
}
exports.module=connectdb;