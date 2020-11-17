import {createLocalVue,shallowMount} from '@vue/test-utils';
import Login from '../../../home/login/Login.vue';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Login", () => {

  let wrapper;
  let store;
  let actions;

  actions = {
    login: jest.fn(),

  };
  store = new Vuex.Store({
    actions,
  });

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      store,
      localVue
    });
  });

  it('renders without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // lifecycle test
  it('has a data hook in the component', () => {
    expect(typeof Login.data).toBe('function')
  });

});
