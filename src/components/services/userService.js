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
    console.log(user.token);

    return httpServices.post(api + config.registerUser, {
        email: user.email,
        password: user.password,
        token: user.token,
    });
}

export function loginUser(user) {
    return httpServices.post(api + config.loginUser, {
        username: user.email,
        password: user.password,
        client_id: "service.client",
        client_secret: "secret",
        grand_type: "password",
    });
}
