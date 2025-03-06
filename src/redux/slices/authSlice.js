import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fakeUser = {
  name: "Test User",
  email: "User@gmail.com",
  token: "fake-jwt-token-123456",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      if (
        credentials.email === fakeUser.email &&
        credentials.password === "User@1234"
      ) {
        return { user: fakeUser, token: fakeUser.token };
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.success = false;
      });
  },
});

export const { resetSuccess } = authSlice.actions;
export default authSlice.reducer;
