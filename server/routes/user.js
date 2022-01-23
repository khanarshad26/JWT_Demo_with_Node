import express from "express";
import {users} from '../data.js';
import bcrypt from 'bcrypt';
// import { check, validationResult } from "express-validator";
import JWT from "jsonwebtoken"
import dotenv from 'dotenv';
import User from "../models/User.js";

dotenv.config();

const router = express.Router();

let data = users;

router.get( '/', (req, res) => {
    res.status(200).json(data);
})

router.get( '/query' , (req, res) => {
    const {name} = req.query;
    const user = data.find(user =>  user.name.toLowerCase().startsWith(name.toLocaleLowerCase()) )

    if(!user) res.status(404).json('user not found');
    res.json(user);

})

router.get( '/:username', (req, res) => {
    const username = req.params.username ;
    const user = data.find(user =>  user.username === username )

    if(!user) res.status(404).json('user not found');
    res.json(user);
})

router.post('/', async(req, res) => {
    const {name, username, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = { name, username, password : hashedPassword };
    data = [...data, user];

    const newUser = new User({ name, username, password : hashedPassword });
    console.log(newUser);
    // const userdata = await newUser.save();
    // res.status(200).json(userdata);

    try{
        const userdata = await newUser.save();
        res.status(200).json(userdata);
    }catch(e){
        console.log(e);
    }

    // const token = await JWT.sign({ username }, process.env.JWT_SECRET_KEY, {expiresIn: 360000});
    // res.json(newUser);
    // res.status(200).json(data);
})

router.post('/login', async(req, res) => {
    const {username, password} = req.body;
    
    const user = data.find(user =>  user.username === username );
    if(!user) res.status(200).json("user not found");

    const validPassword = await bcrypt.compare(password, user.password);
    console.log(validPassword);
    if(!validPassword) return res.status(200).json(user);
    // else{
        const token = await JWT.sign({username}, process.env.JWT_SECRET_KEY, {expiresIn: 360000})
        res.status(200).json(`login successfull! hello ${user.username} ${{token}}`)
    // } 
})

router.delete('/:username', (req, res) => {
    const {username} = req.params;
    data = data.filter(user =>  {
        return !(user.username === username);
    })
    // usersData.push()
    res.status(200).json(data);
})




export default router;