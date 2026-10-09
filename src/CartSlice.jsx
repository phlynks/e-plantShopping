import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Ensure the spice continues to flow by provisioning the specimen in cart state
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Cast it into the fire: remove specimen from the manifest by name
      const name = typeof action.payload === 'object' && action.payload !== null ? action.payload.name : action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      // Reallocate provisions in the cargo hold based on incoming transmission
      const { name, amount, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        const newQuantity = amount !== undefined ? amount : quantity;
        if (newQuantity !== undefined) {
          itemToUpdate.quantity = newQuantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
