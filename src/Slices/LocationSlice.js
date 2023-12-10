import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LocationService from "../Services/Locations";

const initialState = {
  locations: [],
  status: "idle",
  error: null,
};

export const fetchLocations = createAsyncThunk(
  "rickAndMorty/fetchLocations",
  async () => {
    try {
      const locations = await LocationService.fetchLocations();
      return locations;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchLocationDetails = createAsyncThunk(
  "rickAndMorty/fetchLocationDetails",
  async (id) => {
    try {
      const locationDetails = await LocationService.fetchLocationDetails(id);
      return locationDetails;
    } catch (error) {
      throw error;
    }
  }
);

const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchLocationDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocationDetails.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.locationDetails = action.payload;
      })
      .addCase(fetchLocationDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default LocationSlice.reducer;
