import express, { request, response, Router } from "express";
import path from 'path';
const __dirname =path.dirname (new URL (import.meta.url).pathname);

console.log( __dirname.slice(3));
const app=express() ;




//api 


app.get('/', (request,response)=> {
response.sendFile(__dirname.slice (3) + "/views/home.html");

});

app.get("/contactUs",(request,response) =>{
  response.sendFile(__dirname.slice(3)  + "/views/contactUs.html");

  });
  
app.get("/ourServers",(request,response) =>{
  response.sendFile(__dirname.slice (3) + "/views/ourServers.html");

   });

// server part
//port 
const Port= 2000;






//server
app.listen(Port,(err) =>
err? console.log(err) : console.log(`server is running on ${Port}`)
);