import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Central command manifest: coordinates state across the vessel
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
