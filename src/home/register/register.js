 import validationMixin from "../../shared/mixins/validationMixin";


export default {
  name: "authRegister",
  mixins: [validationMixin],

  data() {
    return {
      first_name: ""
    }
  },

  methods: {


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