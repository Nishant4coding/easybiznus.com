import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

const fetchDashboardApi = async (filterArray) => {
  if (!filterArray) {
    filterArray = [];
  }
  try {
    const response = await axiosToken.post(
      `${BASE_URL}/products/product/sellerProduct/filters/dashboard`,

      {
        filters: filterArray,
        rangeOff: true,
        targetLongitude: 12.9716,
        targetLatitude: 97.5946,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchDashboardApi;
