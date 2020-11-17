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
  <b-container fluid class="mt--7">
    <b-row>
      <b-col>
        <company-list-table/>
      </b-col>
    </b-row>
    <div class="mt-5"></div>
  </b-container></div>
</template>

<script src="./companies.js"></script>

<style lang="scss" scoped>
    @import "./companies.scss";
</style>
