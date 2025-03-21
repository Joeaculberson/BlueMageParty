import { defineComponent, ref, watch } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import { useRouter } from "vue-router";
import apiClient from '@/apiClient';
import { REMOVE_PARTY_MEMBER_URL } from '@/constants/api';
import { useAuthStore } from '@/stores/authStore';
export default defineComponent({
    name: 'SpellComparison',
    props: {
        party: {
            type: Object,
            required: true,
            default: () => ({
                partyMembers: [], // Default empty array for safety
            })
        },
        showRemoveIcon: Boolean // Determines if the trashcan should be shown
    },
    emits: ['update-party-members', 'update-everyone-needs'], // Define custom events
    setup(props, { emit }) {
        const panel = ref([]);
        const loading = ref(false);
        const router = useRouter();
        const characterStore = useCharacterStore();
        const authStore = useAuthStore();
        const currentUserId = authStore.getUserId(); // Get the current user's ID
        const isAuthenticated = authStore.isAuthenticated;
        // State for filters
        const filters = ref({
            solo: true,
            lightParty: true,
            fullParty: true,
        });
        // Track the previous state of verifiedCharacters
        const previousVerifiedCharacters = ref(characterStore.getVerifiedCharacters());
        const goToCharacterPage = (loadstoneCharacterId) => {
            router.push('/character/' + loadstoneCharacterId);
        };
        const ownsCharacter = (partyMemberUserId) => {
            return characterStore.getVerifiedCharacters().some(character => character.userId === partyMemberUserId);
        };
        // Watch for changes to verifiedCharacters
        watch(() => characterStore.getVerifiedCharacters(), (newVerifiedCharacters) => {
            if (newVerifiedCharacters.length == previousVerifiedCharacters.value.length)
                return;
            console.log('New verified characters:', newVerifiedCharacters);
            console.log('Previous verified characters:', previousVerifiedCharacters.value);
            // Only proceed if the array got smaller
            if (newVerifiedCharacters.length < previousVerifiedCharacters.value.length) {
                // Find the character that was removed
                const removedCharacter = previousVerifiedCharacters.value.find(oldChar => !newVerifiedCharacters.some(newChar => newChar.id === oldChar.id));
                console.log('Removed character:', removedCharacter); // Debug log
                if (removedCharacter) {
                    // Remove the specific character from the party
                    const updatedPartyMembers = props.party.partyMembers.filter(member => member.character.id !== removedCharacter.id);
                    console.log('Updated party members:', updatedPartyMembers); // Debug log
                    if (updatedPartyMembers.length !== props.party.partyMembers.length) {
                        // Emit the updated party members to the parent
                        console.log('Emitting update-party-members'); // Debug log
                        emit('update-party-members', updatedPartyMembers);
                    }
                }
            }
            // Update the previous state
            previousVerifiedCharacters.value = newVerifiedCharacters;
        }, { deep: true });
        // Computed property to filter spells based on the checkbox values
        const filteredSpells = (spells) => {
            return spells.filter(spell => {
                const matchesPartyType = (filters.value.solo && spell.isSolo) ||
                    (filters.value.lightParty && spell.isLightParty) ||
                    (filters.value.fullParty && spell.isFullParty);
                return matchesPartyType;
            });
        };
        const memberSpells = (missingSpells) => {
            if (!missingSpells || !Array.isArray(missingSpells))
                return [];
            if (!props.party?.spells)
                return [];
            return props.party.spells.filter((spell) => missingSpells.some((missing) => missing.id === spell.id));
        };
        const handleSpellUpdate = async (data) => {
            try {
                if (!props.party || !props.party.partyMembers) {
                    console.error('Party or partyMembers is undefined');
                    return;
                }
                const { spellId, owned, characterId } = data;
                const member = props.party.partyMembers.find((member) => member.character.id === data.characterId);
                if (owned) {
                    member.character.missingSpells = member.character.missingSpells.filter((spell) => spell.id !== spellId);
                }
                else {
                    const spell = props.party.spells.find((s) => s.id === spellId);
                    if (spell) {
                        member.character.missingSpells.push(spell);
                    }
                }
                emit('update-everyone-needs');
            }
            catch (error) {
                console.error("Error updating spell ownership:", error);
            }
        };
        const removeMemberFromParty = async (memberId) => {
            if (!memberId)
                return;
            try {
                const response = await apiClient.delete(REMOVE_PARTY_MEMBER_URL, {
                    params: { Id: memberId }
                });
                const updatedPartyMembers = props.party.partyMembers.filter((member) => member.id !== memberId);
                emit('update-party-members', updatedPartyMembers);
                emit('update-everyone-needs');
            }
            catch (error) {
                console.error("Failed to remove member:", error);
            }
        };
        return {
            panel,
            loading,
            filters,
            filteredSpells,
            memberSpells,
            handleSpellUpdate,
            removeMemberFromParty,
            currentUserId,
            ownsCharacter,
            goToCharacterPage,
            isAuthenticated
        };
    }
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
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
    /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ modelValue: ((__VLS_ctx.filters.solo)), label: ("Solo"), color: ("primary"), }));
    const __VLS_21 = __VLS_20({ modelValue: ((__VLS_ctx.filters.solo)), label: ("Solo"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
    /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ modelValue: ((__VLS_ctx.filters.lightParty)), label: ("Light Party"), color: ("primary"), }));
    const __VLS_33 = __VLS_32({ modelValue: ((__VLS_ctx.filters.lightParty)), label: ("Light Party"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
    /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ modelValue: ((__VLS_ctx.filters.fullParty)), label: ("Full Party"), color: ("primary"), }));
    const __VLS_45 = __VLS_44({ modelValue: ((__VLS_ctx.filters.fullParty)), label: ("Full Party"), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanels;
    /** @type { [typeof __VLS_components.VExpansionPanels, typeof __VLS_components.vExpansionPanels, typeof __VLS_components.VExpansionPanels, typeof __VLS_components.vExpansionPanels, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ modelValue: ((__VLS_ctx.panel)), multiple: (true), }));
    const __VLS_51 = __VLS_50({ modelValue: ((__VLS_ctx.panel)), multiple: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanel;
    /** @type { [typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({}));
    const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanelTitle;
    /** @type { [typeof __VLS_components.VExpansionPanelTitle, typeof __VLS_components.vExpansionPanelTitle, typeof __VLS_components.VExpansionPanelTitle, typeof __VLS_components.vExpansionPanelTitle, ] } */
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({}));
    const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.VAvatar;
    /** @type { [typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ size: ("80"), }));
    const __VLS_69 = __VLS_68({ size: ("80"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ width: ("80px"), src: ("@/assets/malboro-minion.jpg"), alt: ("avatar"), });
    __VLS_nonNullable(__VLS_72.slots).default;
    var __VLS_72;
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_nonNullable(__VLS_66.slots).default;
    var __VLS_66;
    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanelText;
    /** @type { [typeof __VLS_components.VExpansionPanelText, typeof __VLS_components.vExpansionPanelText, typeof __VLS_components.VExpansionPanelText, typeof __VLS_components.vExpansionPanelText, ] } */
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({}));
    const __VLS_75 = __VLS_74({}, ...__VLS_functionalComponentArgsRest(__VLS_74));
    if (__VLS_ctx.loading) {
        const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({}));
        const __VLS_81 = __VLS_80({}, ...__VLS_functionalComponentArgsRest(__VLS_80));
        const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{ class: ("d-flex justify-center align-center") }, }));
        const __VLS_87 = __VLS_86({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
        const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_93 = __VLS_92({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
        __VLS_nonNullable(__VLS_96.slots).default;
        var __VLS_96;
        const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_99 = __VLS_98({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_98));
        __VLS_nonNullable(__VLS_102.slots).default;
        var __VLS_102;
        __VLS_nonNullable(__VLS_90.slots).default;
        var __VLS_90;
        __VLS_nonNullable(__VLS_84.slots).default;
        var __VLS_84;
    }
    else {
        const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
        /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
        // @ts-ignore
        const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({}));
        const __VLS_105 = __VLS_104({}, ...__VLS_functionalComponentArgsRest(__VLS_104));
        const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.SpellTable;
        /** @type { [typeof __VLS_components.SpellTable, ] } */
        // @ts-ignore
        const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({ spells: ((__VLS_ctx.filteredSpells(__VLS_ctx.memberSpells(__VLS_ctx.party.everyoneNeeds)))), characterId: (('everyone')), showOwnedColumn: ((false)), missingSpells: (([])), }));
        const __VLS_111 = __VLS_110({ spells: ((__VLS_ctx.filteredSpells(__VLS_ctx.memberSpells(__VLS_ctx.party.everyoneNeeds)))), characterId: (('everyone')), showOwnedColumn: ((false)), missingSpells: (([])), }, ...__VLS_functionalComponentArgsRest(__VLS_110));
        __VLS_nonNullable(__VLS_108.slots).default;
        var __VLS_108;
    }
    __VLS_nonNullable(__VLS_78.slots).default;
    var __VLS_78;
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    for (const [member] of __VLS_getVForSourceType((__VLS_ctx.party.partyMembers))) {
        const __VLS_115 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanel;
        /** @type { [typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, ] } */
        // @ts-ignore
        const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ key: ((member.id)), }));
        const __VLS_117 = __VLS_116({ key: ((member.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
        const __VLS_121 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanelTitle;
        /** @type { [typeof __VLS_components.VExpansionPanelTitle, typeof __VLS_components.vExpansionPanelTitle, typeof __VLS_components.VExpansionPanelTitle, typeof __VLS_components.vExpansionPanelTitle, ] } */
        // @ts-ignore
        const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({}));
        const __VLS_123 = __VLS_122({}, ...__VLS_functionalComponentArgsRest(__VLS_122));
        const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.VAvatar;
        /** @type { [typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ] } */
        // @ts-ignore
        const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ size: ("80"), }));
        const __VLS_129 = __VLS_128({ size: ("80"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ width: ("80px"), src: ((member.character.avatar)), alt: ("avatar"), });
        __VLS_nonNullable(__VLS_132.slots).default;
        var __VLS_132;
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (member.character.firstName);
        (member.character.lastName);
        (member.character.server);
        if (member.isHost) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            const __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
            /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
            // @ts-ignore
            const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ color: ("black"), small: (true), }));
            const __VLS_135 = __VLS_134({ color: ("black"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
            __VLS_nonNullable(__VLS_138.slots).default;
            var __VLS_138;
        }
        if (__VLS_ctx.isAuthenticated) {
            const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
            /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
            // @ts-ignore
            const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ ...{ 'onClick': {} }, small: (true), }));
            const __VLS_141 = __VLS_140({ ...{ 'onClick': {} }, small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
            let __VLS_145;
            const __VLS_146 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isAuthenticated)))
                        return;
                    __VLS_ctx.goToCharacterPage(member.character.loadstoneCharacterId);
                }
            };
            let __VLS_142;
            let __VLS_143;
            __VLS_nonNullable(__VLS_144.slots).default;
            var __VLS_144;
        }
        if (__VLS_ctx.isAuthenticated && __VLS_ctx.showRemoveIcon && !member.isHost && __VLS_ctx.party.userId == __VLS_ctx.currentUserId) {
            const __VLS_147 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
            /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
            // @ts-ignore
            const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ ...{ 'onClick': {} }, color: ("red"), small: (true), }));
            const __VLS_149 = __VLS_148({ ...{ 'onClick': {} }, color: ("red"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
            let __VLS_153;
            const __VLS_154 = {
                onClick: (...[$event]) => {
                    if (!((__VLS_ctx.isAuthenticated && __VLS_ctx.showRemoveIcon && !member.isHost && __VLS_ctx.party.userId == __VLS_ctx.currentUserId)))
                        return;
                    __VLS_ctx.removeMemberFromParty(member.id);
                }
            };
            let __VLS_150;
            let __VLS_151;
            __VLS_nonNullable(__VLS_152.slots).default;
            var __VLS_152;
        }
        __VLS_nonNullable(__VLS_126.slots).default;
        var __VLS_126;
        const __VLS_155 = __VLS_resolvedLocalAndGlobalComponents.VExpansionPanelText;
        /** @type { [typeof __VLS_components.VExpansionPanelText, typeof __VLS_components.vExpansionPanelText, typeof __VLS_components.VExpansionPanelText, typeof __VLS_components.vExpansionPanelText, ] } */
        // @ts-ignore
        const __VLS_156 = __VLS_asFunctionalComponent(__VLS_155, new __VLS_155({}));
        const __VLS_157 = __VLS_156({}, ...__VLS_functionalComponentArgsRest(__VLS_156));
        if (__VLS_ctx.loading) {
            const __VLS_161 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
            /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
            // @ts-ignore
            const __VLS_162 = __VLS_asFunctionalComponent(__VLS_161, new __VLS_161({}));
            const __VLS_163 = __VLS_162({}, ...__VLS_functionalComponentArgsRest(__VLS_162));
            const __VLS_167 = __VLS_resolvedLocalAndGlobalComponents.VRow;
            /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
            // @ts-ignore
            const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({ ...{ class: ("d-flex justify-center align-center") }, }));
            const __VLS_169 = __VLS_168({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_168));
            const __VLS_173 = __VLS_resolvedLocalAndGlobalComponents.VCol;
            /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
            // @ts-ignore
            const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ cols: ("12"), ...{ class: ("text-center") }, }));
            const __VLS_175 = __VLS_174({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_174));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
            __VLS_nonNullable(__VLS_178.slots).default;
            var __VLS_178;
            const __VLS_179 = __VLS_resolvedLocalAndGlobalComponents.VCol;
            /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
            // @ts-ignore
            const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, new __VLS_179({ cols: ("12"), ...{ class: ("text-center") }, }));
            const __VLS_181 = __VLS_180({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_180));
            __VLS_nonNullable(__VLS_184.slots).default;
            var __VLS_184;
            __VLS_nonNullable(__VLS_172.slots).default;
            var __VLS_172;
            __VLS_nonNullable(__VLS_166.slots).default;
            var __VLS_166;
        }
        else {
            const __VLS_185 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
            /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
            // @ts-ignore
            const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({}));
            const __VLS_187 = __VLS_186({}, ...__VLS_functionalComponentArgsRest(__VLS_186));
            const __VLS_191 = __VLS_resolvedLocalAndGlobalComponents.SpellTable;
            /** @type { [typeof __VLS_components.SpellTable, ] } */
            // @ts-ignore
            const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ ...{ 'onSpellUpdated': {} }, spells: ((__VLS_ctx.filteredSpells(__VLS_ctx.memberSpells(member.character.missingSpells)))), characterId: ((member.character.id)), showOwnedColumn: ((__VLS_ctx.ownsCharacter(member.character.userId))), missingSpells: ((member.character.missingSpells)), }));
            const __VLS_193 = __VLS_192({ ...{ 'onSpellUpdated': {} }, spells: ((__VLS_ctx.filteredSpells(__VLS_ctx.memberSpells(member.character.missingSpells)))), characterId: ((member.character.id)), showOwnedColumn: ((__VLS_ctx.ownsCharacter(member.character.userId))), missingSpells: ((member.character.missingSpells)), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
            let __VLS_197;
            const __VLS_198 = {
                onSpellUpdated: (__VLS_ctx.handleSpellUpdate)
            };
            let __VLS_194;
            let __VLS_195;
            var __VLS_196;
            __VLS_nonNullable(__VLS_190.slots).default;
            var __VLS_190;
        }
        __VLS_nonNullable(__VLS_160.slots).default;
        var __VLS_160;
        __VLS_nonNullable(__VLS_120.slots).default;
        var __VLS_120;
    }
    __VLS_nonNullable(__VLS_54.slots).default;
    var __VLS_54;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
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
