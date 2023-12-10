import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CharacterService from "../Services/Character";

const initialState = {
  characters: [],
  status: "idle",
  error: null,
  selectedCharacter: null,
};

// Thunk to fetch individual character details
export const fetchCharacterDetails = createAsyncThunk(
  "rickAndMorty/fetchCharacterDetails",
  async (characterId) => {
    console.log("IDDD", characterId);
    try {
      const characterDetails = await CharacterService.fetchCharacterDetails(
        characterId
      );
      return characterDetails;
    } catch (error) {
      throw error;
    }
  }
);

// Thunk to fetch characters
export const fetchCharacters = createAsyncThunk(
  "rickAndMorty/fetchCharacters",
  async () => {
    try {
      const characters = await CharacterService.fetchCharacters();
      return characters;
    } catch (error) {
      throw error;
    }
  }
);

const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCharacterDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacterDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCharacter = action.payload;
      })
      .addCase(fetchCharacterDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default CharacterSlice.reducer;
