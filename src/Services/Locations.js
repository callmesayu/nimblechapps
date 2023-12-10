import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

const LocationService = {
  fetchLocations: async () => {
    try {
      const response = await axios.get(`${BASE_URL}location`);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  },

  fetchLocationDetails: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}location/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default LocationService;
