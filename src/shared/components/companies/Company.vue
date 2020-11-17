<template>
  <b-card no-body>
    <b-jumbotron>
      <template #header>{{company.title}}</template>

      <hr class="my-4">
      <template #lead>
        {{company.description}}
      </template>


      <p v-if="company.created">
        {{company.created}}
      </p>

      <b-button variant="primary" :to="{name: 'companies'}" href="#">Back</b-button>
      <b-button variant="success" href="#" v-b-modal.modal-prevent-closing>Review</b-button>
    </b-jumbotron>
    <div class="accordion" role="tablist">
      <h2 class="ml-4">Reviews</h2>

      <b-card no-body class="m-4" v-for="(review, index) in company.reviews" :key="index">
        <b-card>
          <b-card-text>
            {{review.body}}
          </b-card-text>
          <b-card-text>
            <span  class="btn-sm float-left font-weight-bold" href="#">{{review.status}}</span>
          </b-card-text>
           <b-card-text v-if="review.status==='pending'">
             <b-button variant="success" class="btn-sm float-right" @click="updateReview(review.id)">Activate</b-button>
           </b-card-text>
        </b-card>
      </b-card>
    </div>


    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Review"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="reviewState"
          label="Review"
          label-for="name-input"
          invalid-feedback="Review is required"
        >
          <b-form-textarea
            id="name-input"
            v-model="review"
            :state="reviewState"
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
    import {CREATE_REVIEW, GET_ACTIVATED_REVIEW, GET_COMPANY, UPDATE_REVIEW} from "../../../store/actions/actions.type";
    import { getUserData} from "../../../util/cache";

    export default {
        name: 'companyComponent',
        data() {
            return {
                name: '',
                review: '',
                reviewState: null,
            };
        },
        methods: {
            getCompany() {
                let user_data = getUserData();
                if ((user_data && user_data.role === 'admin') ){
                    this.$store.dispatch(GET_COMPANY, this.slug)
                }else{
                    this.$store.dispatch(GET_ACTIVATED_REVIEW, this.slug)
                }
            },
            checkFormValidity() {
                const valid = this.$refs.form.checkValidity()
                this.reviewState = valid
                return valid
            },
            resetModal() {
                this.review = ''
                this.reviewState = null
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
                    key: this.slug,
                    body: this.review
                }
                this.$store.dispatch(CREATE_REVIEW, payload)
                    .then((res) => {
                            this.getCompany();
                        },
                        (err) => {
                            this.errors = err.response.data.errors;
                        }
                    );

                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing')
                })
            },
            updateReview(id){
                const payload = {slug: this.slug, id, status: 'active'};
                this.$store.dispatch(UPDATE_REVIEW, payload)
                    .then((res) => {
                            this.getCompany();
                        },
                        (err) => {
                            this.errors = err.response.data.errors;
                        }
                    );
            }
        },
        mounted() {
            this.getCompany();
        },
        computed: {
            ...mapGetters(['company']),
            slug() {
                return this.$route.params.slug;
            }
        }
    }


</script>
