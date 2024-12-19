import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

export const checkStockApi = async () => {
  try {
    const response = await axiosToken.get(`${BASE_URL}/cart/cart-check-stock`);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock cart:", error);
    throw error;
  }
};
