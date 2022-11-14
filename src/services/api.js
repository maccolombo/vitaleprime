
import axios from "axios";
import humps from "humps";

import asyncStorage from "./modules/asyncStorage";

const create = (config) => {


    let api = axios.create({ baseURL: config.baseUrl });

    api.interceptors.request.use(async (reqConfig) => {

        const environment = await asyncStorage.getEnvironment()

        if (environment === "stage") {
            reqConfig.baseURL = reqConfig.baseURL.toString().replace("production", environment)
        }
        console.log(reqConfig.baseURL)

        const authToken = await asyncStorage.getAuthToken();

        if (authToken) {
            reqConfig.headers.Authorization = `${authToken}`;
        }

        reqConfig.data = humps.decamelizeKeys(reqConfig.data);
        reqConfig.params = humps.decamelizeKeys(reqConfig.params);

        return reqConfig;
    });

    api.interceptors.response.use(
        (resp) => resp.data,
        (error) => {
            console.log("error> : ", error)
            if (401 === error.response.status) {
                console.log('error 401');
                //asyncStorage.toLogin();
                return Promise.reject(humps.camelizeKeys(error.response));
            }
            throw error.response.data.errors
        }
    );

    return api;
};

export default { create };
