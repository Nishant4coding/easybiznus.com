import axios from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

const getProfile = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/account/profile`);
        return res.data;
    } catch (error) {
        console.log("get profile error: ", error.message);
    }
}

const updateProfile = async (data) => {
    try {
        const userId = window.localStorage.getItem("userId");
        const res = await axios.put(`${BASE_URL}/account/profile?${userId}`, data);
        return res.data;
    } catch (error) {
        console.log("put profile error: ", error.message);
    }
}

export default {
    getProfile,
    updateProfile
}