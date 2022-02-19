<template>
    <div>
        <h3 class="text-xl font-medium mb-3">
            Drawer
        </h3>

        <div class="space-y-6">
            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Variant
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButton @click="activateVariant()">Primary</TWButton>
                    <TWButton @click="activateVariant('secondary')">Secondary</TWButton>
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
                    <TWButton @click="activateOptions({ direction: 'left' })">Left</TWButton>
                </div>
            </div>

            <div>
                <h4 class="font-semibold text-gray-800 tracking-tight mb-2">
                    Sizes
                </h4>

                <div class="flex items-center space-x-4">
                    <TWButton @click="activateSize()">Small</TWButton>
                    <TWButton @click="activateSize('md')">Medium</TWButton>
                    <TWButton @click="activateSize('lg')">Large</TWButton>
                    <TWButton @click="activateSize('full')">Full</TWButton>
                </div>
            </div>
        </div>

        <TWDrawer
            v-model="isOpen"
            v-bind="drawerAttributes"
        >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis facilis nulla quas quia quibusdam reprehenderit sapiente suscipit! Ab ad alias deleniti ipsum iure iusto libero odio qui quibusdam similique!</p>

            <template #footer>
                <div class="flex items-center justify-end space-x-2">
                    <TWButton @click="isOpen = false" variant="secondary">Cancel</TWButton>
                    <TWButton @click="isOpen = false">Save</TWButton>
                </div>
            </template>
        </TWDrawer>
    </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
    data() {
        return {
            isOpen: false,
            drawerAttributes: null,
        };
    },

    methods: {
        activateVariant(variant = 'primary') {
            this.drawerAttributes = {
                title: 'Drawer primary',
                description: 'This is a description',
                variant: variant
            }

            this.isOpen = true;
        },
        activateOptions(options = {}) {
            this.drawerAttributes = {
                title: 'Drawer',
                description: 'This is a description',
                variant: 'secondary',
                ...options
            }

            this.isOpen = true;
        },
        activateSize(size = 'sm') {
            this.drawerAttributes = {
                size: size,
                title: 'Drawer small',
                description: 'This is a description',
                variant: 'secondary'
            }

            this.isOpen = true;
        },
        run() {
            const el = this.$refs.gsap;
            gsap.set(el, { opacity: 0 })
            gsap.to(el, { opacity: 1, x: '100px', ease: 'expo.inOut' })
        },
    },
};
</script>

