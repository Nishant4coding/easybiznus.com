import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

export const fetchCategories = async () => {
  try {
    const response = await axiosToken.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw error;
  }
};
