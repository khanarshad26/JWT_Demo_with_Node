import express from "express";
import { publicPosts, privatePosts } from "../data.js";
import checkAuth from "../middlewares/checkAuth.js";

const router = express.Router();

router.get('/public', (req, res) => {
    res.json(publicPosts)
})

router.get('/private', checkAuth, (req, res) => {
    // console.log(req.user);
    res.json(privatePosts);
})


export default router