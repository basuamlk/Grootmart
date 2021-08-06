import React, { useReducer } from 'react';
import ProductContext from './productContext';
import ProductReducer from './productReducer';
import { commerce } from '../../lib/commerce';
import { FETCH_PRODUCTS, FETCH_ERROR } from '../Types';

const ProductState = (props) => {
  const initialState = {
    products: [],
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

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        fetchProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
