<template>
    <div :class="rootClass">
        <div :class="containerButtons">
            <button
                type="button"
                :class="buttonClass"
                @click.stop.prevent="prev()"
            >
                Previous
            </button>

            <button
                type="button"
                :class="buttonClass"
                @click.stop.prevent="next()"
            >
                Next
            </button>
        </div>

        <div :class="containerArrow">
            <TWPaginatorArrow
                :disabled="currentPage === 1"
                @click.stop.prevent="prev()"
            />

            <TWPaginatorPage
                v-for="(pg, index) in pagesRage"
                :key="index"
                :disabled="pg.disabled"
                :active="currentPage === pg.value"
                @click.stop.prevent="changePage(pg.value)"
            >
                {{ pg.value }}
            </TWPaginatorPage>

            <TWPaginatorArrow
                next
                :disabled="currentPage === totalPages"
                @click.stop.prevent="next()"
            />
        </div>
    </div>
</template>

<script>
    import TWPaginatorArrow from './PaginatorArrow';
    import TWPaginatorPage from './PaginatorPage';
    import FixedMixin from '../../utils/FixedMixin';
    import SizeMixin from '../../utils/SizeMixin';

    export default {
        name: 'TWPagination',

        mixins: [FixedMixin, SizeMixin],

        components: {
            TWPaginatorArrow,
            TWPaginatorPage,
        },

        props: {
            currentPage: {
                type: Number,
                default: 1,
            },
            perPage: {
                type: Number,
                default: 0,
            },
            total: {
                type: Number,
                default: 0,
            },
            limit: {
                type: Number,
                default: 3,
            },
            pageNumberLimit: {
                type: Number,
                default: 0,
            },
            nextLabel: {
                type: String,
                default: undefined,
            },
            previousLabel: {
                type: String,
                default: undefined,
            },
        },

        data() {
            return {
                config: this.$TWVue.Pagination,
            };
        },

        computed: {
            rootClass() {
                return [
                    this.fixedClass.root,
                ];
            },

            containerButtons(){
                 return [
                    this.fixedClass.containerButtons,
                ];
            },

            buttonClass(){
                 return [
                    this.fixedClass.buttonClass,
                ];
            },

            containerArrow(){
                 return [
                    this.fixedClass.containerArrow,
                ];
            },

            totalPages() {
                const total = parseInt(this.total);
                const perPage = parseInt(this.perPage);
                const output = Math.ceil(total / perPage);

                // Fix the number of pages based on props
                if (this.pageNumberLimit && output > this.pageNumberLimit) {
                    return this.pageNumberLimit;
                }

                return output < 1 ? 1 : output;
            },

            pagesRage() {
                const total = this.totalPages;
                const range = [];
                const gap = this.limit;
                const before = this.currentPage - gap;
                const after = this.currentPage + gap;
                const pages = [];

                // eslint-disable-next-line
                for (let i = 1; i <= total; i++) {
                    if (i === 1 || i === total || (i >= before && i <= after)) {
                        range.push({
                            id: i,
                            value: i,
                            disabled: false,
                        });
                    }
                }

                range.forEach((item, index) => {
                    pages.push(item);

                    const nextIndex = index + 1;

                    if (nextIndex <= range.length - 1) {
                        if (item.id + 1 !== range[nextIndex].id) {
                            pages.push({
                                id: `${item.id}_ellipsis`,
                                value: '...',
                                disabled: true,
                            });
                        }
                    }
                });

                return pages;
            },

            currentPageObject() {
                const output = this.pagesRage.filter(o => o.id === this.currentPage);
                return output.length ? output[0] : {};
            },
        },

        methods: {
            changePage(page) {
                if (typeof page === 'number') {
                    this.$emit('change', page);
                }
            },

            prev() {
                if (this.currentPage !== 1) {
                    this.changePage(this.currentPageObject.id - 1);
                }
            },

            next() {
                if (this.currentPage < this.totalPages) {
                    this.changePage(this.currentPageObject.id + 1);
                }
            },
        },
    };
</script>