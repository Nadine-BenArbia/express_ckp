import  Express from "express";

app=Express()

const Port=3000

app.listen (Port,(err) =>{
    err? console.log(err) :  console.log(`server is running on ${Port} `);

})
