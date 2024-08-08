import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

const getAll = async () => {
    try {
        const res = await axiosToken.post(`${BASE_URL}/products/product/sellerProduct/filters`,
            {
                "filters": [
                    // {
                    //     "name": "section",
                    //     "value": "male"
                    // }
                ],
                "rangeOff": true,
                "targetLatitude": -77.1025,
                "targetLongitude": 28.7041
            }
        );
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log("get all product: ", error.message);
    }
}

const getProductById = async (id) => {
    try {
        const res = await axiosToken.get(`${BASE_URL}/products/product/sellerProduct/${id}`);
        console.log(id)
        return res.data;
    } catch (error) {
        console.log("gey prod by id: ", error.message);
    }
}

export default {
    getAll,
    getProductById
}