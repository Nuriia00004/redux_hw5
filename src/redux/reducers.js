// reducers.js
import { ADD_TO_CART } from './actionTypes';
import productsData from '../data/products.json';

const initialState = {
  products: productsData,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { productId } = action.payload;
      const productToAdd = state.products.find((product) => product._id === productId);
      return {
        ...state,
        cart: [...state.cart, { ...productToAdd, quantity: 1 }],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
