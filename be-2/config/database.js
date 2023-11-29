const mongoose=require('mongoose');
// require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect("mongodb+srv://vasoyaprince14:9518139625@cluster0.te62oay.mongodb.net/myDb?retryWrites=true&w=majority").then(()=>{
        console.log("connnect hogyga db ka")
    }).catch((err)=>{
        console.log("errr agya ");
        process.exit(1);
    });

}
module.exports=dbConnect;