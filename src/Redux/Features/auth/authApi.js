import BASE_URL from "@/Utility/baseUrl";
import axios from 'axios';
import axiosToken from '@/Utility/axiosInstance';

const login = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/login`, credentials);
        // console.log(response);
        if (response.data.token) {
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("userCode", response.data.userCode);
            window.localStorage.setItem("userId", response.data.userId);
        }
        return response.data;
    }
    catch (err) {
        console.log(err)
        alert("Error Login");
    }
}

const register = async (userData) => {
    console.log(`${BASE_URL}/account/register`);
    try {
        const response = await axios.post(`${BASE_URL}/account/register`, userData);
        if (response.data.token) {
            window.localStorage.setItem("token", response.data.token);
        }
        return response.data;
    }
    catch (err) {
        console.log(err)
        alert("Error Signup")
    }
}

const profile = async (token) => {
    try {
        const response = await axiosToken.get(`${BASE_URL}/account/profile`);
        return response.data;
    }
    catch (err) {
        console.log(err)
        alert("Error Profile")
    }
}


const requestOTP = async (phoneNumber) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/requestOTP`, { phoneNumber, type: 'mobile' });
        return response.data;
    } catch (err) {
        console.log(err);
        alert("Error requesting OTP");
    }
}

const resetPassword = async ({ emailOrMobile, otpValue, newPassword, id }) => {
    try {
        const response = await axios.post(`${BASE_URL}/account/reset-password`, {
            emailOrMobile,
            otpValue,
            newPassword,
            id
        });
        return response.data;
    } catch (err) {
        console.log(err);
        alert("Error resetting password");
    }
}

const authApi = {
    login,
    register,
    profile,
}

export default authApi;