import {createLocalVue,shallowMount} from '@vue/test-utils';
import Register from '../../../home/register/Register.vue';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Register", () => {

  let wrapper;
  let store;
  let actions;

  actions = {
    Register: jest.fn(),

  };
  store = new Vuex.Store({
    actions,
  });

  beforeEach(() => {
    wrapper = shallowMount(Register, {
      store,
      localVue
    });
  });

  it('renders without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // lifecycle test
  it('has a data hook in the component', () => {
    expect(typeof Register.data).toBe('function')
  });

});
