import {CompanyService} from '../../services';

/*state initialization */
import {
  CREATE_COMPANY,
  DELETE_COMPANY, GET_ACTIVATED_REVIEW,
  GET_COMPANIES,
  GET_COMPANY,
  LOGIN_USER,
  REGISTER_USER
} from "../actions/actions.type";
import {SET_COMPANIES, SET_COMPANY} from "../type/mutations.type";

const initialState = {
  companies: [],
  company: {},
};

export const state = {...initialState};

/*list of all actions methods(functions) using the async and await principle */
const actions = {
  // create company
  async [CREATE_COMPANY](context, payload) {
    const {data} = await CompanyService.createCompany(payload);
    context.dispatch(GET_COMPANIES);
    return data;
  },

  // //get all companies
  async [GET_COMPANIES](context) {
    const {data} = await CompanyService.getCompanies();
    context.commit(SET_COMPANIES, data.companies);
    return data;
  },

  async [GET_COMPANY](context, payload) {
    const {data} = await CompanyService.getCompany(payload);
    context.commit(SET_COMPANY, data.company);
    return data;
  },
  async [GET_ACTIVATED_REVIEW](context, payload) {
    const {data} = await CompanyService.getCompanyActivatedReview(payload);
    context.commit(SET_COMPANY, data.company);
    return data;
  },

  // //get all companies
  async [DELETE_COMPANY](context, payload) {
    const {data} = await CompanyService.deleteCompany(payload);
    // context.commit(SET_COMPANIES, data.data);
    return data;
  },
};

/*exporting the mutation*/
export const mutations = {
  [SET_COMPANIES](state, companies) {
    state.companies = companies;
  },
  [SET_COMPANY](state, company) {
    state.company = company;
  },
  // [RESET_STATE](state) {
  //     state =  {...state, ...initialState};
  // }
};
/* setting the getters*/
const getters = {
  companies(state) {
    return state.companies;
  },
  company(state) {
    return state.company;
  },

};

export default {
  state,
  actions,
  mutations,
  getters
};
