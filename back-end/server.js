import  Express  from "express";
import cors from "cors";
import mongoose from "mongoose";


// app config
const app = Express() ;

const port = process.env.PORT || 8001;


//middle wares

// DB connexion

// api endpoint.

app.get('/', (req , res)=> res.status(200).send('Hello world'));

//Listenner

app.listen(port, () => console.log(`listinging on localHost : ${port}`))