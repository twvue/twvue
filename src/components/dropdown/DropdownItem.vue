<template>
    <Component
        :is="computedTag"
        :class="rootClass"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <slot />
    </Component>
</template>

<script>
export default {
    name: 'TWDropdownItem',
    inheritAttrs: false,
    inject: ['TWDropdown'],
    props: {
        tag: {
            type: String,
            default: 'button',
        },
    },
    computed: {
        computedTag() {
            if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                return 'button';
            }
            return this.tag;
        },
        rootClass() {
            return [
                this.TWDropdown.fixedClass.rootItem,
            ];
        },
    },
    methods: {
        onClick($evt) {
            this.closeDropdown();
            this.$emit('click', $evt);
        },
        closeDropdown() {
            if (!this.TWDropdown) {
                return;
            }

            this.TWDropdown.close();
        },
    },
};
</script>
