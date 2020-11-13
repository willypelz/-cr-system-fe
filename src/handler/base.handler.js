import axios from "axios";
import {BASE_URL, APP_KEY} from "../config";
import {getToken} from "../utils/cache";


if (getToken()) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
}
axios.defaults.headers.common['X-Api-Key'] = `${APP_KEY}`;


const baseHandlerLC = axios.create({
    baseURL: BASE_URL,
    timeout: 1000000
});


baseHandlerLC.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
});

baseHandlerLC.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
});

// alert(BASE_URL)

class BaseHandler {
    constructor() {
        this.axios = axios
    }

    setHeader(header) {
        baseHandlerLC.defaults.headers.common[header.key] = header.value
        baseHandlerLC.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    query(res, params) {
        return baseHandlerLC.get(res, params);
    }

    get(res, slug = "") {
        return baseHandlerLC.get(`${res}/${slug}`);
    }

    post(res, params) {
        return baseHandlerLC.post(`${res}`, params);
    }

    getWithBearer(res, bearer) {
        // alert(bearer)
        return baseHandlerLC.get(`${res}`, {
            headers: {'Authorization': 'Bearer ' + bearer},
        });
    }

    update(res, slug, params) {
        return baseHandlerLC.put(`${res}/${slug}`, params);
    }

    /* function put to replace records in learni-calendar micro services*/
    put(res, params) {
        return baseHandlerLC.put(`${res}`, params);
    }

    /* function delete to remove records in learni-calendar micro services*/
    delete(res, params) {
        return baseHandlerLC.delete(res, params);
    }

    request(type, url, data) {
        let promise = null;
        switch (type) {
            case 'GET':
                promise = axios.get(url, {params: data});
                break
            case 'POST':
                promise = axios.post(url, data);
                break
            case 'PUT':
                promise = axios.put(url, data);
                break
            case 'DELETE':
                promise = axios.delete(url, data);
                break
            default :
                promise = axios.get(url, {params: data});
                break
        }
        return promise
    }

}

/*exporting the learni-calendar micro service as a module*/
export default BaseHandler;
