import { defineComponent } from 'vue';
import { redirectToDiscord } from '@/services/authService';
export default defineComponent({
    name: 'LoginWithDiscord',
    methods: {
        loginWithDiscord() {
            redirectToDiscord();
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['discord-login-button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.loginWithDiscord) }, ...{ class: ("discord-login-button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ height: ("10px"), width: ("10px"), src: ("@/assets/discord-logo.svg"), alt: ("Discord Logo"), ...{ class: ("discord-logo") }, });
    __VLS_styleScopedClasses['discord-login-button'];
    __VLS_styleScopedClasses['discord-logo'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
