import { FETCH_PRODUCTS, FETCH_CART, ADD_PRODUCT } from '../Types';

const productReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
