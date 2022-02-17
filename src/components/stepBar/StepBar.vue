<template>
    <div :class="rootClass">
        <div :class="barClass">
            <div
                :class="progressClass"
                :style="`width: ${getWidthProgress}%`"
            ></div>
            <div
                v-for="(step, index) in steps"
                :key="index"
                :class="getStepOrNoStepClass(step)"
            >
                <span>{{ index + 1 }}</span>
            </div>
        </div>
        <div :class="stepNameClass">
            <span v-for="(step, index) in steps" :key="index">{{
                step.name
            }}</span>
        </div>
    </div>
</template>

<script>
import FixedMixin from "../../utils/FixedMixin";
import VariantMixin from "../../utils/VariantMixin";
import SizeMixin from "../../utils/SizeMixin";
export default {
    name: "StepBar",
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    data() {
        return {
            config: this.$TWVue.Stepbar
        };
    },
    props: {
        steps: {
            type: Array,
            require: true
        }
    },
    computed: {
        getWidthProgress() {
            const calc = 100 / (this.steps.length - 1);
            const progress = this.steps.findIndex(
                step => !step.completed
            );
            return progress < 0 ? 100 : calc * (progress - 1);
        },
        getStepOrNoStepClass() {
            return step => [step.completed ? this.stepClass : this.noStepClass];
        },
        rootClass() {
            return [this.fixedClass.root];
        },
        barClass() {
            return [this.fixedClass.bar, this.sizeClass.bar];
        },
        progressClass() {
            return [this.fixedClass.progress, this.variantClass.progress];
        },
        stepClass() {
            return [
                this.fixedClass.step,
                this.sizeClass.step,
                this.variantClass.step
            ];
        },
        noStepClass() {
            return [
                this.fixedClass.step,
                this.sizeClass.step
            ];
        },
        stepNameClass() {
            return [this.fixedClass.stepName];
        }
    }
};
</script>
