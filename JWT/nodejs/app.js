const express = require("express");


const app = express();

const PORT = 4000;

app.get ('/',(req,res)=>{
    res.send("hello its me bro")
});

app.get ('/home',(req,res)=>{
 res.send("hello from home");
})





app.listen (PORT,()=>{
    console.log(`server is runing on http://localhost:${PORT}`)
})