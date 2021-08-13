import React, { useContext } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext';
import ProductContext from '../../context/product/productContext';
import { commerce } from '../../lib/commerce';

const PaymentForm = () => {
  const checkoutContext = useContext(CheckoutContext);
  const productContext = useContext(ProductContext);
  const { refreshCart } = productContext;
  const { setOrder, setErrorMessage } = checkoutContext;
  // Handle capture checkout
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return <div></div>;
};

export default PaymentForm;
