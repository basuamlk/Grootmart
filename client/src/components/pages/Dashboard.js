import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import ProductContext from '../../context/product/productContext';
import Products from '../Products/Products';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const productContext = useContext(ProductContext);

  const { fetchProducts, products, fetchCart, cart, addToCart } =
    productContext;
  useEffect(() => {
    authContext.loadUser();
    fetchProducts();
    fetchCart();
    //esline-disable-next-line
  }, []);

  console.log(cart);
  // Could have better performance without prop-drilling, instead use Context API to pass props
  return <Products products={products} addToCart={addToCart} />;
};

export default Dashboard;
