import axios from "axios";
import logger from "./logServices";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
    const expectedError = error.response; //* ver cual es el codigo de error cuando se ingresa un mail ya ingresado

    if (!expectedError) {
        logger.log(error);
        toast("error inesperado");
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
