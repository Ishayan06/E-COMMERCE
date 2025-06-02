import express from 'express';
import{adminUser,loginUser,registerUser}from '../controllers/userController.js'

const userRouter=express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/admin",adminUser)

export default userRouter;