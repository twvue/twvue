<template>
    <MountingPortal
        mount-to="body"
        append
    >
        <Transition
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            @after-leave="afterLeave"
        >
            <div
                v-if="isOpen"
                class="fixed inset-0 overflow-hidden"
            >
                <div class="absolute inset-0 overflow-hidden">
                    <div
                        v-if="!noBackdrop"
                        :class="backdropClass"
                        @click="onBackdropClick"
                    />

                    <div :class="panelWrapperClass">
                        <div :class="panelClass">
                            <slot
                                v-if="!hideHeader && title"
                                name="header"
                            >
                                <TWDrawerHeader />
                            </slot>

                            <div :class="bodyClass">
                                <slot />
                            </div>

                            <slot
                                v-if="!hideFooter"
                                name="footer"
                            >
                                <TWDrawerFooter />
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </MountingPortal>
</template>

<script>
import { MountingPortal } from 'portal-vue';
import { gsap } from 'gsap';
import FixedMixin from '../../utils/FixedMixin';
import VariantMixin from '../../utils/VariantMixin';
import SizeMixin from '../../utils/SizeMixin';
import TWDrawerHeader from './DrawerHeader';
import TWDrawerFooter from './DrawerFooter';

export default {
    name: 'TWDrawer',
    mixins: [FixedMixin, VariantMixin, SizeMixin],
    provide() {
        return {
            TWDrawer: this,
        };
    },
    props: {
        value: Boolean,
        title: String,
        titleTag: {
            type: String,
            default: 'h5',
        },
        description: String,
        direction: {
            type: String,
            default: 'right',
            validator(value) {
                return ['right', 'left'].includes(value);
            },
        },
        noAnimation: Boolean,
        hideHeader: Boolean,
        hideFooter: Boolean,
        noCloseOnBackdrop: Boolean,
        noCloseOnEsc: Boolean,
        noBackdrop: Boolean,
        btnCancelVariant: {
            type: String,
            default: 'secondary',
        },
        hideBtnCancel: Boolean,
        btnCancelText: {
            type: String,
            default: 'Cancel',
        },
        btnOkVariant: {
            type: String,
            default: 'primary',
        },
        hideBtnOk: Boolean,
        btnOkText: {
            type: String,
            default: 'OK',
        },
    },
    components: {
        MountingPortal,
        TWDrawerHeader,
        TWDrawerFooter,
    },
    created() {
        window.addEventListener('keydown', this.onEsc);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.onEsc);
    },
    data() {
        return {
            config: this.$TWVue.Drawer,
            isOpen: this.value,
            backdrop: null,
            panel: null,
        }
    },
    watch: {
        value(vl) {
            this.isOpen = vl;
        },
        isOpen() {
            this.handleScroll();
        },
    },
    computed: {
        backdropClass() {
            return [
                'backdrop absolute inset-0',
                this.fixedClass.backdrop,
            ];
        },
        panelWrapperClass() {
            return [
                'panel flex fixed inset-y-0',
                this.getDirectionClass,
            ];
        },
        panelClass() {
            return [
                'h-full',
                this.fixedClass.panel,
                this.sizeClass.panel,
            ];
        },
        headerClass() {
            return [
                this.fixedClass.header,
                this.variantClass.header,
            ];
        },
        titleClass() {
            return [
                this.fixedClass.title,
                this.variantClass.title,
            ];
        },
        descriptionWrapperClass() {
            return [
                this.fixedClass.descriptionWrapper,
                this.variantClass.descriptionWrapper,
            ];
        },
        descriptionClass() {
            return [
                this.fixedClass.description,
                this.variantClass.description,
            ];
        },
        btnCloseClass() {
            return [
                this.fixedClass.btnClose,
                this.variantClass.btnClose,
            ];
        },
        bodyClass() {
            return [
                this.fixedClass.body,
                this.variantClass.body,
            ];
        },
        getDirectionClass() {
            return this.direction === 'right' ? 'right-0' : 'left-0';
        },
        footerClass() {
            return [
                this.fixedClass.footer,
                this.variantClass.footer,
            ];
        },
        isRight() {
            return  this.direction === 'right';
        },
        initialXPosition() {
            return  `${!this.isRight ? '-' : ''}100%`;
        }
    },
    methods: {
        handleScroll() {
            if (typeof window === 'undefined') return

            const body = document.body;
            if (this.isOpen) {
                body.classList.add('overflow-hidden');
            } else {
                body.classList.remove('overflow-hidden');
            }
        },

        noCloseEffect() {
            if (this.noAnimation) {
                return;
            }

            gsap.fromTo(this.panel, { scale: 1 }, { repeat: 1, duration: 0.2, scale: 1.02, yoyo: true })
        },
        onBackdropClick() {
            if (this.noCloseOnBackdrop) {
                this.noCloseEffect();
                return;
            }

            this.close();
        },
        onCancelClick() {
            this.close();
            this.$emit('cancel');
        },
        onOkClick() {
            this.close();
            this.$emit('ok');
        },
        onEsc(evt) {
            if (evt.key === 'Escape') {
                if (this.noCloseOnEsc) {
                    this.noCloseEffect();
                    return

                }

                this.close();
            }
        },
        close() {
            this.$emit('input', false);
            this.$emit('close');
        },
        beforeEnter(el) {
            this.$emit('before-enter');

            this.backdrop = el.querySelector('.backdrop');
            this.panel = el.querySelector('.panel');

            if (this.noAnimation) {
                return;
            }

            if (!this.noBackdrop) {
                gsap.set(this.backdrop, { opacity: 0 })
            }

            gsap.set(this.panel, { opacity: 0, x: this.initialXPosition })
        },
        enter(el, done) {
            if (this.noAnimation) {
                done();
                return;
            }

            if (!this.noBackdrop) {
                gsap.to(this.backdrop, { opacity: 1, ease: 'power3.inOut' })
            }
            gsap.to(this.panel, { opacity: 1, x: '0px', ease: 'power3.inOut', duration: 1, onComplete: done, })
        },
        leave(el, done) {
            if (this.noAnimation) {
                done();
                return;
            }

            if (!this.noBackdrop) {
                gsap.to(this.backdrop, { opacity: 0, ease: 'power3.inOut' })
            }
            gsap.to(this.panel, { opacity: 0, x: this.initialXPosition, ease: 'power3.inOut', duration: 1, onComplete: done, })
        },
        afterLeave() {
            this.$emit('after-leave');
        },
    },
};
</script>
