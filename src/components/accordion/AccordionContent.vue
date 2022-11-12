<template>
    <div>
        <slot />
    </div>
</template>

<script>
    export default {
        props:{
            selected: Boolean
        }
    }
</script>