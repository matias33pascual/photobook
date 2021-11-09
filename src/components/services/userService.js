import httpServices from "./httpServices";
import config from "./config.json";

const api = config.apiURL;

export function createUser(user) {
    return httpServices.post(api + config.createUser, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    });
}

export function registerUser(user) {
    return httpServices.post(api + config.registerUser, {
        email: user.email,
        password: user.password,
        token: user.token,
    });
}
