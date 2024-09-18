import {V4 as paseto} from 'paseto'
import 'dotenv/config';
import userModel from '../models/userModel.mjs';

export default async function AuthMiddleware(req, res, next) {
    try {
        //check if the token is provided in authorizaton
        const authHeader = req.get('Authorization');
        if(!authHeader) {
            return res.status(401).json("unauthorized access");
        }
        
        const token = authHeader.split('')[1];
        if (!token) {
            return res.status(401).json('Unauthorized access');
        }

         // Checking if the token is valid
        const payload = await paseto.verify(token, process.env.JWT_PRIVATE_KEY_PATH);
        if (!payload) {
            return res.status(401).json('Unauthorized access');
        }

        // check if the user is valid 

        const user = await userModel.getUserById(payload.user.id);
        if (!user) {
            throw new Error("user no longer exists");
        }

        // Providing user for the next in the pipeline
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json("unauthorized access")
    };
};