import validationMixin from "../../shared/mixins/validationMixin";
import Company from "./../../shared/components/companies/Company";
import {GET_COMPANIES} from "../../store/actions/actions.type";
import {mapGetters} from "vuex";
export default {
  name: 'Home',
  components: {
    Company,
  },
  data() {
    return {
      currentPage: 1
    };
  },
  methods: {

    getCompanies() {

      this.$store.dispatch(GET_COMPANIES)
        .then((res) => {
            console.log('eeee', res)
          },
          (err) => {
            this.errors = err.response.data.errors;
            console.log('dddd', this.errors)
          }
        );
    }
  },
  mounted() {
    this.getCompanies();
  },
  computed: {
    ...mapGetters(['user'])
  }
}
