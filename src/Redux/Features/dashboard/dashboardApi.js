import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

const fetchDashboardApi = async () => {
    try {
        const response = await axiosToken.post(`${BASE_URL}/products/product/sellerProduct/filters/dashboard`,{
            "targetLongitude": 12.9716,
            "targetLatitude": 77.5946,
            "filters": [
                {
                    "name": "section",
                    "value": "male"
                },
                {
                    "name": "section",
                    "value": "female"
                },
                {
                    "name": "section",
                    "value": "kid"
                },
                {
                    "name": "localization",
                    "value": "international"
                },
                {
                    "name": "localization",
                    "value": "national"
                }
            ]
        }
        );
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default fetchDashboardApi;
