import express from "express";
// import data from './data.js';
import userRoute from './routes/user.js'
import postRoute from './routes/post.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/',express.static('./public'));

app.use('/user',userRoute);
app.use('/posts', postRoute);

app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
})