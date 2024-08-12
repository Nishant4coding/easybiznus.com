import axiosToken from '@/Utility/axiosInstance'; 
import BASE_URL from '@/Utility/baseUrl';

export const addToCartApi = async (productDetails) => {
  try {
    const response = await axiosToken.post(`${BASE_URL}/cart/add-to-cart`, productDetails);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error.message);
    throw error;
  }
};

export const getCartApi = async () => {
  try {
    const response = await axiosToken.get(`${BASE_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error; 
  }
};
export const checkStockApi = async () => {
  try {
    const response = await axiosToken.get(`${BASE_URL}/cart/cart-check-stock`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock cart:', error);
    throw error; 
  }
};

export const editCartItemQuantityApi = async (cartItemId, quantity) => {
  try {
    const response = await axiosToken.put(`${BASE_URL}/cart/edit-cart`, {cartItemId, quantity});
    return response.data;
  } catch (error) {
    console.error('Error editing cart item quantity:', error);
    throw error; 
  }
};

export const removeCartItemApi = async (cartItemId) => {
  try {
    const response = await axiosToken.delete(`${BASE_URL}/cart/deleteCartItem/${cartItemId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing cart item:', error);
    throw error; 
  }
};
