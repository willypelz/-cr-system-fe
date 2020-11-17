<template>
  <b-card no-body>
    <b-card-header class="border-0">
      <h3 class="mb-0">Companies</h3>
      <b-button v-if="user.role ==='admin'" class="float-right" variant="success" href="#" v-b-modal.modal-prevent-closing>Create Company</b-button>

    </b-card-header>
    <el-table class="table-responsive table"
              header-row-class-name="thead-light"
              :data="companies">
      <el-table-column label="Company"
                       min-width="210px"
                       prop="name">
        <template v-slot="{row}">
              <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Company Details"
                       min-width="370px"
                       prop="status">
        <template v-slot="{row}">
          <span class="font-weight-600 name mb-0 text-sm">{{row.description}}</span>

        </template>
      </el-table-column>

      <el-table-column label="Created By"
                       prop="completion"
                       min-width="240px">
        <template v-slot="{row}">
          <span class="font-weight-600 name mb-0 text-sm" v-if="row.creator">{{row.creator.username}}</span>

        </template>
      </el-table-column>

      <el-table-column label=""
                       prop="completion"
                       min-width="240px">
        <template v-slot="{row}">
          <div class="d-flex align-items-center">
            <router-link class="btn btn-primary btn-sm" :to="{name: 'company', params: {slug: row.slug}}">
               <i class="fa fa-eye"></i>
            </router-link>
            <button  v-if="user.role ==='admin'" class="btn btn-danger btn-sm" @click="deleteCompany(row.slug)" ><i class="fa fa-trash"></i></button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <b-card-footer class="py-4 d-flex justify-content-end">
      <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
    </b-card-footer>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Create Company"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="titleState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="title"
            :state="titleState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          :state="descriptionState"
          label="Description"
          label-for="name-input"
          invalid-feedback="Description is required"
        >
          <b-form-textarea
            id="name-input"
            v-model="description"
            :state="descriptionState"
            required
          ></b-form-textarea>
        </b-form-group>
      </form>
    </b-modal>
  </b-card>
</template>
<script>
    import {mapGetters} from "vuex";
    import {Table, TableColumn} from 'element-ui'
    import {CREATE_COMPANY, DELETE_COMPANY, GET_COMPANIES} from "../../../store/actions/actions.type";
    import {getUserData} from "../../../util/cache";

    export default {
        name: 'company-list',
        components: {
            [Table.name]: Table,
            [TableColumn.name]: TableColumn
        },
        data() {
            return {
                currentPage: 1,
                name: '',
                title: '',
                description: '',
                titleState: null,
                descriptionState: null,
            };
        },
        methods: {
            getCompanies() {
                this.$store.dispatch(GET_COMPANIES)
                    .then((res) => {
                            console.log('response', res)
                        },
                        (err) => {
                            this.errors = err.response.data.errors;
                        }
                    );
            },
            checkFormValidity() {
                const valid = this.$refs.form.checkValidity()
                this.titleState = valid;
                this.descriptionState = valid;
                return valid
            },
            resetModal() {
                this.title = ''
                this.description = ''
                this.titleState = null
                this.descriptionState = null
            },
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                // Trigger submit handler
                this.handleSubmit()
            },
            handleSubmit() {
                if (!getUserData()) this.$router.push({name: 'authLogin'})
                // Exit when the form isn't valid
                if (!this.checkFormValidity()) {
                    return
                }
                const payload = {
                    title: this.title,
                    description: this.description
                }
                this.$store.dispatch(CREATE_COMPANY, payload)
                    .then((res) => {
                            this.getCompanies();
                        },
                        (err) => {
                            this.errors = err.response.data.errors;
                        }
                    );

                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing')
                })
            },

            deleteCompany(slug){
                this.$store.dispatch(DELETE_COMPANY, slug)
                    .then((res) => {
                            this.getCompanies();
                        },
                        (err) => {
                            this.errors = err.response.data.errors;
                        }
                    );
            }
        },
        mounted() {
            this.getCompanies();
        },
        computed: {
            ...mapGetters(['companies', 'user'])
        }
    }


</script>
