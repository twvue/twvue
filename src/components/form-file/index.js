import FormFile from './FormFile';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.FormFile = merge(config, options);

        Vue.component('TWFormFile', FormFile);
    },
};

export default Plugin;

export {
    FormFile as TWFormFile,
};
