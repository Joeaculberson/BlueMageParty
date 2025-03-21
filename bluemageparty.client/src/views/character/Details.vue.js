import { defineComponent, watch, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import apiClient from '@/apiClient';
import { GET_CHARACTER_BY_LOADSTONE_ID_URL, REFRESH_CHARACTER_DATA_FROM_LOADSTONE_URL, GET_MOCK_PARTY_FROM_CHARACTER_IDS_URL } from "@/constants/api";
import { useCharacterStore } from "@/stores/characterStore";
import { useAuthStore } from "@/stores/authStore";
import SpellComparison from "@/components/SpellComparison.vue";
export default defineComponent({
    name: "CharacterDetails",
    components: {
        SpellComparison,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const ownsCharacter = ref(false);
        const loading = ref(false);
        const character = reactive({
            avatar: "",
            firstName: "",
            lastName: "",
            title: "",
            server: "",
            id: "",
            activeClassJobIcon: "",
            activeClassJobLevel: null,
            bio: "",
            freeCompany: "",
            gender: "",
            grandCompanyName: "",
            grandCompanyRank: "",
            guardianDeityIcon: "",
            guardianDeityName: "",
            nameday: "",
            portrait: "",
            pvpTeam: "",
            race: "",
            raceClanGender: "",
            townIcon: "",
            townName: "",
            tribe: "",
        });
        const characterStore = useCharacterStore();
        const authStore = useAuthStore();
        const currentUserId = authStore.getUserId();
        // Define the party object with the character and the verified character
        const party = ref({
            partyMembers: [],
            everyoneNeeds: [],
        });
        ownsCharacter.value = characterStore
            .getVerifiedCharacters()
            .some((character) => character.loadstoneCharacterId === route.params.loadstoneCharacterId);
        const getCharacterDetails = async () => {
            try {
                const response = await apiClient.get(GET_CHARACTER_BY_LOADSTONE_ID_URL, {
                    params: { loadstoneCharacterId: route.params.loadstoneCharacterId },
                });
                if (response.data) {
                    Object.assign(character, response.data); // Updates character data
                    if (characterStore.getVerifiedCharacters().length === 0)
                        return;
                    // Ensure response.data.id is recognized as a string
                    const characterId = response.data.id;
                    const verifiedCharacterId = characterStore.getVerifiedCharacters()[0].id;
                    await getMockParty([characterId, verifiedCharacterId]);
                    recalculateEveryoneNeeds();
                }
                else {
                    console.log("Error fetching character data.");
                }
            }
            catch (error) {
                console.error("Error fetching character data:", error);
            }
        };
        const fetchMockPartyFromCharacterIds = async (characterIds) => {
            if (characterIds.length !== 2) {
                console.error("Exactly two character IDs are required.");
                return null;
            }
            try {
                const response = await apiClient.get(GET_MOCK_PARTY_FROM_CHARACTER_IDS_URL, {
                    params: { characterIds },
                    paramsSerializer: (params) => {
                        return characterIds.map((id) => `characterIds=${id}`).join("&");
                    },
                });
                if (response.data) {
                    return response.data; // Return the mock party data
                }
                else {
                    console.error("No data returned from the server.");
                    return null;
                }
            }
            catch (error) {
                console.error("Error fetching mock party data:", error);
                return null;
            }
        };
        const getMockParty = async (characterIds) => {
            const result = await fetchMockPartyFromCharacterIds(characterIds);
            if (result) {
                party.value = result; // Update the reactive mockParty object
            }
            else {
                console.error("Failed to fetch mock party data.");
            }
        };
        const refreshCharacterData = async () => {
            loading.value = true;
            try {
                const response = await apiClient.post(REFRESH_CHARACTER_DATA_FROM_LOADSTONE_URL, {
                    Name: character.firstName + " " + character.lastName,
                    Server: character.server,
                });
                Object.assign(character, response.data);
            }
            catch (error) {
                console.error("Error fetching verification code:", error);
            }
            finally {
                loading.value = false;
            }
        };
        // Recalculate spells that everyone in the party needs
        const recalculateEveryoneNeeds = () => {
            if (!party.value.partyMembers || party.value.partyMembers.length === 0) {
                console.error("Party members are undefined or empty.");
                return;
            }
            // Get all unique spells from the party members
            const allSpells = party.value.partyMembers
                .flatMap((member) => member.character.missingSpells)
                .filter((spell, index, self) => self.findIndex((s) => s.id === spell.id) === index);
            // Filter spells that are missing for all members
            party.value.everyoneNeeds = allSpells.filter((spell) => party.value.partyMembers.every((member) => member.character.missingSpells.some((missingSpell) => missingSpell.id === spell.id)));
        };
        // Update party members when an event is emitted
        const updatePartyMembers = (updatedPartyMembers) => {
            party.value.partyMembers = updatedPartyMembers;
            recalculateEveryoneNeeds();
        };
        watch(() => route.params.loadstoneCharacterId, () => {
            getCharacterDetails(); // Fetch data when the route changes
        }, { immediate: true } // Call this immediately on mount
        );
        return {
            character,
            refreshCharacterData,
            ownsCharacter,
            loading,
            party,
            currentUserId,
            updatePartyMembers,
            recalculateEveryoneNeeds,
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            SpellComparison,
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ justify: ("center"), }));
    const __VLS_9 = __VLS_8({ justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ cols: ("12"), md: ("8"), }));
    const __VLS_15 = __VLS_14({ cols: ("12"), md: ("8"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ align: ("center"), justify: ("space-between"), ...{ class: ("px-4") }, }));
    const __VLS_33 = __VLS_32({ align: ("center"), justify: ("space-between"), ...{ class: ("px-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.character.firstName);
    (__VLS_ctx.character.lastName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.character.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.character.portrait)), ...{ class: ("rcorners") }, alt: ("Character Portrait"), });
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VCardSubtitle;
    /** @type { [typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ class: ("px-4") }, }));
    const __VLS_39 = __VLS_38({ ...{ class: ("px-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.server);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.freeCompany || 'None');
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.race);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.tribe);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.gender);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.nameday);
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
    const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({}));
    const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ cols: ("12"), md: ("6"), }));
    const __VLS_57 = __VLS_56({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.grandCompanyName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.grandCompanyRank);
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ cols: ("12"), md: ("6"), }));
    const __VLS_63 = __VLS_62({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.guardianDeityName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.character.guardianDeityIcon)), alt: ("Guardian Deity Icon"), ...{ class: ("icon") }, });
    __VLS_nonNullable(__VLS_66.slots).default;
    var __VLS_66;
    __VLS_nonNullable(__VLS_54.slots).default;
    var __VLS_54;
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({}));
    const __VLS_69 = __VLS_68({}, ...__VLS_functionalComponentArgsRest(__VLS_68));
    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ cols: ("12"), md: ("6"), }));
    const __VLS_75 = __VLS_74({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.activeClassJobLevel);
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.character.activeClassJobIcon)), alt: ("Class Icon"), ...{ class: ("icon") }, });
    __VLS_nonNullable(__VLS_78.slots).default;
    var __VLS_78;
    const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ cols: ("12"), md: ("6"), }));
    const __VLS_81 = __VLS_80({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.townName);
    if (__VLS_ctx.character.townIcon) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.character.townIcon)), alt: ("Town Icon"), ...{ class: ("icon") }, });
    }
    __VLS_nonNullable(__VLS_84.slots).default;
    var __VLS_84;
    __VLS_nonNullable(__VLS_72.slots).default;
    var __VLS_72;
    __VLS_nonNullable(__VLS_48.slots).default;
    var __VLS_48;
    if (__VLS_ctx.ownsCharacter) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
        /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({}));
        const __VLS_87 = __VLS_86({}, ...__VLS_functionalComponentArgsRest(__VLS_86));
        if (!__VLS_ctx.loading) {
            const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
            /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
            // @ts-ignore
            const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{ 'onClick': {} }, color: ("primary"), }));
            const __VLS_93 = __VLS_92({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
            let __VLS_97;
            const __VLS_98 = {
                onClick: (__VLS_ctx.refreshCharacterData)
            };
            let __VLS_94;
            let __VLS_95;
            const __VLS_99 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
            /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
            // @ts-ignore
            const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ small: (true), }));
            const __VLS_101 = __VLS_100({ small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
            __VLS_nonNullable(__VLS_104.slots).default;
            var __VLS_104;
            __VLS_nonNullable(__VLS_96.slots).default;
            var __VLS_96;
        }
        const __VLS_105 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({}));
        const __VLS_107 = __VLS_106({}, ...__VLS_functionalComponentArgsRest(__VLS_106));
        const __VLS_111 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ ...{ class: ("d-flex justify-center align-center") }, }));
        const __VLS_113 = __VLS_112({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_112));
        const __VLS_117 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_119 = __VLS_118({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_118));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
        __VLS_nonNullable(__VLS_122.slots).default;
        var __VLS_122;
        const __VLS_123 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_125 = __VLS_124({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_124));
        __VLS_nonNullable(__VLS_128.slots).default;
        var __VLS_128;
        __VLS_nonNullable(__VLS_116.slots).default;
        var __VLS_116;
        __VLS_nonNullable(__VLS_110.slots).default;
        var __VLS_110;
        const __VLS_129 = __VLS_resolvedLocalAndGlobalComponents.VSpacer;
        /** @type { [typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ] } */
        // @ts-ignore
        const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({}));
        const __VLS_131 = __VLS_130({}, ...__VLS_functionalComponentArgsRest(__VLS_130));
        __VLS_nonNullable(__VLS_90.slots).default;
        var __VLS_90;
    }
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    const __VLS_135 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({ ...{ class: ("mt-4") }, }));
    const __VLS_137 = __VLS_136({ ...{ class: ("mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_136));
    const __VLS_141 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({}));
    const __VLS_143 = __VLS_142({}, ...__VLS_functionalComponentArgsRest(__VLS_142));
    __VLS_nonNullable(__VLS_146.slots).default;
    var __VLS_146;
    const __VLS_147 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({}));
    const __VLS_149 = __VLS_148({}, ...__VLS_functionalComponentArgsRest(__VLS_148));
    if (!__VLS_ctx.loading) {
        const __VLS_153 = __VLS_resolvedLocalAndGlobalComponents.SpellComparison;
        /** @type { [typeof __VLS_components.SpellComparison, ] } */
        // @ts-ignore
        const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ ...{ 'onUpdatePartyMembers': {} }, ...{ 'onUpdateEveryoneNeeds': {} }, party: ((__VLS_ctx.party)), showRemoveIcon: ((false)), currentUserId: ((__VLS_ctx.currentUserId)), }));
        const __VLS_155 = __VLS_154({ ...{ 'onUpdatePartyMembers': {} }, ...{ 'onUpdateEveryoneNeeds': {} }, party: ((__VLS_ctx.party)), showRemoveIcon: ((false)), currentUserId: ((__VLS_ctx.currentUserId)), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
        let __VLS_159;
        const __VLS_160 = {
            onUpdatePartyMembers: (__VLS_ctx.updatePartyMembers)
        };
        const __VLS_161 = {
            onUpdateEveryoneNeeds: (__VLS_ctx.recalculateEveryoneNeeds)
        };
        let __VLS_156;
        let __VLS_157;
        var __VLS_158;
    }
    else {
        const __VLS_162 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_163 = __VLS_asFunctionalComponent(__VLS_162, new __VLS_162({}));
        const __VLS_164 = __VLS_163({}, ...__VLS_functionalComponentArgsRest(__VLS_163));
        const __VLS_168 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{ class: ("d-flex justify-center align-center") }, }));
        const __VLS_170 = __VLS_169({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_169));
        const __VLS_174 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_175 = __VLS_asFunctionalComponent(__VLS_174, new __VLS_174({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_176 = __VLS_175({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_175));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
        __VLS_nonNullable(__VLS_179.slots).default;
        var __VLS_179;
        const __VLS_180 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_182 = __VLS_181({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_181));
        __VLS_nonNullable(__VLS_185.slots).default;
        var __VLS_185;
        __VLS_nonNullable(__VLS_173.slots).default;
        var __VLS_173;
        __VLS_nonNullable(__VLS_167.slots).default;
        var __VLS_167;
    }
    __VLS_nonNullable(__VLS_152.slots).default;
    var __VLS_152;
    __VLS_nonNullable(__VLS_140.slots).default;
    var __VLS_140;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['rcorners'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
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
