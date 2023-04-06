import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors())
app.get('/',(req,res)=>{
    res.send("Iam your first trainer")
})
app.get("/Aboutus",(req,res)=>{
    res.json({
        Name:"Anusha",
        FatherName:"Srinivas",
        Mothername:"Vani",
        Email:"anushaellendula1142@gmail.com",
        PhoneNo:"7659996392"

    })

})
app.get("/Qualification",(req,res)=>{
    res.json({
        Btech:"Sree Chaitanya",
        Inter:"SR junior college",
        Tenth:"ZPHS Bheemaram"
    })
})
app.get("/Certificates",(req,res)=>{
    res.json({
        Certificate1:"Interview skills conducted by TCS",
        Certificate2:"MATLAB conducted by JNTU Kondagattu",
        Certificate3:"For Designing Maggam Work"
    })
})
app.get("/Contactme",(req,res)=>{
    res.json({
        Name:"Anusha",
        Email:"anushaellendula1142@gmail.com",
        PhoneNo:"7659996392"

    })
})
app.get("/Experience",(req,res)=>{
    res.json({
        Project1:"Vehicle to Grid",
        Project2:"High impulse noise intensity removal in MRI Images",
        Project3:"Biometric attendance system over IOT"

    })
})
app.get("/Hobbies",(req,res)=>{
    res.json({
        Hobby1:"Dancing",
        Hobby2:"Stitching clothes",
        Hobby3:"Designing Clothes",
        Hobby4:"Gardening"
    })
})
app.get("/Projects",(req,res)=>{
    res.json({
        Project1:"Vehicle to Grid",
        Project2:"High impulse noise intensity removal in MRI Images",
        Project3:"Biometric attendance system over IOT"
    })
})
app.get("/Workshops",(req,res)=>{
    res.json({
        Workshop1:"Overview of 5G wireless technology",
        Workshop2:"Stress management",
        Workshop3:"Starting with Aptitude preparation"
    })
 
})
app.get("/Skills",(req,res)=>{
    res.json({
        Skill1:"React JS",
        Skill2:"Node JS",
        Skill3:"Mongo DB",
        Skill4:"Material UI",
        Skill5:"Redux"
    })
})
app.listen(8011,()=>console.log("my server is running on port 8011"))