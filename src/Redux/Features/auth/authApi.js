import BASE_URL from "@/Utility/baseUrl";
import axios from "axios";
import axiosToken from "@/Utility/axiosInstance";
import toast from "react-hot-toast";

const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/account/login`, credentials);
    if (response.data.token) {
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("userCode", response.data.userCode);
      window.localStorage.setItem("userId", response.data.userId);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    toast.error("Error Login");
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/account/register`, userData);
    if (response.data.token) {
      window.localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    toast.error("Error Signup");
  }
};

const profile = async (token) => {
  try {
    const response = await axiosToken.get(`${BASE_URL}/account/profile`);
    return response.data;
  } catch (err) {
    console.log(err);
    toast.error("Error Profile");
  }
};

const authApi = {
  login,
  register,
  profile,
};

export default authApi;
