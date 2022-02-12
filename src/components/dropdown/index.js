import Dropdown from './Dropdown';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Dropdown = merge(config, options);

        Vue.component(Dropdown.name, Dropdown);
    },
};

export default Plugin;

export {
    Dropdown as TWDropdown,
};
