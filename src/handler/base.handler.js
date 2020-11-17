import axios from "axios";
import {BASE_URL} from "../config";
import {getUserData} from "../util/cache";

 if (getUserData()) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getUserData().token}`;
}

 const baseHandler = axios.create({
    baseURL: BASE_URL,
    timeout: 1000000
});


baseHandler.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
});

baseHandler.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
});


class BaseHandler {
    constructor() {
        this.axios = axios
    }


    get(res, params) {
        return baseHandler.get(res, params);
    }

    post(res, params) {
        return baseHandler.post(`${res}`, params);
    }

    getWithBearer(res, bearer) {
        // alert(bearer)
        return baseHandler.get(`${res}`, {
            headers: {'Authorization': 'Bearer ' + bearer},
        });
    }

    update(res, slug, params) {
        return baseHandler.put(`${res}/${slug}`, params);
    }

    /* function put to replace records in company-review system*/
    put(res, params) {
        return baseHandler.put(`${res}`, params);
    }

    /* function delete to remove records in company-review system*/
    delete(res, params) {
        return baseHandler.delete(res, params);
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

/*exporting the company review system baseHandler as a module*/
export default BaseHandler;
