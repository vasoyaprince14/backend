const Todo=require("../models/Todo");
 
exports.createTodo=async(req,res)=>{
    try{
            const{title,description}=req.body;
            const response=await Todo.create({title,description});
            res.status(200).json({
                success:true,
                data:response,
                message:"entry hogye"
            }
            );
    }
    catch(err){
        console.log("error agya");
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
} 