import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";
const userId = window.localStorage.getItem("userId");

export const addToWishlistApi = async (productId) => {
  try {
    const response = await axiosToken.post(
      `${BASE_URL}/account/wishlist/${userId}`,
      { productId }
    );
    console.log("added data ",response.data)
    return response.data;
  } catch (error) {
    console.log("get all product: ", error.message);
  }
};

export const getWishlistApi = async () => {
  try{
    
    const response = await axiosToken.get(
      `${BASE_URL}/account/wishlist/${userId}`
    );
    console.log("get data",response.data);
    return response.data;
  }
  
catch (error) {
  console.log("get all product: ", error.message);
}
}

export const removeWishlistItemApi = async (productId) => {
  const response = await axiosToken.delete(
    `${BASE_URL}/account/wishlist/${userId}/${productId}`
  );
  return { productId };
};
