import express from 'express';
import dotenv from 'dotenv';
import userRouter from './userRouter.mjs';
dotenv.config();
const router = express.Router();

export default router;

router.use('/users', userRouter)