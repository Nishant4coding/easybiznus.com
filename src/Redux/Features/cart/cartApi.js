import axiosToken from '@/Utility/axiosInstance';
import BASE_URL from '@/Utility/baseUrl';
import axios from 'axios';


export const addToCartApi = async ( productDetails) => {
  const response = await axios.post(
    `${BASE_URL}/cart/add-to-cart`,
    productDetails,
 
  );

 
  return response.data;
};

export const getCartApi = async () => {
  const response = await axiosToken.get(`${BASE_URL}/cart`);
  console.log(response.data)
  return response.data;
};

export const editCartItemQuantityApi = async (token, cartItemId, quantity) => {
  const response = await axiosToken.put(
    `${BASE_URL}/cart/addtocart`,
    { cartItemId, quantity },
    
  );

  return response.data;
};

export const removeCartItemApi = async (token, cartItemId) => {
  const response = await axiosToken.delete(
    `${BASE_URL}/cart/deleteCartItem/${cartItemId}`,);

  return response.data;
};
