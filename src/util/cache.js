import {ENV} from '../env';
import CryptoJS from "crypto-js";
import {APP_KEY, BASE_URL_FRONTEND} from "../config";

/*to get user token*/
export const getToken = () => {
    return window.localStorage.getItem(ENV.AUTH_KEY);
};
/*to register the token*/
export const saveToken = token => {
    window.localStorage.setItem(ENV.AUTH_KEY, token);
};
/*save user data*/
export const saveUserAppData = (userData) => {
    /*re-encrypt the user information in KMUS with KMUS application key*/
    const encryptedUserData = CryptoJS.AES.encrypt(userData, APP_KEY);
    window.localStorage.setItem(ENV.USER_DATA, encryptedUserData);
};
/*save ums user data*/
export const saveUMSUserData = (UMSUserData) => {
    /*re-encrypt the user information in KMUS with KMUS application key*/
    const encryptedUserData = CryptoJS.AES.encrypt(UMSUserData, APP_KEY);
    window.localStorage.setItem(ENV.UMS_USER_DATA, encryptedUserData);
};
/*save user data*/
export const savePromotionData = (promotionData) => {
    /*re-encrypt the user information in KMUS with KMUS application key*/
    const encryptedUserData = CryptoJS.AES.encrypt(promotionData, APP_KEY);
    window.localStorage.setItem(ENV.PROMOTION_DATA, encryptedUserData);
};
/*to save user application information*/
export const saveAppInfoData = (appInfo) => {
    const encryptedAppInfo = CryptoJS.AES.encrypt(appInfo, APP_KEY);
    window.localStorage.setItem(ENV.APP_INFO, encryptedAppInfo);
};
/*to save user currency to cache information*/
export const saveCurrencyData = (currency) => {
    const encryptedCurrency = CryptoJS.AES.encrypt(currency, APP_KEY);
    window.localStorage.setItem(ENV.APP_CURRENCY, encryptedCurrency);
};
/*to get the  user application information data*/
export const getCurrencyData = () => {
    const appData = window.localStorage.getItem(ENV.APP_CURRENCY);
    if (appData) {
        const bytes = CryptoJS.AES.decrypt(appData.toString(), APP_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
    return null;
};
/*to get the  user application information data*/
export const getAppInfoData = () => {
    const appData = window.localStorage.getItem(ENV.APP_INFO);
    const bytes = CryptoJS.AES.decrypt(appData.toString(), APP_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
/*to get the userData information*/
export const getUserAppData = () => {
    const userData = window.localStorage.getItem(ENV.USER_DATA);
    if (userData) {
        const bytes = CryptoJS.AES.decrypt(userData.toString(), ENV.APP_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
};

/*to get the userData information*/
export const getPromotionData = () => {
    const promotionData = window.localStorage.getItem(ENV.PROMOTION_DATA);
    if (promotionData) {
        const bytes = CryptoJS.AES.decrypt(promotionData.toString(), ENV.APP_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
};

/*to get the UMSuserData information*/
export const getUMSUserData = () => {
    const UMSUserData = window.localStorage.getItem(ENV.UMS_USER_DATA);
    if (UMSUserData) {
        const bytes = CryptoJS.AES.decrypt(UMSUserData.toString(), ENV.APP_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
};

/*encrypt user data for url security*/
export const encryptUserdata = (userData) => {
    return CryptoJS.AES.encrypt(userData, ENV.APP_KEY);
};
/*decrypt user data from UMS*/
export const dencryptUserdata = (userData) => {
    return CryptoJS.AES.encrypt(userData, ENV.UMS);
};
/*logout function */
export const logoutUser = () => {
    window.localStorage.removeItem(ENV.USER_DATA);
    window.localStorage.removeItem(ENV.UMS_USER_DATA);
    window.localStorage.removeItem(ENV.ALL_APPS);
    window.localStorage.removeItem(ENV.APP_CURRENCY);
    destroyToken();
    //redirect to ums frontend.
    window.location.href = BASE_URL_FRONTEND + '/marketplace';
};
/*destroying the token function*/
export const destroyToken = () => {
    window.localStorage.removeItem(ENV.AUTH_KEY);
};

export const saveAllApps = (appInfo) => {
    const encryptedAllApps = CryptoJS.AES.encrypt(appInfo, APP_KEY);
    window.localStorage.setItem(ENV.ALL_APPS, encryptedAllApps);
};
/*to get the  user application information data*/
export const getAllApps = () => {
    const appData = window.localStorage.getItem(ENV.ALL_APPS);
    const bytes = CryptoJS.AES.decrypt(appData.toString(), APP_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

/*exporting all the cache function*/
export default {
    getToken, saveToken, destroyToken, saveAppInfoData, getAppInfoData,
    getUserAppData, logoutUser, getPromotionData, getUMSUserData
};

