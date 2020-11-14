import validationMixin from "../../shared/mixins/validationMixin";


export default {
  name: "authLogin",
  mixins: [validationMixin],

  data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false
      }
    }
  },

  methods: {


    onSubmit() {
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
