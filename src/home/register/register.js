 import validationMixin from "../../shared/mixins/validationMixin";
 import {REGISTER_USER} from "../../store/actions/actions.type";


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
      }
    }
  },

  methods: {
    onSubmit() {
      const payload = {
       ...this.model,
        role: 'admin'
      };
      this.$store.dispatch(REGISTER_USER, payload)
        .then((res) => {
          console.log('eeee', res)
        });    }

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
