<template>
    <button
        type="button"
        :class="classList"
        :disabled="disabled"
        v-on="listeners"
    >
        <slot>
            <svg
                :class="sizeClass"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    fill-rule="evenodd"
                    :d="arrowDirectionSvg"
                    clip-rule="evenodd"
                />
            </svg>
        </slot>
    </button>
</template>

<script>
 import FixedMixin from '../../utils/FixedMixin';
 import SizeMixin from '../../utils/SizeMixin';
    export default {
        name: 'TWPaginatorArrow',

        mixins: [FixedMixin, SizeMixin],

        props: {
            next: {
                type: Boolean,
                default: false,
            },

            disabled: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                config: this.$TWVue.PaginatorArrow,
            };
        },

        computed: {
            classList() {
                return [
                    this.fixedClass.buttonArrowRoot,
                    this.getTextColorClass,
                    this.getBorderColorClass,
                    this.getBorderRoundClass,
                    this.getBgColorClass,
                    this.getMarginClass,
                ];
            },

            getTextColorClass() {
                return this.disabled ? 'text-blue-graygray-300 hover:text-blue-graygray-300' : 'text-blue-graygray-400 hover:text-blue-400 active:text-white';
            },

            getBorderColorClass() {
                return this.disabled ? 'border-blue-graygray-100' : 'border-blue-graygray-100 hover:border-blue-400';
            },

            getBorderRoundClass() {
                return this.next ? 'rounded-r-md' : 'rounded-l-md';
            },

            getBgColorClass() {
                return this.disabled ? 'bg-white' : 'bg-white active:bg-blue-400 ';
            },

            getMarginClass() {
                return this.next ? '-ml-px' : '';
            },

            arrowDirectionSvg() {
                return this.next ? 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' : 'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z';
            },

            listeners() {
                return this.$listeners;
            },
        },
    };
</script>
