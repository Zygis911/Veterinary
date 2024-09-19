import { pool } from "../db/postgressConnection.mjs";

const animalModel = {
  registerAnimal: async (name, species, date_of_birth) => {
    const result = await pool.query(
      "INSERT INTO animals (name, species, date_of_birth) VALUES ($1, $2, $3) RETURNING *",
      [name, species, date_of_birth]
    );
    return result.rows[0];
  },

  getAnimalById: async (id) => {
    const result = await pool.query("SELECT * FROM animals WHERE id = $1", 
        [id]
    );
    return result.rows[0];
  },
};

export default animalModel;
