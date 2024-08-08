import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

export const addToWishlistApi = async (productId) => {
  const userId = window.localStorage.getItem("userId");
  try {
    console.log("Adding to Wishlist:", { userId, productId });

    const response = await axiosToken.post(
      `${BASE_URL}/account/wishlist`,
      { userId, productId }
    );
      console.log(productId)
    return response.data;

  } catch (error) {
    console.error("Add to Wishlist API Error:", error.message);
    throw error;
  }
};

export const getWishlistApi = async () => {
  const userId = window.localStorage.getItem("userId");
  try {
    const response = await axiosToken.get(
      `${BASE_URL}/account/wishlist/${userId}`
    );
    console.log(response.data)
    return response.data;

  } catch (error) {
    console.error("Get Wishlist API Error:", error.message);
    throw error;
  }
};

export const removeWishlistItemApi = async (productId) => {
  const response = await axiosToken.delete(
    `${BASE_URL}/account/wishlist?productId=${productId}` 
  );
  console.log("id:",productId)
  return response.data;
};
