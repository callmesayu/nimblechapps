import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CharacterReducer, { fetchCharacters, fetchCharacterDetails } from './Slices/CharacterSlice';
import LocationReducer, { fetchLocations, fetchLocationDetails } from './Slices/LocationSlice';
import EpisodeReducer, { fetchEpisodes, fetchEpisodeDetails } from './Slices/EpisodeSlice';

const rootReducer = combineReducers({
  character: CharacterReducer,
  location: LocationReducer,
  episode: EpisodeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
