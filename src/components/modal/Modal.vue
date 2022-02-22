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
                <div class="absolute flex items-center justify-center inset-0 overflow-hidden">
                    <div
                        v-if="!noBackdrop"
                        :class="backdropClass"
                        @click="onBackdropClick()"
                    />

                    <div :class="panelWrapperClass">
                        <div
                            v-if="!hideHeader"
                            :class="headerClass"
                        >
                            <slot name="header">
                                <slot name="header-title">
                                    <Component
                                        :is="titleTag"
                                        :class="titleClass"
                                    >
                                        {{ title }}
                                    </Component>
                                </slot>

                                <div
                                    v-if="!hideHeaderClose"
                                    class="-mr-2"
                                >
                                    <TWButtonClose
                                        size="sm"
                                        :class="buttonCloseClass"
                                        @click="close()"
                                    />
                                </div>
                            </slot>
                        </div>

                        <div :class="bodyClass">
                            <slot />
                        </div>

                        <div
                            v-if="!hideFooter"
                            :class="footerClass"
                        >
                            <TWButton
                                v-if="!hideBtnCancel"
                                :variant="btnCancelVariant"
                                @click="onCancelClick()"
                            >
                                {{ btnCancelText }}
                            </TWButton>

                            <TWButton
                                v-if="!hideBtnOk"
                                :variant="btnOkVariant"
                                @click="onOkClick()"
                            >
                                {{ btnOkText }}
                            </TWButton>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </MountingPortal>
</template>

<script>
import { MountingPortal } from 'portal-vue';
import FixedMixin from '../../utils/FixedMixin';
import SizeMixin from '../../utils/SizeMixin';
import TWButton from '../button/Button';
import TWButtonClose from '../button-close/ButtonClose';
import { gsap } from 'gsap';

export default {
    name: 'TWModal',
    mixins: [FixedMixin, SizeMixin],
    props: {
        value: Boolean,
        size: String,
        title: String,
        titleTag: {
            type: String,
            default: 'h5',
        },
        hideHeader: Boolean,
        hideHeaderClose: Boolean,
        hideFooter: Boolean,
        noCloseOnBackdrop: Boolean,
        noCloseOnEsc: Boolean,
        btnCancelVariant: {
            type: String,
            default: 'danger',
        },
        noAnimation: Boolean,
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
        noBackdrop: Boolean,
    },
    components: {
        MountingPortal,
        TWButtonClose,
        TWButton,
    },
    data() {
        return {
            config: this.$TWVue.Modal,
            isOpen: this.value,
        };
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
                'panel fixed',
                this.fixedClass.panel,
                this.sizeClass.panel,
            ];
        },
        titleClass() {
            return [
                this.fixedClass.title,
            ];
        },
        headerClass() {
            return [
                this.fixedClass.header,
            ];
        },
        bodyClass() {
            return [
                this.fixedClass.body,
            ];
        },
        footerClass() {
            return [
                this.fixedClass.footer,
            ];
        },
        buttonCloseClass() {
            return [
                this.fixedClass.btnClose,
            ];
        },
    },
    watch: {
        value(vl) {
            this.isOpen = vl;
        },
        isOpen() {
            this.handleScroll();
        },
    },
    created() {
        window.addEventListener('keydown', this.onEsc);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.onEsc);
    },
    mounted() {
        this.isOpen = this.value
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

            gsap.fromTo(this.panel, { scale: 1 }, { repeat: 1, duration: 0.1, scale: 1.02, yoyo: true })
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
        close() {
            this.$emit('input', false);
            this.$emit('close');
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

            gsap.set(this.panel, { opacity: 0, y: '-20px' });
        },
        enter(el, done) {
            if (this.noAnimation) {
                done();
                return;
            }

            if (!this.noBackdrop) {
                gsap.to(this.backdrop, { opacity: 1, duration: 0.5, ease: 'power3.inOut' })
            }
            gsap.to(this.panel, { opacity: 1, y: '0px', ease: 'power3.inOut', duration: 0.5, onComplete: done, })
        },
        leave(el, done) {
            if (this.noAnimation) {
                done();
                return;
            }


            if (!this.noBackdrop) {
                gsap.to(this.backdrop, { opacity: 0, duration: 0.5, ease: 'power3.inOut' })
            }
            gsap.to(this.panel, { opacity: 0, y: '-20px', ease: 'power3.inOut', duration: 0.5, onComplete: done, })
        },
        afterLeave() {
            this.$emit('after-leave');
        },
    },
};
</script>
