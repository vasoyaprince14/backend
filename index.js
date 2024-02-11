const express=require('express');
const app= express();
const user=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];
app.use(express.json()); 
app.get('/',(req,res)=>{
    const johnKidneys=user[0].kidneys;
    // console.log(johnKidneys);
    const numberofKidneys=johnKidneys.length;
    // console.log(numberofKidneys);
    let numberOfHealthyKidneys=0;
    // console.log(numberOfHealthyKidneys);
    for(let i=0;i<johnKidneys.length;i++){
        // console.log("looop is running");
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
            
        }
    }
    // console.log("loop ended");
    const numberOfUnealthyKidneys=numberofKidneys-numberOfHealthyKidneys;
    // console.log("calcu;ated");
    res.json({
        numberofKidneys,
        numberOfHealthyKidneys,
        numberOfUnealthyKidneys
    })
    // console.log("res send");
})
app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    user[0].kidneys.push({
         healthy:isHealthy 
    })
    res.json({
        msg:"done"
    })
})
app.listen(3000,()=>{
    console.log(` you are on port number 3000`);
})