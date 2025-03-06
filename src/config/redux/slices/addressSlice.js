import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ✅ Fetch User Addresses
export const fetchAddresses = createAsyncThunk(
  "address/fetchAddresses",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.example.com/users/${userId}/addresses`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch addresses");
      }

      return await response.json(); // Expected response: [{ id, name, phone, address, city, state, zip }]
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Add New Address
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (addressData, { rejectWithValue }) => {
    try {
      const response = await fetch("https://api.example.com/addresses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressData),
      });

      if (!response.ok) {
        throw new Error("Failed to add address");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Delete Address
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.example.com/addresses/${addressId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete address");
      }

      return addressId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetAddressState: (state) => {
      state.addresses = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Addresses
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Address
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete Address
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = state.addresses.filter(
          (addr) => addr.id !== action.payload
        );
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetAddressState } = addressSlice.actions;
export default addressSlice.reducer;
