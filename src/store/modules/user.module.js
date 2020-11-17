import {UserService} from '../../services';
import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "../actions/actions.type";
import {SET_USER} from "../type/mutations.type";

const initialState = {
  user: {},
};

export const state = {...initialState};

const actions = {
  async [REGISTER_USER](context, payload) {
    const {data} = await UserService.register(payload);
    context.commit(SET_USER, data.user);
    return data;
  },

  async [LOGIN_USER](context, payload) {
    const {data} = await UserService.login(payload);
    context.commit(SET_USER, data.user);
    return data;
  },
  async [LOGOUT_USER](context) {
    context.commit(SET_USER, '');
  },
};

/*exporting the mutation*/
export const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
  // [RESET_STATE](state) {
  //     state =  {...state, ...initialState};
  // }
};
/* setting the getters*/
const getters = {
  user(state) {
    return state.user;
  },
  // users(state) {
  //   return state.users;
  // },

};

export default {
  state,
  actions,
  mutations,
  getters
};
