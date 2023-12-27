const express=require("express");
const app=express();

app.use(express.json());

 require("dotenv").config();
 const port=process.env.PORT||4000;

 const blogroute=require("./routes/blogroute")

 app.use("/api/v1",blogroute);
 const {connectdb}=require("./config/database");
 connectdb();
 
 app.listen(port,()=>{
    console.log(`your app will listen at post number  ${port}`);
 })

 app.get("/",(req,res)=>{
    res.send('<h1> hi welcome  to my server</h1>')
 })