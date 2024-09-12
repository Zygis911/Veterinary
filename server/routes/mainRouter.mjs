import express from 'express';
// import dotenv from 'dotenv';
import userRouter from './userRouter.mjs';
import appointmentRouter from './appointmentRouter.mjs'

// dotenv.config();
const router = express.Router();



router.use('/users', userRouter)
router.use('/appointments', appointmentRouter)
export default router;