import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import gsap from 'gsap';
export default (await import('vue')).defineComponent({
    name: 'Home',
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();
        // Redirect to Dashboard if logged in
        onMounted(() => {
            if (authStore.isAuthenticated) {
                router.push('/character/search');
            }
            // GSAP Animations
            gsap.from('.animated-title', {
                duration: 1.5,
                y: -50,
                opacity: 0,
                ease: 'power3.out',
            });
            gsap.from('.animated-subtitle', {
                duration: 1.5,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                delay: 0.5,
            });
            gsap.from('.features-section', {
                duration: 1.5,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                delay: 1.5,
            });
        });
        const navigateToDashboard = () => {
            router.push('/character/search');
        };
        return {
            navigateToDashboard,
        };
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ fluid: (true), ...{ class: ("home-page") }, }));
    const __VLS_2 = __VLS_1({ fluid: (true), ...{ class: ("home-page") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("background-animation") }, });
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ justify: ("center"), align: ("center"), ...{ class: ("main-content") }, }));
    const __VLS_9 = __VLS_8({ justify: ("center"), align: ("center"), ...{ class: ("main-content") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ cols: ("12"), md: ("8"), ...{ class: ("text-center") }, }));
    const __VLS_15 = __VLS_14({ cols: ("12"), md: ("8"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("display-3 font-weight-bold mb-4 animated-title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("headline mb-4 animated-subtitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ width: ("450px"), src: ("@/assets/seifer-blue-mage.png"), alt: ("Blue Mage"), });
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ class: ("features-section") }, }));
    const __VLS_21 = __VLS_20({ ...{ class: ("features-section") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ cols: ("12"), md: ("4"), ...{ class: ("text-center") }, }));
    const __VLS_27 = __VLS_26({ cols: ("12"), md: ("4"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ color: ("#2064c4"), size: ("64"), ...{ class: ("mb-4") }, }));
    const __VLS_33 = __VLS_32({ color: ("#2064c4"), size: ("64"), ...{ class: ("mb-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("body-1") }, });
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ cols: ("12"), md: ("4"), ...{ class: ("text-center") }, }));
    const __VLS_39 = __VLS_38({ cols: ("12"), md: ("4"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ color: ("#2064c4"), size: ("64"), ...{ class: ("mb-4") }, }));
    const __VLS_45 = __VLS_44({ color: ("#2064c4"), size: ("64"), ...{ class: ("mb-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    __VLS_nonNullable(__VLS_48.slots).default;
    var __VLS_48;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("body-1") }, });
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ cols: ("12"), md: ("4"), ...{ class: ("text-center") }, }));
    const __VLS_51 = __VLS_50({ cols: ("12"), md: ("4"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ color: ("#2064c4"), size: ("64"), ...{ class: ("mb-4") }, }));
    const __VLS_57 = __VLS_56({ color: ("#2064c4"), size: ("64"), ...{ class: ("mb-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("body-1") }, });
    __VLS_nonNullable(__VLS_54.slots).default;
    var __VLS_54;
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['home-page'];
    __VLS_styleScopedClasses['background-animation'];
    __VLS_styleScopedClasses['main-content'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['display-3'];
    __VLS_styleScopedClasses['font-weight-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['animated-title'];
    __VLS_styleScopedClasses['headline'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['animated-subtitle'];
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['features-section'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['body-1'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['body-1'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['body-1'];
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
