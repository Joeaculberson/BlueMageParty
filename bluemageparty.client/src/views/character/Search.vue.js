import { ref, onMounted } from "vue";
import apiClient from '@/apiClient';
import { useRouter } from "vue-router";
import { useCharacterStore } from "@/stores/characterStore";
import { GET_HOME_WORLDS_URL, GET_DATA_CENTERS_URL, SEARCH_CHARACTER_URL } from "@/constants/api";
export default (await import('vue')).defineComponent({
    name: "CharacterSearch",
    setup() {
        const router = useRouter();
        const characterStore = useCharacterStore();
        const name = ref("");
        const characters = ref([]);
        const isLoading = ref(false);
        const isValid = ref(false);
        const message = ref("");
        const alertType = ref("info");
        const selectedDataCenter = ref("All Data Centers");
        const selectedHomeWorld = ref("All Worlds");
        const dataCenters = ref([]); // Explicitly typed as an array
        const homeWorlds = ref([]); // Explicitly typed as an array
        const filteredHomeWorlds = ref([]); // Explicitly typed as an array
        const search = async () => {
            if (!isLoading.value) {
                isLoading.value = true;
                try {
                    const response = await apiClient.post(SEARCH_CHARACTER_URL, {
                        name: name.value,
                        world: selectedHomeWorld.value,
                    });
                    characters.value = Object.keys(response.data).map((id) => ({
                        id: id,
                        name: response.data[id].name,
                        avatar: response.data[id].avatar,
                        server: response.data[id].server,
                        title: response.data[id].title,
                        activeClassJobIcon: response.data[id].activeClassJobIcon,
                        activeClassJobLevel: response.data[id].activeClassJobLevel, //int
                        bio: response.data[id].bio,
                        freeCompandy: response.data[id].freeCompandy,
                        gender: response.data[id].gender,
                        grandCompanyName: response.data[id].grandCompanyName,
                        grandCompanyRank: response.data[id].grandCompanyRank,
                        guardianDeityIcon: response.data[id].guardianDeityIcon,
                        guardianDeityName: response.data[id].guardianDeityName,
                        nameday: response.data[id].nameday,
                        portrait: response.data[id].portrait,
                        pvpTeam: response.data[id].pvpTeam,
                        race: response.data[id].race,
                        raceClanGender: response.data[id].raceClanGender,
                        townIcon: response.data[id].townIcon,
                        townName: response.data[id].townName,
                        tribe: response.data[id].tribe
                    }));
                }
                catch (error) {
                    console.log('There was an error searching for characters: ' + error);
                }
                finally {
                    isLoading.value = false;
                }
            }
        };
        const getHomeWorlds = async () => {
            try {
                const response = await apiClient.get(GET_HOME_WORLDS_URL);
                // Ensure response.data is an array
                homeWorlds.value = Array.isArray(response.data) ? response.data : Object.values(response.data);
            }
            catch (error) {
                console.error("Error fetching home worlds:", error);
            }
        };
        const getDataCenters = async () => {
            try {
                const response = await apiClient.get(GET_DATA_CENTERS_URL);
                // Ensure response.data is an array
                dataCenters.value = Array.isArray(response.data) ? response.data : Object.values(response.data);
            }
            catch (error) {
                console.error("Error fetching data centers:", error);
            }
        };
        const filterHomeWorlds = () => {
            if (!selectedDataCenter.value) {
                filteredHomeWorlds.value = homeWorlds.value;
            }
            else {
                selectedHomeWorld.value = "All Worlds";
                const filteredDataCenters = dataCenters.value.filter((x) => x.name === selectedDataCenter.value);
                filteredHomeWorlds.value = filteredDataCenters[0]?.homeWorlds || [];
            }
        };
        const selectCharacter = (character) => {
            characterStore.setSelectedCharacter(character);
            router.push("/character/verify");
        };
        onMounted(() => {
            getDataCenters();
            getHomeWorlds();
        });
        return {
            name,
            characters,
            isLoading,
            isValid,
            message,
            alertType,
            selectedDataCenter,
            selectedHomeWorld,
            dataCenters,
            homeWorlds,
            filteredHomeWorlds,
            filterHomeWorlds,
            search,
            selectCharacter,
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VApp;
    /** @type { [typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ justify: ("center"), }));
    const __VLS_15 = __VLS_14({ justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ cols: ("12"), md: ("8"), lg: ("6"), }));
    const __VLS_21 = __VLS_20({ cols: ("12"), md: ("8"), lg: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ title: ("Character Search"), ...{ class: ("elevation-2") }, }));
    const __VLS_27 = __VLS_26({ title: ("Character Search"), ...{ class: ("elevation-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ modelValue: ((__VLS_ctx.isValid)), }));
    const __VLS_33 = __VLS_32({ modelValue: ((__VLS_ctx.isValid)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VSelect;
    /** @type { [typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{ 'onUpdate:modelValue': {} }, label: ("Data Center"), items: ((__VLS_ctx.dataCenters)), itemTitle: ("name"), itemValue: ("name"), modelValue: ((__VLS_ctx.selectedDataCenter)), required: (true), }));
    const __VLS_45 = __VLS_44({ ...{ 'onUpdate:modelValue': {} }, label: ("Data Center"), items: ((__VLS_ctx.dataCenters)), itemTitle: ("name"), itemValue: ("name"), modelValue: ((__VLS_ctx.selectedDataCenter)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    let __VLS_49;
    const __VLS_50 = {
        'onUpdate:modelValue': (__VLS_ctx.filterHomeWorlds)
    };
    let __VLS_46;
    let __VLS_47;
    var __VLS_48;
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.VSelect;
    /** @type { [typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ label: ("Home World"), items: ((__VLS_ctx.filteredHomeWorlds)), itemTitle: ("name"), itemValue: ("name"), modelValue: ((__VLS_ctx.selectedHomeWorld)), required: (true), }));
    const __VLS_53 = __VLS_52({ label: ("Home World"), items: ((__VLS_ctx.filteredHomeWorlds)), itemTitle: ("name"), itemValue: ("name"), modelValue: ((__VLS_ctx.selectedHomeWorld)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{ 'onKeydown': {} }, label: ("Character's Full Name"), modelValue: ((__VLS_ctx.name)), required: (true), }));
    const __VLS_59 = __VLS_58({ ...{ 'onKeydown': {} }, label: ("Character's Full Name"), modelValue: ((__VLS_ctx.name)), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    let __VLS_63;
    const __VLS_64 = {
        onKeydown: (__VLS_ctx.search)
    };
    let __VLS_60;
    let __VLS_61;
    var __VLS_62;
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ ...{ class: ("justify-space-between") }, }));
    const __VLS_67 = __VLS_66({ ...{ class: ("justify-space-between") }, }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.isValid)), color: ("primary"), }));
    const __VLS_73 = __VLS_72({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.isValid)), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
    let __VLS_77;
    const __VLS_78 = {
        onClick: (__VLS_ctx.search)
    };
    let __VLS_74;
    let __VLS_75;
    __VLS_nonNullable(__VLS_76.slots).default;
    var __VLS_76;
    __VLS_nonNullable(__VLS_70.slots).default;
    var __VLS_70;
    if (__VLS_ctx.message) {
        const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
        /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
        // @ts-ignore
        const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ type: ((__VLS_ctx.alertType)), dismissible: (true), }));
        const __VLS_81 = __VLS_80({ type: ((__VLS_ctx.alertType)), dismissible: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
        (__VLS_ctx.message);
        __VLS_nonNullable(__VLS_84.slots).default;
        var __VLS_84;
    }
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ justify: ("center"), }));
    const __VLS_87 = __VLS_86({ justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    if (__VLS_ctx.isLoading) {
        const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ cols: ("12"), md: ("8"), lg: ("6"), }));
        const __VLS_93 = __VLS_92({ cols: ("12"), md: ("8"), lg: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.VCard;
        /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
        // @ts-ignore
        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{ class: ("mx-auto") }, }));
        const __VLS_99 = __VLS_98({ ...{ class: ("mx-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_98));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_102.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({}));
        const __VLS_105 = __VLS_104({}, ...__VLS_functionalComponentArgsRest(__VLS_104));
        const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ ...{ class: ("d-flex justify-center align-center") }, }));
        const __VLS_111 = __VLS_110({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_110));
        const __VLS_115 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_117 = __VLS_116({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_116));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
        __VLS_nonNullable(__VLS_120.slots).default;
        var __VLS_120;
        const __VLS_121 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_123 = __VLS_122({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_122));
        __VLS_nonNullable(__VLS_126.slots).default;
        var __VLS_126;
        __VLS_nonNullable(__VLS_114.slots).default;
        var __VLS_114;
        __VLS_nonNullable(__VLS_108.slots).default;
        var __VLS_108;
        var __VLS_102;
        __VLS_nonNullable(__VLS_96.slots).default;
        var __VLS_96;
    }
    if (__VLS_ctx.characters.length && !__VLS_ctx.isLoading) {
        const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ cols: ("12"), md: ("8"), lg: ("6"), }));
        const __VLS_129 = __VLS_128({ cols: ("12"), md: ("8"), lg: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
        const __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.VCard;
        /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
        // @ts-ignore
        const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ ...{ class: ("mx-auto") }, }));
        const __VLS_135 = __VLS_134({ ...{ class: ("mx-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_134));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_138.slots);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("character-list") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [character] of __VLS_getVForSourceType((__VLS_ctx.characters))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.characters.length && !__VLS_ctx.isLoading)))
                            return;
                        __VLS_ctx.selectCharacter(character);
                    } }, key: ((character.id)), ...{ class: ("character-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("character-icon") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((character.avatar)), alt: ((`${character.name} icon`)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("character-details") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("character-title") }, });
            (character.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("character-name") }, });
            (character.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("character-server") }, });
            const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
            /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
            // @ts-ignore
            const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ icon: ("mdi-web"), size: ("small"), }));
            const __VLS_141 = __VLS_140({ icon: ("mdi-web"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
            (character.server);
        }
        var __VLS_138;
        __VLS_nonNullable(__VLS_132.slots).default;
        var __VLS_132;
    }
    __VLS_nonNullable(__VLS_90.slots).default;
    var __VLS_90;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['elevation-2'];
    __VLS_styleScopedClasses['justify-space-between'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['character-list'];
    __VLS_styleScopedClasses['character-item'];
    __VLS_styleScopedClasses['character-icon'];
    __VLS_styleScopedClasses['character-details'];
    __VLS_styleScopedClasses['character-title'];
    __VLS_styleScopedClasses['character-name'];
    __VLS_styleScopedClasses['character-server'];
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
