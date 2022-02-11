import Pagination from './Pagination';
import PaginatorArrow from './PaginatorArrow';
import PaginatorPage from './PaginatorPage';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Pagination = merge(config, options);
        Vue.prototype.$TWVue.PaginatorArrow = merge(config, options);
        Vue.prototype.$TWVue.PaginatorPage = merge(config, options);

        Vue.component('TWPagination', Pagination);
        Vue.component('TWPaginatorArrow', PaginatorArrow);
        Vue.component('TWPaginatorPage', PaginatorPage);
    },
};

export default Plugin;

export {
    Pagination as TWPagination,
    PaginatorArrow as TWPaginatorArrow,
    PaginatorPage as TWPaginatorPage
};
