import BASE_URL from "@/Utility/baseUrl";
import axios from "axios";

export const requestOTP = async (contactInfo) => {
  try {
    const isEmail = contactInfo.includes("@");
    const params = isEmail
      ? { type: "email", email: contactInfo }
      : { type: "mobile", phoneNumber: contactInfo };
    const response = await axios.get(`${BASE_URL}/account/requestOTP`, {
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to request OTP");
  }
};

export const resetPassword = async (
  emailOrMobile,
  otpValue,
  newPassword,
  id
) => {
  try {
    const response = await axios.post(`${BASE_URL}/account/reset-password`, {
      emailOrMobile,
      otpValue,
      newPassword,
      id,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to reset password"
    );
  }
};
