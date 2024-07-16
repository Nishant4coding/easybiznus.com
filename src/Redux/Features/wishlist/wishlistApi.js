import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

export const addToWishlistApi = async (productId) => {
  const userId = window.localStorage.getItem("userId");
  try {
    const response = await axiosToken.post(
      `${BASE_URL}/account/wishlist/${userId}`,
      { productId }
    );
    return response.data;
  } catch (error) {
    console.log("get all product: ", error.message);
  }
};

export const getWishlistApi = async () => {
  const userId = window.localStorage.getItem("userId");
  try {
    const response = await axiosToken.get(
      `${BASE_URL}/account/wishlist/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log("get all product: ", error.message);
  }
};

export const removeWishlistItemApi = async (productId) => {
  const userId = window.localStorage.getItem("userId");
  const response = await axiosToken.delete(
    `${BASE_URL}/account/wishlist/${userId}/${productId}`
  );
  return { productId };
};
