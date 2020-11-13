import axios from "axios";
import {HELP_ME_API, APP_KEY} from "../config";
import {getToken} from "../utils/cache";


if (getToken()) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
}
axios.defaults.headers.common['X-Api-Key'] = `${APP_KEY}`;


const helpMeHandler = axios.create({
	baseURL: HELP_ME_API,
	timeout: 1000000
});


helpMeHandler.interceptors.request.use(function (config) {
	return config
}, function (error) {
	return Promise.reject(error)
});

helpMeHandler.interceptors.response.use(function (response) {
	return response
}, function (error) {
	return Promise.reject(error)
});


class HelpHandler {
	constructor() {
		this.axios = axios
	}
	
	setHeader(header) {
		helpMeHandler.defaults.headers.common[header.key] = header.value
		helpMeHandler.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
	}
	
	query(res, params) {
		return helpMeHandler.get(res, params);
	}
	
	get(res, slug = "") {
		return helpMeHandler.get(`${res}/${slug}`);
	}
	
	post(res, params) {
		return helpMeHandler.post(`${res}`, params);
	}
	
	getWithBearer(res, bearer) {
		// alert(bearer)
		return helpMeHandler.get(`${res}`, {
			headers: {'Authorization': 'Bearer ' + bearer},
		});
	}
	
	update(res, slug, params) {
		return helpMeHandler.put(`${res}/${slug}`, params);
	}
	
	/* function put to replace records in learni-calendar micro services*/
	put(res, params) {
		return helpMeHandler.put(`${res}`, params);
	}
	
	/* function delete to remove records in learni-calendar micro services*/
	delete(res, params) {
		return helpMeHandler.delete(res, params);
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
export default HelpHandler;
