import Vue from 'vue';
/*using the  vuex as the state management which also have object storing ability*/
import Vuex from 'vuex';
import user from './modules/user.module';
import company from './modules/company.module';
import review from './modules/review.module';


/*registering vuex application*/
Vue.use(Vuex);
const modules = {
  user,
  company,
  review
};

/*exporting the vuex store for the application to use */
export default new Vuex.Store({
  modules
});
