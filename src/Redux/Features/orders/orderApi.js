import axiosToken from '@/Utility/axiosInstance';
import BASE_URL from '@/Utility/baseUrl';

export const fetchOrderHistoryApi = async () => {
  try {
    const response = await axiosToken.get(`${BASE_URL}/order/orders`);
    return response.data; 
  } catch (error) {
    console.error('API error:', error);
    throw new Error(error.message);
  }
};
