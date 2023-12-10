import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

const EpisodeService = {
  fetchEpisodes: async () => {
    try {
      const response = await axios.get(`${BASE_URL}episode`);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  },

  fetchEpisodeDetails: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}episode/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default EpisodeService;
