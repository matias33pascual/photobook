import httpServices from "./httpServices";
import config from "./config.json";

export function createUser(user) {
    return httpServices.post(config.apiCreateUser, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    });
}
