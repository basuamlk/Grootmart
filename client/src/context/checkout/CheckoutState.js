import React, { useReducer } from 'react';
import CheckoutContext from './checkoutContext';
import CheckoutReducer from './checkoutReducer';
import {
  SET_CHECKOUT_TOKEN,
  SET_SHIPPING_DATA,
  NEXT_STEP,
  BACK_STEP,
  SET_ORDER,
  CHECKOUT_ERROR,
} from '../Types';

const CheckoutState = (props) => {
  const initialState = {
    checkoutToken: null,
    activeStep: 0,
    shippingData: {},
    order: {},
    error: '',
  };

  const [state, dispatch] = useReducer(CheckoutReducer, initialState);

  // Set Checkout Token
  const setCheckoutToken = (token) => {
    dispatch({
      type: SET_CHECKOUT_TOKEN,
      payload: token,
    });
  };

  // Set Shipping Data
  const setShippingData = (data) => {
    dispatch({
      type: SET_SHIPPING_DATA,
      payload: data,
    });
  };

  // Update next step
  const nextStep = (prevActiveStep) => {
    dispatch({
      type: NEXT_STEP,
      payload: prevActiveStep + 1,
    });
  };

  // Update back step
  const backStep = (prevActiveStep) => {
    dispatch({
      type: BACK_STEP,
      payload: prevActiveStep - 1,
    });
  };

  // Set Checkout Order
  const setOrder = (incomingOrder) => {
    dispatch({
      type: SET_ORDER,
      payload: incomingOrder,
    });
  };
  // Set Checkout Error
  const setErrorMessage = (error) => {
    dispatch({
      type: CHECKOUT_ERROR,
      payload: error.data.error.message,
    });
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutToken: state.checkoutToken,
        activeStep: state.activeStep,
        shippingData: state.shippingData,
        order: state.order,
        error: state.error,
        setCheckoutToken,
        setShippingData,
        nextStep,
        backStep,
        setOrder,
        setErrorMessage,
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutState;
