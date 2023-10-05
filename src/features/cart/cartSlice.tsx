import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../product/models/product.model';

type CartState = {
  items: Record<string, ProductModel>;
};

const getCartFromLocalStorage = (): CartState => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : { items: {} };
};

const saveCartToLocalStorage = (cart: CartState) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState: CartState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductModel>) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...action.payload, quantity: 1 };
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      delete state.items[action.payload.id];
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;