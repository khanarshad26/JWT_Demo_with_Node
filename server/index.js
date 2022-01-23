import express from "express";
// import data from './data.js';
import userRoute from './routes/user.js'
import postRoute from './routes/post.js'
// import { Mongoose } from "mongoose";
// const { MongoClient } = require('mongodb');
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

// Setting up Mongoose



mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
//    useCreateIndex: true,
   useUnifiedTopology: true
//    useFindAndModify: false
})
.then(()=>{
    console.log('congrats, problem solved')
})
.catch((err)=>{
    console.log(`there is a problem with ${err}`);
    process.exit(-1)
})


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/',express.static('./public'));

app.use('/user',userRoute);
app.use('/posts', postRoute);

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})