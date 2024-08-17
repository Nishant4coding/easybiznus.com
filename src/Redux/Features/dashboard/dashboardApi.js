import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";
import { getLatLng } from "@/Utility/util";


const fetchDashboardApi = async (filterArray) => {
  if (!filterArray) {
    filterArray = [];
  }
  try {
    const {lat, lng} = await getLatLng();

    const response = await axiosToken.post(
      `${BASE_URL}/products/product/sellerProduct/filters/dashboard`,

      {
        filters: filterArray,
        rangeOff: lat && lng ? false : true,
        targetLatitude: lat,
        targetLongitude: lng,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchDashboardApi;
