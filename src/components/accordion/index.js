import Accordion from "./Accordion";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
import { merge } from "lodash";
import config from "./config.js";
const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) {
            Vue.prototype.$TWVue = {};
        }
        Vue.prototype.$TWVue.Accordion = merge(config, options);
        Vue.component("TWAccordion", Accordion);
        Vue.component("TWAccordionTittle", AccordionTitle);
        Vue.component("TWAccordionContent", AccordionContent);
        
    }
};
export default Plugin;
export { 
    Accordion as TWAccordion,
    AccordionTitle as TWAccordionTittle,
    AccordionContent as TWAccordionContent
};
