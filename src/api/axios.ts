import axios from "axios";
import queryString from "query-string";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);

export default instance;
