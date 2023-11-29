const Todo=require("../models/Todo");
exports.getTodoById=async(req,res)=>{
    try{
            const id=req.params.id;
           const todos=await Todo.findById({_id:id});
           if(!todos){
            return res.status(404).json({
                success:false,
                // error:err.message,
                message:'no data found'
            })
           }
           res.status(200).json({
            success:true,
            data:todos,
            message:"data agya"
           })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server errror',
        })
    }
} 