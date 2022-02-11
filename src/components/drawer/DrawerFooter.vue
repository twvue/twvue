<template>
    <div :class="TWDrawer.footerClass">
        <TWButton
            v-if="!TWDrawer.hideBtnCancel"
            :variant="TWDrawer.btnCancelVariant"
            @click="TWDrawer.onCancelClick()"
        >
            {{ TWDrawer.btnCancelText }}
        </TWButton>

        <TWButton
            v-if="!TWDrawer.hideBtnOk"
            :variant="TWDrawer.btnOkVariant"
            @click="TWDrawer.onOkClick()"
        >
            {{ TWDrawer.btnOkText }}
        </TWButton>
    </div>
</template>

<script>
import TWButton from '../../components/button/Button'

export default {
    name: 'TWDrawerFooter',
    components: {
        TWButton,
    },
    inject: ['TWDrawer'],
};
</script>
