import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EpisodeService from "../Services/Episode";

const initialState = {
  episodes: [],
  status: "idle",
  error: null,
};

export const fetchEpisodes = createAsyncThunk(
  "rickAndMorty/fetchEpisodes",
  async () => {
    try {
      const episodes = await EpisodeService.fetchEpisodes();
      return episodes;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchEpisodeDetails = createAsyncThunk(
  "rickAndMorty/fetchEpisodeDetails",
  async (id) => {
    try {
      const episodeDetails = await EpisodeService.fetchEpisodeDetails(id);
      return episodeDetails;
    } catch (error) {
      throw error;
    }
  }
);

const EpisodeSlice = createSlice({
  name: "episode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.episodes = action.payload;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEpisodeDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodeDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.episodeDetails = action.payload;
      })
      .addCase(fetchEpisodeDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default EpisodeSlice.reducer;
