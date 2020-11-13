import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        orange: '#ff9801',
        secondary: '#B2BFA8',
        accent: '#82B1FF',
        error: '#E30000',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        primary: '#445335'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
