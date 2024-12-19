import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";
import { getLatLng } from "@/Utility/util";

export const getAll = async (filterArray) => {
  if (!filterArray) {
    filterArray = [];
  }
  try {
    const {lat, lng} = await getLatLng();

    const res = await axiosToken.post(
      `${BASE_URL}/products/product/sellerProduct/filters`,
      {
        filters: filterArray,
        rangeOff: lat && lng ? false : true,
        targetLatitude: lat,
        targetLongitude: lng,
      }
    );
    return res.data;
  } catch (error) {
    console.log("get all product: ", error.message);
  }
};

export const getProductByIdOnly = async (id) => {
  try {
    const res = await axiosToken.get(
      `${BASE_URL}/products/product/sellerProduct/${id}`
    );
    return res.data;
  } catch (error) {
    console.log("gey prod by id: ", error.message);
  }
};
