const express=require('express');
const { connect } = require('mongoose');
const app=express();

require("dotenv").config();
const PORT=process.env.PORT ||4000;
app.use(express.json());
const todoRoutes=require("./routes/todos");
app.use("/",todoRoutes);
app.listen(PORT,()=>{
   console.log(`server started at ${PORT}`);
})
const dbConnect=require("./config/database");
dbConnect();
// const mongoose=require('mongoose');
// mongoose
//   .connect('mongodb+srv://admin:9518139625@cluster0.nzldfl3.mongodb.net/mydb?retryWrites=true&w=majority')
//   .then(() => {
//     console.log('App connected to database');
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
 // });
app.get("/",(req,res)=>{
   res.send(`<h1>This is Homepage</h1>`);
})