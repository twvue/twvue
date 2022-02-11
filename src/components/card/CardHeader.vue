<template>
    <div :class="TWCard.headerClass">
        <slot>
            <Component
                :is="TWCard.titleTag"
                :class="TWCard.headerTitleClass"
            >
                {{ TWCard.title }}
            </Component>

            <div>
                <slot name="action" />
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'TWCardHeader',
    inject: ['TWCard'],
};
</script>
