<template>
    <label :class="rootClass">
         <div :class="handlerClass">
           <input 
              type="checkbox" 
              class="opacity-0 absolute" 
              v-model="localValue" 
              :disabled="disabled" 
              @click="onClick"
           >

           <svg
              :class="rootSvgClass" 
              viewBox="0 0 20 20">
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
           </svg>
         </div>

        <div v-if="label" class="select-none">{{ label }}</div>
    </label>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';
export default {
    name: 'TWFormCheckbox',
    mixins: [FixedMixin, VariantMixin, SizeMixin],

    props: {
        label: String,
        labelFor: String,
        value: [Boolean, Number],
        disabled: [Boolean],
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
                this.fixedClass.root,
            ];
        },

        rootSvgClass() {
            return [
                this.fixedClass.svgRoot,
                this.sizeClass.svg,
            ];
        },

        handlerClass() {
            return [
                this.fixedClass.handler,
                this.isChecked ? this.variantClass.handler.enabled : this.variantClass.handler.disabled,
                this.sizeClass.handler,
            ];
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
<style>
  input:checked + svg {
    display: block;
  }
</style>
