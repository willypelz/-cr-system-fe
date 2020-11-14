import axios from "axios";
import {USER_MANAGEMENT_SYSTEM_BACKEND_URL, APP_KEY} from "../config";
import {getToken} from "../utils/cache";

// alert(USER_MANAGEMENT_SYSTEM_BACKEND_URL)
if (getToken()) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
}
// const APP_KEY = 'QUJDLjE1ODE5MzY2NjkuamF5azk2cnJqNmg4MmNieWs1Z3QuQHBwMWljQHQxMG4=';

// alert(this.$store.state.loading + 'jhgfdsdfghj');

axios.defaults.headers.common['X-Api-Key'] = `${APP_KEY}`;


const UmsHandler = axios.create({
    baseURL: USER_MANAGEMENT_SYSTEM_BACKEND_URL,
    timeout: 1000000
});

UmsHandler.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error)
});

UmsHandler.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
});


class BaseHandler {
    constructor() {
        this.axios = axios;
    }

    setHeader(header) {
        UmsHandler.defaults.headers.common[header.key] = header.value;
        UmsHandler.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    query(res, params) {
        return UmsHandler.get(res, params);
    }

    getWithBearer(res, bearer) {
        // alert(bearer)
        return UmsHandler.get(res, {
            headers: {'Authorization': 'Bearer ' + bearer}
        });
    }

    get(res, slug = "") {
        return UmsHandler.get(`${res}/${slug}`);
    }

    patch(res, params) {
        return UmsHandler.patch(`${res}`, params);
    }

    post(res, params) {
        return UmsHandler.post(`${res}`, params);
    }

    postWithBearer(res, bearer) {
        return UmsHandler.post(res, {
            headers: {'Authorization': 'Bearer ' + bearer}
        });
    }


    update(res, slug, params) {
        return UmsHandler.put(`${res}/${slug}`, params);
    }

    /* function put to replace records in ums micro services*/
    put(res, params) {
        return UmsHandler.put(`${res}`, params);
    }

    /* function delete to remove records in ums micro services*/
    delete(res, params) {
        return UmsHandler.delete(res, params);
    }

    request(type, url, data) {
        let promise = null;
        switch (type) {
            case 'GET':
                promise = axios.get(url, {params: data});
                break;
            case 'POST':
                promise = axios.post(url, data);
                break;
            case 'PUT':
                promise = axios.put(url, data);
                break;
            case 'DELETE':
                promise = axios.delete(url, data);
                break;
            default :
                promise = axios.get(url, {params: data});
                break
        }
        return promise;
    }
}

/* exporting the  micro service as a module*/
export default BaseHandler;
