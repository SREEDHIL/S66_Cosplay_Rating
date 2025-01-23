const express=require('express');
const PORT=7777;
const app=express();

app.get('/ping',(req,res)=>{
    try {
        res.send("Pong")
    } catch (error) {
        res.send(error)
    }
});


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})