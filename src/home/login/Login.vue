<template>
    <div>
        <!-- Header -->
        <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>

        <!-- Page content -->
        <b-container class="mt--8 pb-5">
            <b-row class="justify-content-center">
                <b-col lg="5" md="7">
                    <b-card no-body class="bg-secondary border-0 mb-0">
                        <b-card-body class="px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                sign in
                            </div>
                            <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                              <b-alert show dismissible variant="danger" v-if="errors">
                                <span class="alert-text"><strong>Failed!</strong> {{errors.User}}!</span>
                              </b-alert>
                                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                                    <base-input alternative
                                                class="mb-3"
                                                name="Email"
                                                :rules="{required: true, email: true}"
                                                prepend-icon="ni ni-email-83"
                                                placeholder="Email"
                                                v-model="model.email">
                                    </base-input>

                                    <base-input alternative
                                                class="mb-3"
                                                name="Password"
                                                :rules="{required: true, min: 6}"
                                                prepend-icon="ni ni-lock-circle-open"
                                                type="password"
                                                placeholder="Password"
                                                v-model="model.password">
                                    </base-input>

                                    <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>
                                    <div class="text-center">
                                        <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                                    </div>
                                </b-form>
                            </validation-observer>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script src="./login.js"></script>

<style lang="scss" scoped>
    @import "./login.scss";
</style>
