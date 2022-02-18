import StepBar from "./StepBar";
import { merge } from "lodash";
import config from "./config";
const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) {
            Vue.prototype.$TWVue = {};
        }
        Vue.prototype.$TWVue.Stepbar = merge(config, options);
        Vue.component("TWStepBar", StepBar);
    }
};
export default Plugin;
export { StepBar as TWStepBar };
