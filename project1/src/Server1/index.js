import express from 'express';

const app=express();

app.get("/",(req,res)=>{
    res.send("My first get api is ready")
})
app.listen(8000,()=>console.log("my server is running on port 8000"))