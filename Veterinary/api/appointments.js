import { apiClient } from "./apis";

const AppointmentModel = {
  createAppointment: async (appointment) => {
    // appointment has to have a name and a description
    try {
      const response = await apiClient.post("/appointments", appointment);
      return response;
    } catch (error) {
      console.log(error);
      return response.error;
    }
  },

  getAppointmentById: async (id) => {
    try {
      const response = await apiClient.get(`/appointments/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      return response(error);
    }
  },
};

export default AppointmentModel;
