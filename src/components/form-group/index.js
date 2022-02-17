import FormGroup from './FormGroup';

const Plugin = {
    install(Vue) {
        Vue.component('TWFormGroup', FormGroup);
    },
};

export default Plugin;

export {
    FormGroup as TWFormGroup,
};
