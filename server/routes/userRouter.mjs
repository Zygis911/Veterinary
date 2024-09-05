import express, { Router } from 'express';
import dotenv from 'dotenv';

// validations

import userController from '../controllers/userController.mjs';

import authMiddleware from '../middleware/authMiddleware.mjs'

dotenv.config();

const router = express.Router();

router.post('/register', userController.createUser);



export default router;