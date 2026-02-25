/// <reference types="../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, computed, defineComponent } from 'vue'; // Added defineComponent and computed
import { useRouter } from 'vue-router'; // Added useRouter
import Navbar from './components/Navbar.vue';
import BottomBar from './components/BottomBar.vue'; // Ensure this import is correct
import { useAuthStore } from './stores/authStore';
export default defineComponent({
    name: 'App',
    components: {
        Navbar,
        BottomBar, // Ensure BottomBar is registered
    },
    setup() {
        const drawer = ref(false); // Made drawer reactive with ref
        const router = useRouter(); // Added router for navigation
        const authStore = useAuthStore();
        // Use computed to reactively check if the user is an admin
        const isAdmin = computed(() => authStore.getIsAdmin());
        const goToSpellManager = () => {
            router.push('/spellmanager');
        };
        const goToPartyManager = () => {
            router.push('/partymanager');
        };
        const goToAdmin = () => {
            router.push('/admin');
        };
        return {
            drawer,
            isAdmin,
            goToSpellManager,
            goToPartyManager,
            goToAdmin,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Navbar,
            BottomBar, // Ensure BottomBar is registered
        },
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VApp;
    /** @type { [typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.Navbar;
    /** @type { [typeof __VLS_components.Navbar, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ 'onToggleDrawer': {} }, }));
    const __VLS_9 = __VLS_8({ ...{ 'onToggleDrawer': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_13;
    const __VLS_14 = {
        onToggleDrawer: (...[$event]) => {
            __VLS_ctx.drawer = !__VLS_ctx.drawer;
        }
    };
    let __VLS_10;
    let __VLS_11;
    var __VLS_12;
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.VNavigationDrawer;
    /** @type { [typeof __VLS_components.VNavigationDrawer, typeof __VLS_components.vNavigationDrawer, typeof __VLS_components.VNavigationDrawer, typeof __VLS_components.vNavigationDrawer, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ app: (true), modelValue: ((__VLS_ctx.drawer)), temporary: (true), }));
    const __VLS_17 = __VLS_16({ app: (true), modelValue: ((__VLS_ctx.drawer)), temporary: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.VList;
    /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ dense: (true), }));
    const __VLS_23 = __VLS_22({ dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ ...{ 'onClick': {} }, link: (true), }));
    const __VLS_29 = __VLS_28({ ...{ 'onClick': {} }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    let __VLS_33;
    const __VLS_34 = {
        onClick: (__VLS_ctx.goToSpellManager)
    };
    let __VLS_30;
    let __VLS_31;
    const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
    /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ color: ("blue"), small: (true), }));
    const __VLS_43 = __VLS_42({ color: ("blue"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    __VLS_nonNullable(__VLS_46.slots).default;
    var __VLS_46;
    __VLS_nonNullable(__VLS_40.slots).default;
    var __VLS_40;
    __VLS_nonNullable(__VLS_32.slots).default;
    var __VLS_32;
    const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ ...{ 'onClick': {} }, link: (true), }));
    const __VLS_49 = __VLS_48({ ...{ 'onClick': {} }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    let __VLS_53;
    const __VLS_54 = {
        onClick: (__VLS_ctx.goToPartyManager)
    };
    let __VLS_50;
    let __VLS_51;
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
    /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({}));
    const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ color: ("blue"), small: (true), }));
    const __VLS_63 = __VLS_62({ color: ("blue"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    __VLS_nonNullable(__VLS_66.slots).default;
    var __VLS_66;
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    __VLS_nonNullable(__VLS_52.slots).default;
    var __VLS_52;
    if (__VLS_ctx.isAdmin) {
        const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
        /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
        // @ts-ignore
        const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{ 'onClick': {} }, link: (true), }));
        const __VLS_69 = __VLS_68({ ...{ 'onClick': {} }, link: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
        let __VLS_73;
        const __VLS_74 = {
            onClick: (__VLS_ctx.goToAdmin)
        };
        let __VLS_70;
        let __VLS_71;
        const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
        /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
        // @ts-ignore
        const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({}));
        const __VLS_77 = __VLS_76({}, ...__VLS_functionalComponentArgsRest(__VLS_76));
        const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
        /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
        // @ts-ignore
        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ color: ("blue"), small: (true), }));
        const __VLS_83 = __VLS_82({ color: ("blue"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
        __VLS_nonNullable(__VLS_86.slots).default;
        var __VLS_86;
        __VLS_nonNullable(__VLS_80.slots).default;
        var __VLS_80;
        __VLS_nonNullable(__VLS_72.slots).default;
        var __VLS_72;
    }
    __VLS_nonNullable(__VLS_26.slots).default;
    var __VLS_26;
    __VLS_nonNullable(__VLS_20.slots).default;
    var __VLS_20;
    const __VLS_87 = __VLS_resolvedLocalAndGlobalComponents.VMain;
    /** @type { [typeof __VLS_components.VMain, typeof __VLS_components.vMain, typeof __VLS_components.VMain, typeof __VLS_components.vMain, ] } */
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{ class: ("fill-height") }, }));
    const __VLS_89 = __VLS_88({ ...{ class: ("fill-height") }, }, ...__VLS_functionalComponentArgsRest(__VLS_88));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-content") }, });
    const __VLS_93 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({}));
    const __VLS_95 = __VLS_94({}, ...__VLS_functionalComponentArgsRest(__VLS_94));
    const __VLS_99 = __VLS_resolvedLocalAndGlobalComponents.BottomBar;
    /** @type { [typeof __VLS_components.BottomBar, ] } */
    // @ts-ignore
    const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ ...{ class: ("bottom-bar") }, }));
    const __VLS_101 = __VLS_100({ ...{ class: ("bottom-bar") }, }, ...__VLS_functionalComponentArgsRest(__VLS_100));
    __VLS_nonNullable(__VLS_92.slots).default;
    var __VLS_92;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['fill-height'];
    __VLS_styleScopedClasses['main-content'];
    __VLS_styleScopedClasses['bottom-bar'];
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
