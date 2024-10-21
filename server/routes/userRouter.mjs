import express, { Router } from 'express';
import dotenv from 'dotenv';
import { registrationValidationSchema, loginValidationSchema, searchUsernameValidationSchema } from '../validators/userValidator.mjs';

// validations

import userController from '../controllers/userController.mjs';

import authMiddleware from '../middleware/authMiddleware.mjs'

dotenv.config();

const router = express.Router();

router.post('/register', registrationValidationSchema, userController.createUser);

router.post('/login', loginValidationSchema, userController.login);

router.get('/:id', userController.getUserById);



export default router;