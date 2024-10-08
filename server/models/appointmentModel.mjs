import { pool } from "../db/postgressConnection.mjs";
import { SCHEDULED, COMPLETED, CANCELED } from "../cfg/Appointments.mjs";

const appointmentModel = {
  createAppointments: async (name, description) => {
    const status = SCHEDULED;
    const result = await pool.query(
      "INSERT INTO appointments (name, description, status) VALUES ($1, $2, $3) RETURNING *",
      [name, description, status]
    );
    return result.rows[0];
  },

  getAppointmentById: async (id) => {
    const result = await pool.query(
      "SELECT * FROM appointments WHERE id = $1",
      [id]
    );
    return result.rows[0];
  },
};

export default appointmentModel;
