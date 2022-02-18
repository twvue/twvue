<template>
    <label :class="rootClass">
        <input
            type="file"
            class="absolute opacity-0"
            :multiple="multiple"
            @change="onChange"
        >

        <span :class="textClass">{{ fileName || placeholder }}</span>

        <span :class="btnClass">
            {{ btnText }}
        </span>
    </label>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';

export default {
    name: 'TWFormFile',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    inheritAttrs: false,
    props: {
        multiple: Boolean,
        placeholder: {
            type: String,
            default: 'Choose a file...'
        },
        btnText: {
            type: String,
            default: 'Browse',
        },
    },
    data() {
        return {
            fileName: null,
            config: this.$TWVue.FormFile,
        };
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
                this.sizeClass.root,
            ];
        },
        textClass() {
            return [
                this.fixedClass.text,
                this.variantClass.text,
                this.sizeClass.text,
            ];
        },
        btnClass() {
            return [
                this.fixedClass.btn,
                this.variantClass.btn,
                this.sizeClass.btn,
            ];
        },
    },

    methods: {
        onChange($evt) {
            const files = $evt.target.files;
            if (files.length > 1) {
                this.fileName = `${files.length} files`;
            } else if (files.length === 1) {
                this.fileName = files[0].name;
            }

            this.$emit('input', $evt.target.files);
        },
    },
};
</script>
