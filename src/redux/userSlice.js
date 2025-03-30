import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk("user/fetchUser", 
  async (username) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    return response.json();
});

 
const initialState = {
  data: null,
  status: "idle", 
  error: null,
};

 
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},  
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
