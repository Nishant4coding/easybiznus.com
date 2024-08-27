import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

export const getProfile = async () => {
  const userId = window.localStorage.getItem("userId");
  const token = window.localStorage.getItem("token");
  if (!userId || !token) {
    return;
  }

  try {
    const res = await axiosToken.get(`${BASE_URL}/account/profile`);
    return res.data;
  } catch (error) {
    console.log("get profile error: ", error.message);
    throw error;
  }
};

export const updateProfile = async (data) => {
  try {
    const userId = window.localStorage.getItem("userId");
    const res = await axiosToken.put(
      `${BASE_URL}/account/profile?${userId}`,
      data
    );
    return res.data;
  } catch (error) {
    console.log("put profile error: ", error.message);
  }
};
