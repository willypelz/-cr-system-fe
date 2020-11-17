import {ReviewService} from '../../services';

/*state initialization */
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  GET_REVIEW,
  GET_REVIEWS,
  LOGIN_USER,
  REGISTER_USER, UPDATE_REVIEW
} from "../actions/actions.type";

const initialState = {
  // users: [],
};

export const state = {...initialState};

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  // //get an admin all promotion
  async [CREATE_REVIEW](context, payload) {
    const {data} = await ReviewService.createReview(payload);
    return data;
  },
  async [DELETE_REVIEW](context, payload) {
    const {data} = await ReviewService.deleteReview(payload);
    return data;
  },
  async [UPDATE_REVIEW](context, payload) {
    const {data} = await ReviewService.updateReview(payload);
    return data;
  },
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
