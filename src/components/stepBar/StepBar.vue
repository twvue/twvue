<template>
    <div :class="rootClass">
        <div :class="containerBarClass">
            <div :class="progressClass" :style="`width: ${getWidthProgress}%`"></div>
            <div v-for="(step, index) in steps" :key="index" :class="[step.completed ? stepContainerClass : noStepClass]">
                <span>{{index +1}}</span>
            </div>
        </div>
        <div :class="stepNameClass">
            <span v-for="(step, index) in steps" :key="index">{{step.name}}</span>
        </div>
    </div>
</template>

<script>
import FixedMixin from "../../utils/FixedMixin";
import VariantMixin from "../../utils/VariantMixin";
import SizeMixin from "../../utils/SizeMixin";
export default {
    name: 'StepBar',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    data(){
        return{
            config: this.$TWVue.Stepbar,
        }
    },
    props:{
        steps:{
            type: Array,
            require: true
        }
    },
    computed:{
        getWidthProgress(){
            let calc = 100 / (this.steps.length -1 )
            let progress = this.steps.findIndex(step=> step.completed == false)
            return (progress < 0) ? 100 : calc * (progress -1)
        },
        rootClass(){
            return [this.fixedClass.root];
        },
        containerBarClass(){
            return [this.fixedClass.containerBar, this.sizeClass.bar];
        },
        progressClass(){
            return [this.fixedClass.progress, this.variantClass.root]
        },
        stepContainerClass(){
            return ['text-white',this.fixedClass.containerStep, this.sizeClass.step, this.variantClass.root ]
        },
        noStepClass(){
            return ['bg-gray-100 text-gray-900', this.fixedClass.containerStep, this.sizeClass.step]
        },
        stepNameClass(){
            return [this.fixedClass.containerName]
        }
    }
}
</script>

