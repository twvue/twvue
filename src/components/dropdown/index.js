import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import DropdownDivider from './DropdownDivider.vue';

const Plugin = {
    install(Vue) {
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
