import axios from 'axios';
import BASE_URL from '../baseUrl';

export const uploadImg = async (files) => {
    try {
        const res = await axios.post(`${BASE_URL}/assets/add`, files)
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const deleteImg = async (files) => {
    try {
        const res = await axios.delete(`${BASE_URL}/assets/remove`,{
            data:{
                imageUrls:files
            }
        })
        return res.data;
    } catch (err) {
        console.log(err);
    }
}