<template>
    <div :class="rootClass" />
</template>

<script>
    export default {
        name: 'TWDropdownDivider',
        inject: {
            'TWDropdown': {
                default: undefined,
            },
        },
        computed: {
            rootClass() {
                return [
                    this.TWDropdown.fixedClass.rootDivider,
                    this.TWDropdown.sizeClass.rootDivider,
                ];
            },
        },
    };
</script>
