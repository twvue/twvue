<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Modal
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButton @click="activateSize('sm')">Small</TWButton>
                    <TWButton @click="activateSize('md')">Medium</TWButton>
                    <TWButton @click="activateSize('lg')">Large</TWButton>
                    <TWButton @click="activateSize('full')">Full</TWButton>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Options
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButton @click="activateOptions({ 'no-close-on-esc': true })">No close on ESC</TWButton>
                    <TWButton @click="activateOptions({ 'no-close-on-backdrop': true })">No close on backdrop</TWButton>
                    <TWButton @click="activateOptions({ 'no-animation': true })">No animation</TWButton>
                    <TWButton @click="activateOptions({ 'hide-header': true })">Hide header</TWButton>
                </div>
            </div>
        </div>

        <TWModal
            v-model="isOpen"
            v-bind="modalAttributes"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis facilis nulla quas quia quibusdam reprehenderit sapiente suscipit! Ab ad alias deleniti ipsum iure iusto libero odio qui quibusdam similique!</p>
        </TWModal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            modalAttributes: null,
        };
    },

    methods: {
        activateOptions(options = {}) {
            this.modalAttributes = {
                title: 'Modal',
                description: 'This is a description',
                ...options
            }

            this.isOpen = true;
        },
        activateSize(size = 'sm') {
            this.modalAttributes = {
                size: size,
                title: 'Modal',
                description: 'This is a description',
            }

            this.isOpen = true;
        },
    },
};
</script>

