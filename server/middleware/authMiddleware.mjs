import jwt from "jsonwebtoken";
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
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if (!payload) {
            return res.status(401).json('Unauthorized access');
        }

        // user model await
    } catch (error) {
        
    }
}