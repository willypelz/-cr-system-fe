import {createLocalVue,shallowMount} from '@vue/test-utils';
import Company from '../../../dashboard/shared/company/Company.vue';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Company", () => {

  let wrapper;
  let store;
  let actions;

  actions = {
    Company: jest.fn(),

  };
  store = new Vuex.Store({
    actions,
  });

  beforeEach(() => {
    wrapper = shallowMount(Company, {
      store,
      localVue
    });
  });

  it('renders without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // lifecycle test
  it('has a data hook in the component', () => {
    expect(typeof Company.data).toBe('function')
  });

});
