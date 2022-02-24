<template>
    <label
        v-bind="$attrs"
        :class="rootClass"
    >
         <span :class="handlerClass">
           <svg
               v-if="localValue"
               viewBox="0 0 20 20"
               fill="currentColor"
           >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
           </svg>
         </span>

        <span
            v-if="label"
            :class="labelClass"
        >
            {{ label }}
        </span>

        <input
            type="checkbox"
            class="absolute opacity-0"
            :checked="localValue"
            :disabled="disabled"
            @click="onClick"
        >
    </label>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';
export default {
    name: 'TWFormCheckbox',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    inheritAttrs: false,
    props: {
        value: [Boolean, Number],
        disabled: [Boolean],
        label: String,
    },
    data() {
        return {
            config: this.$TWVue.FormCheckbox,
            localValue: this.value,
        };
    },
    computed: {
        rootClass() {
            return [
                'relative',
                this.fixedClass.root,
            ];
        },
        handlerClass() {
            return [
                'z-10',
                this.fixedClass.handler,
                this.getHandlerVariantClass,
                this.sizeClass.handler,
            ];
        },
        getHandlerVariantClass() {
            if (this.disabled) {
                return this.variantClass.handler.disabled;
            }

            if (this.isChecked) {
                return this.variantClass.handler.checked
            }

            return this.variantClass.handler.unchecked;
        },
        labelClass() {
            return [
                this.fixedClass.label,
                this.getLabelVariantClass,
                this.sizeClass.label,
            ]
        },
        getLabelVariantClass() {
            if (this.disabled) {
                return this.variantClass.label.disabled;
            }

            if (this.isChecked) {
                return this.variantClass.label.checked
            }

            return this.variantClass.label.unchecked;
        },
        isChecked() {
            return !!this.localValue;
        },
    },
    watch: {
        value(newValue) {
            this.localValue = newValue;
        },
    },
    methods: {
        onClick() {
            this.localValue = !this.localValue;
            this.$emit('input', this.localValue);
        },
    },
};
</script>
