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

const getProdById = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/products/product/sellerProduct?id=${id}`);
        console.log("get prod by id response: ", res.data);
        return res.data;
    } catch (error) {
        console.log("gey prod by id: ", error.message);
    }
}

export default {
    getAll,
    getProdById
}