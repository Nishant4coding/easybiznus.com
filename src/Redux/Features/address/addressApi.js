import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

const createAddress = async (addressData) => {
  try {
    const response = await axiosToken.post(
      `${BASE_URL}/account/profile/addressbook`,
      addressData
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating address");
  }
};

const updateAddress = async (addressData) => {
  try {
    const { id, ...data } = addressData;
    const response = await axiosToken.put(
      `${BASE_URL}/account/profile/addressbook/${data.id}`,
      data
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("Error updating address");
  }
};
const deleteAddress = async (addressId) => {
  try {
    const response = await axiosToken.delete(
      `${BASE_URL}/account/profile/addressbook/${addressId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("Error deleting address");
  }
};

const addressApi = {
  createAddress,
  updateAddress,
  deleteAddress,
};

export default addressApi;
