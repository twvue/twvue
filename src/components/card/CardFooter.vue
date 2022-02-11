<template>
    <div :class="TWCard.footerClass">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'TWCardFooter',
    inject: ['TWCard'],
};
</script>
