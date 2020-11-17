import validationMixin from "../../shared/mixins/validationMixin";

import {mapGetters} from "vuex";
import {LOGIN_USER} from "../../store/actions/actions.type";
import {saveUserData} from "../../util/cache";

export default {
  name: "authLogin",
  mixins: [validationMixin],

  data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false
      },
      errors: null
    }
  },

  methods: {

    onSubmit() {
      const payload = {
        ...this.model
      };
      this.$store.dispatch(LOGIN_USER, payload)
        .then((res) => {
          saveUserData(res.user);
          this.$router.push({name: 'home'})

          },
          (err) => {
            this.errors = err.response.data.errors;
          }
        );
    }
  },
  mounted() {

  },
  computed: {
  },
  beforeDestroy() {
    // this.$store.commit('isCreated', false);
  }
}
