<template>
    <div :class="rootClass">
        <div
            ref="button"
            class="cursor-pointer"
            @click="toggleDropdown()"
        >
            <slot name="button-content">
                <TWButton
                    type="button"
                    :variant="variant"
                    :size="size"
                >
                    {{ text }}

                    <slot
                        v-if="!noCaret"
                        name="button-icon"
                    >
                        <svg
                            :class="iconClass"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </slot>
                </TWButton>
            </slot>
        </div>

        <Transition
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
        >
            <div
                ref="dropdownPopper"
                v-show="isOpen"
            >
                <div
                    ref="dropdown"
                    :class="dropdownClass"
                >
                    <div :class="dropdownContainerClass">
                        <slot />
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import TWButton from '../button/Button.vue';
import { createPopper } from '@popperjs/core';
import FixedMixin from '../FixedMixin';
import VariantMixin from '../VariantMixin';
import SizeMixin from '../SizeMixin';
import config from './config';
import { gsap } from 'gsap';

export default {
    name: 'TWDropdown',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    emits: ['open', 'close', 'select'],
    props: {
        disabled: Boolean,
        noCaret: Boolean,
        text: String,
        placement: {
            type: String,
            default: 'bottom-end',
        },
    },
    components: {
        TWButton,
    },
    provide() {
        return {
            TWDropdown: this,
        };
    },
    data() {
        return {
            config,
            isOpen: false,
            popper: null,
            dropdown: null
        };
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
                this.sizeClass.root,
            ];
        },
        iconClass() {
            return [
                this.fixedClass.icon,
                this.sizeClass.icon
            ];
        },
        dropdownClass() {
            return [
                this.fixedClass.dropdown,
                this.variantClass.dropdown,
                this.sizeClass.dropdown,
            ]
        },
        dropdownContainerClass() {
            return [
                this.fixedClass.dropdownContainer,
                this.sizeClass.dropdownContainer,
            ]
        },
    },
    watch: {
        isOpen(value) {
            if (value) {
                this.initPopper()
            }
        },
    },
    mounted() {
        this.dropdown = this.$refs.dropdown;

        if (typeof document !== 'undefined') {
            document.addEventListener('click', this.clickOutListener);
        }
    },
    beforeUnmount() {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.clickOutListener);
        }
    },
    unmounted() {
        this.close()
    },
    methods: {
        clickOutListener(e) {
            // TODO Refactor as it should close only the current scope
            if (!this.$el.contains(e.target)) {
                this.close();
            }
        },
        toggleDropdown() {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        },
        open() {
            this.isOpen = true;
            this.$emit('open');
        },
        close() {
            this.isOpen = false;
            this.$emit('close');
        },
        select(opt) {
            this.close();
            this.$emit('select', opt);
        },
        initPopper() {
            this.$nextTick(() => {
                const button = this.$refs.button;
                const dropdown = this.$refs.dropdownPopper;

                this.popper = createPopper(button, dropdown, {
                    placement: this.placement,
                    removeOnDestroy: true,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 5],
                            },
                        },
                    ],
                });

                this.popper.update();
            })
        },
        beforeEnter() {
            gsap.set(this.dropdown, { opacity: 0, scale: 0.95 });
        },
        enter(el, done) {
            gsap.to(this.dropdown, { opacity: 1, scale: 1, ease: 'elastic.out(1.5, 0.75)', duration: .7, onComplete: done })
        },
        leave(el, done) {
            gsap.to(this.dropdown, { opacity: 0, scale: 0.95, ease: 'power3.inOut', duration: .5, onComplete: () => {
                this.popper?.destroy();
                done();
            }, })
        },
    },
};
</script>
