import TheSideBar from '@/layout/admin/sidebar/TheSideBar.vue';

export default {
  name: 'AdminLayout',
  data() {
    return {
      drawer: null,
    }
  },
  components: {
    TheSideBar,
  }
}
