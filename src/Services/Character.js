import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

const CharacterService = {
  fetchCharacters: async () => {
    try {
      const response = await axios.get(`${BASE_URL}character`);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  },

  fetchCharacterDetails: async (id) => {
    console.log("Final", id);
    try {
      const response = await axios.get(`${BASE_URL}character/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default CharacterService;
