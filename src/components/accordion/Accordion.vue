<template>
    <div :class="rootClass">
        <div @click="checkClickToToggleContent()" :class="[headerClass, tittleClass]">
            <slot name="tittle"/>
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="iconClass">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        <div :class="[contentClass, toggleContentClass]">
            <slot name="content" :selected="selected"/>
        </div>
    </div>
</template>

<script>
import FixedMixin from "../../utils/FixedMixin";
import VariantMixin from "../../utils/VariantMixin";
import SizeMixin from "../../utils/SizeMixin";
    export default {
        data() {
            return {
                config: this.$TWVue.Accordion,
                selected: false,
            }
        },
        mixins: [FixedMixin, VariantMixin, SizeMixin],
        methods: {
          checkClickToToggleContent(){
            this.selected = (this.selected == true)? false : true
          }  
        },
        computed:{
            rootClass(){
                return [this.fixedClass.root, this.variantClass.root, this.sizeClass.root]
            },
            headerClass(){
                return[this.fixedClass.header, this.variantClass.header]
            },
            tittleClass(){
                return [this.fixedClass.tittle, this.variantClass.tittle]
            },
            iconClass(){
                return [this.fixedClass.icon, this.variantClass.icon]
            },
            contentClass(){
                return [this.fixedClass.content.fixed]
            },
            toggleContentClass(){
                return  {[this.fixedClass.content.actived]: this.selected == true, [this.fixedClass.content.noActived]: this.selected == false}
            },

        },
    }
</script>
