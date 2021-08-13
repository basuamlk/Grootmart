import {
  SET_CHECKOUT_TOKEN,
  SET_SHIPPING_DATA,
  SET_ORDER,
  NEXT_STEP,
  BACK_STEP,
  CHECKOUT_ERROR,
} from '../Types';

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case SET_CHECKOUT_TOKEN:
      return {
        ...state,
        checkoutToken: action.payload,
      };
    case SET_SHIPPING_DATA:
      return {
        ...state,
        shippingData: action.payload,
      };
    case NEXT_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    case BACK_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case CHECKOUT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
