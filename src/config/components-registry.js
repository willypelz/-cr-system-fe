import Loading from '../shared/components/loading/Loading.vue';
import NoContent from '../shared/components/no-content/NoContent.vue';
import SnackBar from  '../shared/components/snackbar/SnackBar.vue';
import ValidationErrors from  '../shared/components/ValidationErrors/ValidationErrors.vue';


function componentsRegistry(Vue) {
  Vue.component('loading', Loading);
  Vue.component('no-content', NoContent);
  Vue.component('snackbar', SnackBar);
  Vue.component('validation-errors', ValidationErrors);
}


export {
  componentsRegistry
}
