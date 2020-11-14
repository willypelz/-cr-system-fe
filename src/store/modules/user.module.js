// import {UserService} from '../../services';
// import {
//
// } from "../actions/actions.type";
// import {
//
// } from "../type/mutations.type";

/*state initialization */
const initialState = {
  users: [],
};

export const state = {...initialState};

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  // //get an admin all promotion
  // async [GET_USER](context, payload) {
  //   const {data} = await UmsUserService.getUser(payload);
  //   context.commit(SET_USER, data.data);
  //   return data;
  // },
};

/*exporting the mutation*/
export const mutations = {
  // [SET_USER](state, user) {
  //   state.user = user;
  // },
  // [RESET_STATE](state) {
  //     state =  {...state, ...initialState};
  // }
};
/* setting the getters*/
const getters = {
  // user(state) {
  //   return state.user;
  // },
  users(state) {
    return state.users;
  },

};

export default {
  state,
  actions,
  mutations,
  getters
};
