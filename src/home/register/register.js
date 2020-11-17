 import validationMixin from "../../shared/mixins/validationMixin";
 import {REGISTER_USER} from "../../store/actions/actions.type";
 import {saveUserData} from "../../util/cache";


export default {
  name: "authRegister",
  mixins: [validationMixin],

  data() {
    return {
      model: {
        username: '',
        email: '',
        password: '',
        agree: false
      },
      errors: null
    }
  },

  methods: {
    onSubmit() {
      const payload = {
       ...this.model,
        // role: 'admin'
      };
      this.$store.dispatch(REGISTER_USER, payload)
        .then((res) => {
            saveUserData(res.user);
            this.$router.push({name: 'home'})        },
          (err)=>{
            this.errors = err.response.data.errors;
          });
    }

  },
  mounted() {



  },
  computed: {
    // ...mapGetters(['loading', 'isCreated', 'validationErrorMessages'])
  },
  beforeDestroy() {
    this.$store.commit('isCreated', false);
  }
}
