import TheSideBar from '@/layout/user/sidebar/TheSideBar.vue';

export default {
  name: 'UserLayout',
  data() {
    return {
      drawer: null,
    }
  },
  components: {
    TheSideBar,
  }
}
