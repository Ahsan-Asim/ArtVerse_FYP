import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Base API URL
const API_URL = "http://localhost:4000/api/cart";

// Thunks for asynchronous API calls
export const fetchCart = createAsyncThunk("cart/fetchCart", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Failed to fetch cart.");
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk("cart/addToCart", async (item, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ artworkId: item.id, quantity: 1 }),
    });
    if (!response.ok) throw new Error("Failed to add item to cart.");
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const removeFromCart = createAsyncThunk("cart/removeFromCart", async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/remove`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ artworkId: id }),
    });
    if (!response.ok) throw new Error("Failed to remove item from cart.");
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const clearCart = createAsyncThunk("cart/clearCart", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}/clear`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Failed to clear cart.");
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice for cart
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {}, // No need for local reducers since operations are handled by thunks
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.status = "success";
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
      });
  },
});

// Export the reducer to be used in the store
export default cartSlice.reducer;
