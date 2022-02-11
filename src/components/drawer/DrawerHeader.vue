<template>
    <div :class="TWDrawer.headerClass">
        <div class="flex items-center justify-between">
            <Component
                :is="TWDrawer.titleTag"
                :class="TWDrawer.titleClass"
            >
                {{ TWDrawer.title }}
            </Component>

            <div class="ml-3 h-7 flex items-center">
                <TWButtonClose
                    :class="TWDrawer.btnCloseClass"
                    size="sm"
                    @click="TWDrawer.close()"
                />
            </div>
        </div>

        <div
            v-if="TWDrawer.description"
            :class="TWDrawer.descriptionWrapperClass"
        >
            <slot name="description">
                <p :class="TWDrawer.descriptionClass">
                    {{ TWDrawer.description }}
                </p>
            </slot>
        </div>
    </div>
</template>

<script>
import TWButtonClose from '../../components/button-close/ButtonClose';

export default {
    name: 'TWDrawerHeader',
    inject: ['TWDrawer'],
    components: {
        TWButtonClose,
    },
};
</script>
