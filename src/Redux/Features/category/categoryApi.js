import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

export const fetchCategories = async () => {
    try {
        const response = await axiosToken.get(`${BASE_URL}/categories`);
        console.log("API response: ", response); // Log the entire response
        return response.data.categories;
    } catch (error) {
        console.error("API error: ", error); // Log the error message
        throw error; // Re-throw the error to be caught by Redux
    }
};
