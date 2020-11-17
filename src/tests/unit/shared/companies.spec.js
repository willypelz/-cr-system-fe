import {createLocalVue,shallowMount} from '@vue/test-utils';
import Companies from '../../../dashboard/shared/companies/Companies.vue';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Companies", () => {

  let wrapper;
  let store;
  let actions;

  actions = {
    Companies: jest.fn(),

  };
  store = new Vuex.Store({
    actions,
  });

  beforeEach(() => {
    wrapper = shallowMount(Companies, {
      store,
      localVue
    });
  });

  it('renders without errors', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // lifecycle test
  it('has a data hook in the component', () => {
    expect(typeof Companies.data).toBe('function')
  });

});
