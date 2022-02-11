<template>
    <div :class="rootClass">
        <TWCardHeader v-if="title || $slots.header">
            <slot name="header"/>

            <template #action>
                <slot name="header-action" />
            </template>
        </TWCardHeader>

        <Component :is="computedBodyTag">
            <slot />
        </Component>

        <TWCardFooter v-if="$slots.footer">
            <slot name="footer" />
        </TWCardFooter>
    </div>
</template>

<script>
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import TWCardHeader from '../card/CardHeader';
import TWCardBody from '../card/CardBody';
import TWCardFooter from './CardFooter';

export default {
    name: 'TWCard',
    mixins: [FixedMixin, VariantMixin],
    props: {
        title: String,
        titleTag: {
            type: String,
            default: 'h3',
        },
        noBody: Boolean,
    },
    provide() {
        return {
            TWCard: this,
        };
    },
    components: {
        TWCardHeader,
        TWCardBody,
        TWCardFooter,
    },
    data() {
        return {
            config: this.$TWVue.Card,
        };
    },
    computed: {
        rootClass() {
            return [
                this.fixedClass.root,
                this.variantClass.root,
            ];
        },
        headerClass() {
            return [
                this.fixedClass.header,
                this.variantClass.header,
            ];
        },
        headerTitleClass() {
            return [
                this.fixedClass.headerTitle,
                this.variantClass.headerTitle,
            ];
        },
        footerClass() {
            return [
                this.fixedClass.footer,
                this.variantClass.footer,
            ];
        },
        computedBodyTag() {
            return this.noBody ? 'div' : 'TWCardBody';
        },
    },
};
</script>
