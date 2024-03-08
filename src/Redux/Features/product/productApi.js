import axios from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";

const getAll = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/products/product/seller`);
        console.log("get all product response: ", res.data);
        return res.data;
    } catch (error) {
        console.log("get all product: ", error.message);
    }
}

export default {
    getAll
}