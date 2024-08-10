import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

const fetchDashboardApi = async (filterArray) => {
  // {
  //     "name": "section",
  //     "value": "male"
  // },

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
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchDashboardApi;
