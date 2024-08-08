import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

export const fetchActiveAdvertisements = async () => {
    try {
      const response = await axiosToken.get(`${BASE_URL}/advertisements/active?portal=customer`);
      return response.data;
    } catch (error) {
      console.error('Error fetching active advertisements:', error.message);
      throw error;
    }
  };