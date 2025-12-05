import express from 'express';
import connectdb from './config/db.js';
import dotenv from 'dotenv';

const app = express()
let port = process.env.port;

dotenv.config()

connectdb()

app.listen(port,()=>console.log("server started"))

app.get('/',(req,res)=>{
    console.log(req)
    res.send("hello world")
})















