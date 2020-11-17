import validationMixin from "../../shared/mixins/validationMixin";
import CompanyListTable from "./../../shared/components/companies/CompanyListTable";
export default {
  name: 'Home',
  components: {
    CompanyListTable,
  },
  data() {
    return {
      currentPage: 1
    };
  }
}
