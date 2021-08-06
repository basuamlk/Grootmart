import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { commerce } from '../../lib/commerce';
import ProductContext from '../../context/product/productContext';
import Products from '../Products/Products';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const productContext = useContext(ProductContext);
  // const [products, setProducts] = useState([]);

  const { fetchProducts, products } = productContext;
  // Fetch All Products
  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };

  useEffect(() => {
    authContext.loadUser();
    fetchProducts();
    //esline-disable-next-line
  }, []);

  console.log(products);

  return <Products products={products} />;
};

export default Dashboard;
