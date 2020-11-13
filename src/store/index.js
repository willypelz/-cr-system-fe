import Vue from 'vue';
/*using the  vuex as the state management which also have object storing ability*/
import Vuex from 'vuex';
import user from './modules/user.module';


/*registering vuex application*/
Vue.use(Vuex);
const modules = {
    user
};

/*exporting the vuex store for the application to use */
export default new Vuex.Store({
    modules
});
