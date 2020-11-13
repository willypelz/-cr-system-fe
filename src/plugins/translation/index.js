import Vue from 'vue'
import VueI18n from 'vue-i18n'

/**
 * Import Language
 */
import english from './languages/english';

/**
 * Config
 */
Vue.use(VueI18n);

/**
 * Export
 */
export default new VueI18n({
  locale: 'english',
  messages: {
    english: {
      language: english
    }
  }
})
