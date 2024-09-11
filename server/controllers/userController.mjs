import argon2 from "argon2";
import {V4 as paseto} from 'paseto';
import { validationResult } from "express-validator";
import { promises as fs } from 'fs';
import { createPrivateKey } from 'crypto';
import path from 'path';


// import validation

import userModel from "../models/userModel.mjs";



const userController = {
  createUser: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password, email } = req.body;

      const hashedPassword = await argon2.hash(password);

      const newUser = {
        username,
        password: hashedPassword,
        email,
        registered_on: new Date(),
      };

      const createUser = await userModel.createUser(newUser);

      // Deleting password field from user object
      delete createUser.password;

      res.status(201).json(createUser);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password } = req.body;
      const user = await userModel.login(username);

      if (!user) {
        return res.status(400).json({
          errors: [
            {
              path: "username",
              msg: "user with the given email/username does not exist",
            },
          ],
        });
      }

      // Check if passwords match
      const passwordsMatch = await argon2.verify(user.password, password);
      if (!passwordsMatch) {
        return res.status(400).json({
          errors: [{ path: "password", msg: "incorrect password" }],
        });
      }

      // Remove sensitive information
      delete user.password;

      // Load the private key from the file
      const privateKeyPem = await fs.readFile(process.env.JWT_PRIVATE_KEY_PATH, 'utf8');
      const privateKey = createPrivateKey({
        key: privateKeyPem,
        format: 'pem',
        type: 'pkcs8',
      });

      // Generate a unique PASETO token, including a timestamp and expiry time
      const tokenPayload = {
        user, // This will include the user data in the token
        iat: Math.floor(Date.now() / 1000), // Issued at timestamp
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 2), // Expiry timestamp (2 hours)
      };

      // Sign the token with the private key
      const token = await paseto.sign(tokenPayload, privateKey);

      // Send the token back to the client
      res.status(200).json({
        message: "user logged in successfully",
        token,
      });
    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userModel.getUserById(id);

        if(!user) {
            res.status(400).json({message: "user not found"});
        }

        delete user.password;

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
  },
  

//search username bus
};

export default userController;