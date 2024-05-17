<template>
    <Component
        :is="computedTag"
        :class="rootClass"
        type="button"
        v-bind="$attrs"
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
    }
};
</script>
