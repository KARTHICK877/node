const express = require("express");
const bodyparaser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(bodyparaser.json())
 let items= [
    {id:1 , name: "item1"},
    {id:2 , name: "item3"}
 ]
app.get('/getitems',(req,res)=>{
    res.json(items);
})
 app.post ('/item',(req,res)=>{
const newitem =req.body;
if(!newitem.id || newitem.name){
    return res.status(500).send("item must have id name")
}

items.push(newitem);
res.status(201).send (`item add with id ${newitem.id}`)

 })

app.listen (PORT,()=>{
    console.log(`server is runing on ,PORT`)
})