import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Apply Coupon
export const applyCoupon = createAsyncThunk(
  "coupon/applyCoupon",
  async (couponCode, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.example.com/apply-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coupon: couponCode }),
      });

      if (!response.ok) {
        throw new Error("Invalid or expired coupon.");
      }

      return await response.json(); // Expected response: { discount: 20, message: "Coupon applied!" }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    discount: 0,
    appliedCoupon: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetCoupon: (state) => {
      state.discount = 0;
      state.appliedCoupon = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.discount = action.payload.discount;
        state.appliedCoupon = action.meta.arg;
      })
      .addCase(applyCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCoupon } = couponSlice.actions;
export default couponSlice.reducer;
