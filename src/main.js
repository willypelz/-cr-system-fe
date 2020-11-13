import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './plugins/translation';

// import './assets/scss/styles.scss'
import {componentsRegistry} from "./config/components-registry";


componentsRegistry(Vue);

Vue.config.productionTip = false;


new Vue({
    store,
    i18n,
    router,
    render: h => h(App)
}).$mount('#app');