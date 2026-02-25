/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, computed, defineComponent, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { useCharacterStore } from "@/stores/characterStore";
import LoginWithDiscord from '@/components/LoginWithDiscord.vue';
export default defineComponent({
    name: "Navbar",
    components: {
        LoginWithDiscord
    },
    setup(props, { emit }) {
        const router = useRouter();
        const route = useRoute();
        const authStore = useAuthStore();
        const characterStore = useCharacterStore();
        const isAuthenticated = computed(() => authStore.isAuthenticated);
        const isOnLoginPage = computed(() => route.path === "/login");
        const isOnRegisterPage = computed(() => route.path === "/register");
        const verifiedCharacters = ref(characterStore.getVerifiedCharacters());
        // Watch for changes in the character store and update the local verifiedCharacters
        watch(() => characterStore.getVerifiedCharacters(), (newCharacters) => {
            verifiedCharacters.value = newCharacters;
        }, { immediate: true, deep: true });
        const goToLogin = () => router.push("/login");
        const goToRegisterPage = () => router.push("/register");
        const goToCharacterSearch = () => router.push("/character/search");
        const toggleDrawer = () => {
            if (isAuthenticated.value)
                emit("toggle-drawer");
        };
        const logout = () => {
            authStore.clearEmail();
            characterStore.clearVerifiedCharacters();
            authStore.logout();
            router.push("/login");
        };
        const setAsActiveCharacter = (character) => {
            characterStore.setAsActiveCharacter(character);
        };
        const removeCharacter = (character) => {
            characterStore.removeVerifiedCharacter(character);
        };
        const goToCharacterDetails = (character) => {
            router.push(`/character/${character.loadstoneCharacterId}`);
        };
        const clearSelection = () => {
            characterStore.clearVerifiedCharacters();
            characterStore.clearSelectedCharacter();
        };
        onMounted(() => {
            if (characterStore.getVerifiedCharacters().length === 0 ||
                Object.keys(characterStore.getVerifiedCharacters())) {
                characterStore.syncVerifiedCharacters();
            }
        });
        return {
            isAuthenticated,
            goToLogin,
            goToRegisterPage,
            logout,
            toggleDrawer,
            goToCharacterSearch,
            isOnLoginPage,
            isOnRegisterPage,
            verifiedCharacters,
            clearSelection,
            setAsActiveCharacter,
            removeCharacter,
            goToCharacterDetails,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            LoginWithDiscord
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
    __VLS_styleScopedClasses['v-list-item'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VAppBar;
    /** @type { [typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ app: (true), color: ("primary"), dark: (true), }));
    const __VLS_2 = __VLS_1({ app: (true), color: ("primary"), dark: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VAppBarNavIcon;
    /** @type { [typeof __VLS_components.VAppBarNavIcon, typeof __VLS_components.vAppBarNavIcon, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ 'onClick': {} }, }));
    const __VLS_9 = __VLS_8({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    let __VLS_13;
    const __VLS_14 = {
        onClick: (__VLS_ctx.toggleDrawer)
    };
    let __VLS_10;
    let __VLS_11;
    var __VLS_12;
    const __VLS_15 = __VLS_resolvedLocalAndGlobalComponents.VToolbarTitle;
    /** @type { [typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, ] } */
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({}));
    const __VLS_17 = __VLS_16({}, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_nonNullable(__VLS_20.slots).default;
    var __VLS_20;
    const __VLS_21 = __VLS_resolvedLocalAndGlobalComponents.VSpacer;
    /** @type { [typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ] } */
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
    const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
    if (__VLS_ctx.isAuthenticated) {
        if (__VLS_ctx.verifiedCharacters.length > 0) {
            const __VLS_27 = __VLS_resolvedLocalAndGlobalComponents.VMenu;
            /** @type { [typeof __VLS_components.VMenu, typeof __VLS_components.vMenu, typeof __VLS_components.VMenu, typeof __VLS_components.vMenu, ] } */
            // @ts-ignore
            const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({ offsetY: (true), }));
            const __VLS_29 = __VLS_28({ offsetY: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { activator: __VLS_thisSlot } = __VLS_nonNullable(__VLS_32.slots);
                const [{ props }] = __VLS_getSlotParams(__VLS_thisSlot);
                const __VLS_33 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
                /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
                // @ts-ignore
                const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({ ...(props), }));
                const __VLS_35 = __VLS_34({ ...(props), }, ...__VLS_functionalComponentArgsRest(__VLS_34));
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.verifiedCharacters[0].avatar)), alt: ("avatar"), ...{ class: ("character-avatar") }, });
                (__VLS_ctx.verifiedCharacters[0].firstName);
                (__VLS_ctx.verifiedCharacters[0].lastName);
                const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                // @ts-ignore
                const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ right: (true), }));
                const __VLS_41 = __VLS_40({ right: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
                __VLS_nonNullable(__VLS_44.slots).default;
                var __VLS_44;
                __VLS_nonNullable(__VLS_38.slots).default;
                var __VLS_38;
            }
            const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.VList;
            /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
            // @ts-ignore
            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
            const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
            if (__VLS_ctx.verifiedCharacters.length > 0) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                for (const [character] of __VLS_getVForSourceType((__VLS_ctx.verifiedCharacters))) {
                    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
                    /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
                    // @ts-ignore
                    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onClick': {} }, key: ((character.id)), }));
                    const __VLS_53 = __VLS_52({ ...{ 'onClick': {} }, key: ((character.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
                    let __VLS_57;
                    const __VLS_58 = {
                        onClick: (...[$event]) => {
                            if (!((__VLS_ctx.isAuthenticated)))
                                return;
                            if (!((__VLS_ctx.verifiedCharacters.length > 0)))
                                return;
                            if (!((__VLS_ctx.verifiedCharacters.length > 0)))
                                return;
                            __VLS_ctx.setAsActiveCharacter(character);
                        }
                    };
                    let __VLS_54;
                    let __VLS_55;
                    const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
                    /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
                    // @ts-ignore
                    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({}));
                    const __VLS_61 = __VLS_60({}, ...__VLS_functionalComponentArgsRest(__VLS_60));
                    const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.VRow;
                    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
                    // @ts-ignore
                    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ align: ("center"), justify: ("space-between"), }));
                    const __VLS_67 = __VLS_66({ align: ("center"), justify: ("space-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
                    const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.VCol;
                    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
                    // @ts-ignore
                    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ cols: ("auto"), }));
                    const __VLS_73 = __VLS_72({ cols: ("auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
                    const __VLS_77 = __VLS_resolvedLocalAndGlobalComponents.VRow;
                    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
                    // @ts-ignore
                    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ align: ("center"), }));
                    const __VLS_79 = __VLS_78({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((character.avatar)), alt: ("avatar"), ...{ class: ("character-avatar") }, });
                    (character.firstName);
                    (character.lastName);
                    __VLS_nonNullable(__VLS_82.slots).default;
                    var __VLS_82;
                    __VLS_nonNullable(__VLS_76.slots).default;
                    var __VLS_76;
                    const __VLS_83 = __VLS_resolvedLocalAndGlobalComponents.VCol;
                    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
                    // @ts-ignore
                    const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({ cols: ("auto"), }));
                    const __VLS_85 = __VLS_84({ cols: ("auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_84));
                    const __VLS_89 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                    // @ts-ignore
                    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{ 'onClick': {} }, small: (true), }));
                    const __VLS_91 = __VLS_90({ ...{ 'onClick': {} }, small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
                    let __VLS_95;
                    const __VLS_96 = {
                        onClick: (...[$event]) => {
                            if (!((__VLS_ctx.isAuthenticated)))
                                return;
                            if (!((__VLS_ctx.verifiedCharacters.length > 0)))
                                return;
                            if (!((__VLS_ctx.verifiedCharacters.length > 0)))
                                return;
                            __VLS_ctx.goToCharacterDetails(character);
                        }
                    };
                    let __VLS_92;
                    let __VLS_93;
                    __VLS_nonNullable(__VLS_94.slots).default;
                    var __VLS_94;
                    __VLS_nonNullable(__VLS_88.slots).default;
                    var __VLS_88;
                    const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.VCol;
                    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
                    // @ts-ignore
                    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ cols: ("auto"), }));
                    const __VLS_99 = __VLS_98({ cols: ("auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
                    const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                    // @ts-ignore
                    const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ ...{ 'onClick': {} }, color: ("red"), small: (true), }));
                    const __VLS_105 = __VLS_104({ ...{ 'onClick': {} }, color: ("red"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
                    let __VLS_109;
                    const __VLS_110 = {
                        onClick: (...[$event]) => {
                            if (!((__VLS_ctx.isAuthenticated)))
                                return;
                            if (!((__VLS_ctx.verifiedCharacters.length > 0)))
                                return;
                            if (!((__VLS_ctx.verifiedCharacters.length > 0)))
                                return;
                            __VLS_ctx.removeCharacter(character);
                        }
                    };
                    let __VLS_106;
                    let __VLS_107;
                    __VLS_nonNullable(__VLS_108.slots).default;
                    var __VLS_108;
                    __VLS_nonNullable(__VLS_102.slots).default;
                    var __VLS_102;
                    __VLS_nonNullable(__VLS_70.slots).default;
                    var __VLS_70;
                    __VLS_nonNullable(__VLS_64.slots).default;
                    var __VLS_64;
                    __VLS_nonNullable(__VLS_56.slots).default;
                    var __VLS_56;
                }
            }
            const __VLS_111 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
            /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
            // @ts-ignore
            const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{ 'onClick': {} }, }));
            const __VLS_113 = __VLS_112({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_112));
            let __VLS_117;
            const __VLS_118 = {
                onClick: (__VLS_ctx.goToCharacterSearch)
            };
            let __VLS_114;
            let __VLS_115;
            const __VLS_119 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
            /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
            // @ts-ignore
            const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({}));
            const __VLS_121 = __VLS_120({}, ...__VLS_functionalComponentArgsRest(__VLS_120));
            const __VLS_125 = __VLS_resolvedLocalAndGlobalComponents.VRow;
            /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
            // @ts-ignore
            const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ align: ("center"), justify: ("space-between"), }));
            const __VLS_127 = __VLS_126({ align: ("center"), justify: ("space-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            const __VLS_131 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
            /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
            // @ts-ignore
            const __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({ color: ("blue"), small: (true), }));
            const __VLS_133 = __VLS_132({ color: ("blue"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
            __VLS_nonNullable(__VLS_136.slots).default;
            var __VLS_136;
            __VLS_nonNullable(__VLS_130.slots).default;
            var __VLS_130;
            __VLS_nonNullable(__VLS_124.slots).default;
            var __VLS_124;
            __VLS_nonNullable(__VLS_116.slots).default;
            var __VLS_116;
            __VLS_nonNullable(__VLS_50.slots).default;
            var __VLS_50;
            var __VLS_32;
        }
        else {
            const __VLS_137 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
            /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
            // @ts-ignore
            const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({ ...{ 'onClick': {} }, }));
            const __VLS_139 = __VLS_138({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_138));
            let __VLS_143;
            const __VLS_144 = {
                onClick: (__VLS_ctx.goToCharacterSearch)
            };
            let __VLS_140;
            let __VLS_141;
            __VLS_nonNullable(__VLS_142.slots).default;
            var __VLS_142;
        }
    }
    if (__VLS_ctx.isAuthenticated) {
        const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
        // @ts-ignore
        const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ ...{ 'onClick': {} }, }));
        const __VLS_147 = __VLS_146({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_146));
        let __VLS_151;
        const __VLS_152 = {
            onClick: (__VLS_ctx.logout)
        };
        let __VLS_148;
        let __VLS_149;
        __VLS_nonNullable(__VLS_150.slots).default;
        var __VLS_150;
    }
    if (!__VLS_ctx.isAuthenticated && __VLS_ctx.isOnLoginPage) {
        const __VLS_153 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
        // @ts-ignore
        const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ ...{ 'onClick': {} }, }));
        const __VLS_155 = __VLS_154({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_154));
        let __VLS_159;
        const __VLS_160 = {
            onClick: (__VLS_ctx.goToRegisterPage)
        };
        let __VLS_156;
        let __VLS_157;
        __VLS_nonNullable(__VLS_158.slots).default;
        var __VLS_158;
    }
    if (!__VLS_ctx.isAuthenticated && !__VLS_ctx.isOnLoginPage) {
        const __VLS_161 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
        /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
        // @ts-ignore
        const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({ ...{ 'onClick': {} }, }));
        const __VLS_163 = __VLS_162({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_162));
        let __VLS_167;
        const __VLS_168 = {
            onClick: (__VLS_ctx.goToLogin)
        };
        let __VLS_164;
        let __VLS_165;
        __VLS_nonNullable(__VLS_166.slots).default;
        var __VLS_166;
    }
    if (!__VLS_ctx.isAuthenticated) {
        const __VLS_169 = __VLS_resolvedLocalAndGlobalComponents.LoginWithDiscord;
        /** @type { [typeof __VLS_components.LoginWithDiscord, ] } */
        // @ts-ignore
        const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({ ...{ class: ("login-page") }, }));
        const __VLS_171 = __VLS_170({ ...{ class: ("login-page") }, }, ...__VLS_functionalComponentArgsRest(__VLS_170));
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['character-avatar'];
    __VLS_styleScopedClasses['character-avatar'];
    __VLS_styleScopedClasses['login-page'];
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
