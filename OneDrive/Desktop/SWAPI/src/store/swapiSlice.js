import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_SWAPI_URL || "https://www.swapi.tech/api";

// Async thunk for fetching data
export const fetchCharacters = createAsyncThunk("swapi/fetchCharacters", async () => {
  const response = await axios.get(`${API_BASE_URL}/people`);
  return response.data.results;
});

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    characters: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
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
      });
  },
});

export default swapiSlice.reducer;
