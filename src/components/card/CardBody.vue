<template>
    <div :class="bodyClass">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'TWCardBody',
    inject: ['TWCard'],
    computed: {
        bodyClass() {
            return [
                this.TWCard.fixedClass.body,
                this.TWCard.variantClass.body,
            ];
        },
    },
};
</script>
