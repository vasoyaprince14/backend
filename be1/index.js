const express= require('express');// this is an library in framework we cant invoke it so first store in const than call function
const app=express();
const PORT=3000

app.get('/',(req,res)=>{
    res.send(`hello`);
})
app.get('/home/user',(req,res)=>{
    res.send(`hello bhaiiiii`);
})
app.listen(PORT,()=>{
console.log(`server started on 30`);
})