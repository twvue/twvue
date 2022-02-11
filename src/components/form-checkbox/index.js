import FormCheckbox from './FormCheckbox';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.FormCheckbox = merge(config, options);

        Vue.component('TWFormCheckbox', FormCheckbox);
    },
};

export default Plugin;

export {
    FormCheckbox as TWFormCheckbox,
};