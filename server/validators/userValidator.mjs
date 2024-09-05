import {check, checkSchema, param} from 'express-validator';
import userModel from '../models/userModel.mjs';

export const registrationValidationSchema = checkSchema({
    username: {
        isLength: {
            options: { min: 3, max: 20}
        }
    }
})

