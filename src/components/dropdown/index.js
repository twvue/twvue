import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownDivider from './DropdownDivider';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Dropdown = merge(config, options);

        Vue.component('TWDropdown', Dropdown);
        Vue.component('TWDropdownItem', DropdownItem);
        Vue.component('TWDropdownDivider', DropdownDivider);
    },
};

export default Plugin;

export {
    Dropdown as TWDropdown,
    DropdownItem as TWDropdownItem,
    DropdownDivider as TWDropdownDivider,
};
