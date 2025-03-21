/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
export default (await import('vue')).defineComponent({
    data() {
        return {
            navItems: [
                { text: 'Home' },
                { text: 'Search' },
                { text: 'Profile' },
                { text: 'Settings' }
            ]
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bottom-navbar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://ffxivcollect.com/spells"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/xivapi/NetStone"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://github.com/Joeaculberson/BlueMageParty"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ width: ("15px"), src: ("@/assets/github-logo.png"), alt: ("Github Logo"), ...{ class: ("github-logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://buymeacoffee.com/joeaculberh"), target: ("_blank"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ width: ("15px"), src: ("@/assets/buymeacoffee-logo.svg"), alt: ("Buy Me a Coffee Logo"), ...{ class: ("coffee-logo") }, });
    __VLS_styleScopedClasses['bottom-navbar'];
    __VLS_styleScopedClasses['github-logo'];
    __VLS_styleScopedClasses['coffee-logo'];
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
