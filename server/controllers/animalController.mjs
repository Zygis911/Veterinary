import { validationResult } from "express-validator";
import animalModel from "../models/animalModel.mjs";

const animalController = {
  registerAnimal: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (!req.user) {
        return res.status(401).json("unauthorized access");
      }

      const { name, species, date_of_birth } = req.body;
      const registeredAnimal = await animalModel.registerAnimal(
        name,
        species,
        date_of_birth
      );
      res.status(201).json(registeredAnimal);
    } catch (error) {
      next(error);
    }
  },
};

export default animalController;
