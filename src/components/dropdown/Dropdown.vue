<template>
    <div
        ref="component"
        :class="rootClass"
    >
        <TWButton
            ref="button"
            type="button"
            :variant="variant"
            :size="size"
            @click.stop.prevent="toggleDropdown()"
        >
            <slot name="button-content">
                {{ text }}
            </slot>

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

        <MountingPortal
            mount-to="body"
            append
        >
            <div
                ref="dropdown"
                :data-show="isOpen"
                :class="dropdownClass"
            >
                <div :class="dropdownContainerClass">
                    <slot />
                </div>
            </div>
        </MountingPortal>
    </div>
</template>

<script>
import { MountingPortal } from 'portal-vue';
import TWButton from '../button/Button';
import { createPopper } from '@popperjs/core';
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWDropdown',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
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
        MountingPortal,
        TWButton,
    },
    provide() {
        return {
            TWDropdown: this,
        };
    },
    data() {
        return {
            config: this.$TWVue.Dropdown,
            isOpen: false,
            popper: null,
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
                'twvue-dropdown',
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
                this.$root.$emit('tw-dropdown-shown', this);
            }
        },
    },
    created() {
        this.$root.$on('tw-dropdown-shown', this.rootCloseListener);
    },
    mounted() {
        this.$nextTick(() => {
            this.initPopper();
        })

        if (typeof document !== 'undefined') {
            document.addEventListener('click', this.clickOutListener);
        }
    },
    beforeDestroy() {
        this.close();

        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.clickOutListener);
        }
    },
    destroyed() {
        if (typeof this.popper.destroy === 'function') {
            this.popper.destroy();
        }
    },
    methods: {
        rootCloseListener(vm) {
            if (vm !== this) {
                this.close();
            }
        },
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
            const button = this.$refs.component;
            const dropdown = this.$refs.dropdown;

            this.popper = createPopper(button, dropdown, {
                placement: this.placement,
            });
        },
    },
};
</script>

<style>
.twvue-dropdown {
    pointer-events: none;
    visibility: hidden;
}

.twvue-dropdown[data-show] {
    pointer-events: auto;
    visibility: visible;
}
</style>
