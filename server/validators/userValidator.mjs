import { check, checkSchema, param } from "express-validator";
import userModel from "../models/userModel.mjs";

export const registrationValidationSchema = checkSchema({
  username: {
    isLength: {
      options: { min: 3, max: 20 },
      errorMessage: "Username must be between 3 and 20 chars",
    },
    notEmpty: {
      errorMessage: "username cannot empty",
    },
    isString: {
      errorMessage: "username must be a string",
    },
    custom: {
      options: async (value) => {
        const existingUser = await userModel.getUserByUsername(value);
        if (existingUser) {
          throw new Error("Username already taken");
        }
      },
    },
  },
  password: {
    isLength: {
      options: { min: 8, max: 128 },
      errorMessage: "Password must be between 8 and 128 chars",
    },
    matches: {
      options:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>?])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>?]{8,128}$/,
      errorMessage:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
    notEmpty: {
      errorMessage: "password cannot be empty",
    },
  },
  repeatPassword: {
    isLength: {
      options: { min: 8, max: 128 },
      errorMessage: "Password must be between 8 and 128 characters",
    },
    matches: {
      options:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>?])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>?]{8,128}$/,
      errorMessage:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
    custom: {
      options: (value, { req }) => value === req.body.password,
      errorMessage: "passwords do not match",
    },
  },
  email: {
    isEmail: {
      errorMessage: "email must be valid",
    },
    notEmpty: {
      errorMessage: "email cannot be empty",
    },
    custom: {
      options: async (value) => {
        const existingUser = await userModel.getUserByEmail(value);
        if (existingUser) {
          throw new Error("email already exists");
        }
      },
    },
  },
});

export const loginValidationSchema = [
  checkSchema({
    username: {
      notEmpty: {
        errorMessage: "Login cannot be empty",
      },
    },
    password: {
      notEmpty: {
        errorMessage: "Password cannot be empty",
      },
    },
  }),
];

export const updateUserFieldsValidationSchema = checkSchema({
  username: {
    optional: true,
    isLength: {
      options: { min: 6, max: 32 },
      errorMessage: "username must be at least 6 chars with a max of 32 chars",
    },
    isString: {
      errorMessage: "username must be a string",
    },
  },
  password: {
    optional: true,
    isLength: {
      options: { min: 8, max: 32 },
      errorMessage: "Password must be between 8 and 128 characters",
    },
    matches: {
      options:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=\-';,./|":<>?])[A-Za-z\d@$!%*?&~#^_+=\-';,./|":<>?]{8,128}$/,
      errorMessage:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  },
  email: {
    optional: true,
    isEmail: {
      errorMessage: "email must be valid",
    },
  },
});

export const validateUserId = [
  param("id").isInt().withMessage("ID must be an integer"),
];

export const searchUsernameValidationSchema = checkSchema({
  search: {
    in: ["query"],
    isLength: {
      options: { min: 1, max: 20 },
      errorMessage:
        "Search query must be at least 3 characters with a max of 20 characters",
    },
  },
});
