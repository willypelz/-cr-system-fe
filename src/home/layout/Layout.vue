<template>
  <div class="main-content bg-default">
    <base-nav
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main navbar-top navbar-dark"
      expand="lg"
    >


      <template>
        <div class="navbar-collapse-header">
          <b-row>
            <b-col cols="6" class="collapse-brand">
              <router-link to="/">
                <img src="img/brand/green.png">
              </router-link>
            </b-col>
            <b-col cols="6" class="collapse-close">
              <button type="button" class="navbar-toggler" @click="showMenu = false">
                <span></span>
                <span></span>
              </button>
            </b-col>
          </b-row>
        </div>
        <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
          <b-nav-item to="/">
            <i class="ni ni-planet"></i>
            <span class="nav-link-inner--text">Home</span>
          </b-nav-item>
          <b-nav-item to="/register" v-if="!user">
            <i class="ni ni-circle-08"></i>
            <span class="nav-link-inner--text">Register</span>
          </b-nav-item>
          <b-nav-item to="/login" v-if="!user">
            <i class="ni ni-key-25"></i>
            <span class="nav-link-inner--text">Login</span>
          </b-nav-item>
          <b-nav-item to="/" v-if="user">
            <i class="ni ni-circle-08"></i>
            <span class="nav-link-inner--text">{{(userDetails) ? userDetails.username : user.username}}</span>
          </b-nav-item>
          <b-nav-item @click="logout" v-if="user">
            <i class="ni ni-key-25"></i>
            <span class="nav-link-inner--text">Logout</span>
          </b-nav-item>
        </b-navbar-nav>
      </template>
    </base-nav>

    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
    </div>
  </div>
</template>

<style lang="scss">
  @import "./layout.scss";
</style>

<script src="./layout.js"></script>
