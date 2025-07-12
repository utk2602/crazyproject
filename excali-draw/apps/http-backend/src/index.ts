import  express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { middleware } from './middleware';
import { CreateUserSchema } from '@repo/common/types';

const app = express();

app.post("/signup",(req,res)=>{
    // db call 
    res.json({
        userId:"123",
    })
})
app.post("/signin",(req,res)=>{
    const userId = 1  ;
    const token =jwt.sign({
        userId
    }, JWT_SECRET);
    res.json({
        token
    });
})
app.post("/room",middleware,(req,res)=>{
    //db call to create a room
    res.json({
        roomId:"room123",
    })
})
app.listen(3000);