// import argon2 from "argon2";
// import {V4 as paseto} from 'paseto';
// import { promises as fs } from 'fs';
// import { createPrivateKey } from 'crypto';
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken'

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

      const hashedPassword = await bcrypt.hash(password, 10);

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
      const passwordsMatch = await bcrypt.compare(password, user.password);
      if (!passwordsMatch) {
        return res.status(400).json({
          errors: [{ path: "password", msg: "incorrect password" }],
        });
      }

      // Remove sensitive information
      delete user.password;

      // generating a token
      const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      res.status(200).json({ message: "logged in successfully", token });

    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = await userModel.getUserById(id);

      if (!user) {
        res.status(400).json({ message: "user not found" });
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
