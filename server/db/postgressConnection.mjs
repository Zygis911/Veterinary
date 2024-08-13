import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// Configuring database connection

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  databse: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export const connectDB = () => {
  return new Promise((resolve, reject) => {
    // connecting to database

    pool.connect((err) => {
      if (err) {
        console.error("Connection error", err.stack);
        reject(err);
      } else {
        resolve("Database connected succesfully")
      }
    });
  });
};
