import React, { useReducer } from 'react';
import ProductContext from './productContext';
import ProductReducer from './productReducer';
import { commerce } from '../../lib/commerce';
import { FETCH_PRODUCTS, FETCH_CART, ADD_PRODUCT } from '../Types';

const ProductState = (props) => {
  const initialState = {
    products: [],
    cart: {},
  };

  // const [products, setProducts] = useState([])

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Fetch All Products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    dispatch({
      type: FETCH_PRODUCTS,
      payload: data,
    });
  };

  // Fetch All Items in Cart
  const fetchCart = async () => {
    const cartData = await commerce.cart.retrieve();

    dispatch({
      type: FETCH_CART,
      payload: cartData,
    });
  };

  // Add Products to Cart
  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    dispatch({
      type: ADD_PRODUCT,
      payload: item,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        fetchProducts,
        fetchCart,
        addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
