import { FETCH_PRODUCTS, FETCH_ERROR } from '../Types';

const productReducer = (state, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
