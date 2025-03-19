import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import { watch } from 'vue';
import { useCharacterStore } from '@/stores/characterStore';
import { GET_SPELLS_URL } from '@/constants/api';
export default (await import('vue')).defineComponent({
    name: 'SpellManager',
    setup() {
        const characterStore = useCharacterStore();
        const alertType = ref('info');
        const adminMessage = ref('');
        const isAdmin = ref(false);
        const spells = ref([]); // Store spells here
        const isLoading = ref(false);
        const authStore = useAuthStore();
        const currentUserId = authStore.getUserId();
        const filters = ref({
            isSolo: true, // Start checked
            isLightParty: true, // Start checked
            isFullParty: true, // Start checked
            hideOwned: true // Start checked
        });
        const filteredSpells = computed(() => {
            return spells.value.filter((spell) => {
                // Check if the spell matches any of the selected party types
                const matchesPartyType = (filters.value.isSolo && spell.isSolo) ||
                    (filters.value.isLightParty && spell.isLightParty) ||
                    (filters.value.isFullParty && spell.isFullParty);
                // Check if the spell should be hidden based on ownership
                const matchesOwnership = !filters.value.hideOwned || !spell.owned;
                // Only include the spell if it matches at least one party type and the ownership filter
                return matchesPartyType && matchesOwnership;
            });
        });
        // Handle spell ownership updates
        const handleSpellUpdate = (data) => {
            // console.log("Spell ownership updated:", data);
            // Update the spells array if needed
        };
        const missingSpells = computed(() => {
            return [];
        });
        // Fetch the list of spells
        const getSpells = async () => {
            if (!isLoading.value) {
                isLoading.value = true;
                try {
                    const characterId = characterStore.getVerifiedCharacters().length > 0
                        ? characterStore.getVerifiedCharacters()[0].id
                        : undefined;
                    // Fetch spells based on the active character
                    const response = await axios.get(GET_SPELLS_URL, {
                        params: { characterId },
                    });
                    spells.value = response.data.map((spell) => ({
                        ...spell,
                        checked: false, // Initialize checkbox state as false
                    }));
                    alertType.value = 'success';
                }
                catch (error) {
                    alertType.value = 'error';
                    console.error('Error fetching spells:', error);
                }
                isLoading.value = false;
            }
        };
        watch(filters, () => {
            applyFilters();
        }, { deep: true });
        // Watch for changes to the verified characters and fetch spells when the list changes
        watch(() => characterStore.getVerifiedCharacters(), (newCharacters) => {
            if (newCharacters.length > 0) {
                getSpells(); // Only fetch spells when characters are available
            }
        }, { deep: true, immediate: true });
        // Apply filters to the spells
        const applyFilters = () => {
            spells.value = spells.value.map(spell => ({ ...spell })); // Forces reactivity update
        };
        onMounted(() => {
            //getSpells();
        });
        return {
            isLoading,
            isAdmin,
            spells,
            adminMessage,
            alertType,
            getSpells,
            handleSpellUpdate,
            characterStore,
            filters,
            filteredSpells,
            applyFilters,
            currentUserId,
            missingSpells
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    if (__VLS_ctx.characterStore.getVerifiedCharacters().length == 0) {
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
        /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ type: ("info"), dismissible: (true), border: ("start"), }));
        const __VLS_9 = __VLS_8({ type: ("info"), dismissible: (true), border: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_nonNullable(__VLS_12.slots).default;
        var __VLS_12;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
        const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ cols: ("12"), md: ("3"), }));
        const __VLS_21 = __VLS_20({ cols: ("12"), md: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
        /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ modelValue: ((__VLS_ctx.filters.isSolo)), label: ("Solo"), }));
        const __VLS_27 = __VLS_26({ modelValue: ((__VLS_ctx.filters.isSolo)), label: ("Solo"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        __VLS_nonNullable(__VLS_24.slots).default;
        var __VLS_24;
        const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ cols: ("12"), md: ("3"), }));
        const __VLS_33 = __VLS_32({ cols: ("12"), md: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
        const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
        /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ modelValue: ((__VLS_ctx.filters.isLightParty)), label: ("Light Party"), }));
        const __VLS_39 = __VLS_38({ modelValue: ((__VLS_ctx.filters.isLightParty)), label: ("Light Party"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        __VLS_nonNullable(__VLS_36.slots).default;
        var __VLS_36;
        const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ cols: ("12"), md: ("3"), }));
        const __VLS_45 = __VLS_44({ cols: ("12"), md: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
        /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ modelValue: ((__VLS_ctx.filters.isFullParty)), label: ("Full Party"), }));
        const __VLS_51 = __VLS_50({ modelValue: ((__VLS_ctx.filters.isFullParty)), label: ("Full Party"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
        __VLS_nonNullable(__VLS_48.slots).default;
        var __VLS_48;
        const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ cols: ("12"), md: ("3"), }));
        const __VLS_57 = __VLS_56({ cols: ("12"), md: ("3"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
        const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
        /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.filters.hideOwned)), label: ("Hide Owned Spells"), }));
        const __VLS_63 = __VLS_62({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.filters.hideOwned)), label: ("Hide Owned Spells"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        let __VLS_67;
        const __VLS_68 = {
            onChange: (__VLS_ctx.applyFilters)
        };
        let __VLS_64;
        let __VLS_65;
        var __VLS_66;
        __VLS_nonNullable(__VLS_60.slots).default;
        var __VLS_60;
        __VLS_nonNullable(__VLS_18.slots).default;
        var __VLS_18;
        if (__VLS_ctx.isLoading) {
            const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
            /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
            // @ts-ignore
            const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({}));
            const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
            const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.VRow;
            /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
            // @ts-ignore
            const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{ class: ("d-flex justify-center align-center") }, }));
            const __VLS_77 = __VLS_76({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
            const __VLS_81 = __VLS_resolvedLocalAndGlobalComponents.VCol;
            /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
            // @ts-ignore
            const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ cols: ("12"), ...{ class: ("text-center") }, }));
            const __VLS_83 = __VLS_82({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
            __VLS_nonNullable(__VLS_86.slots).default;
            var __VLS_86;
            const __VLS_87 = __VLS_resolvedLocalAndGlobalComponents.VCol;
            /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
            // @ts-ignore
            const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ cols: ("12"), ...{ class: ("text-center") }, }));
            const __VLS_89 = __VLS_88({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_88));
            __VLS_nonNullable(__VLS_92.slots).default;
            var __VLS_92;
            __VLS_nonNullable(__VLS_80.slots).default;
            var __VLS_80;
            __VLS_nonNullable(__VLS_74.slots).default;
            var __VLS_74;
        }
        else {
            const __VLS_93 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
            /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
            // @ts-ignore
            const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({}));
            const __VLS_95 = __VLS_94({}, ...__VLS_functionalComponentArgsRest(__VLS_94));
            const __VLS_99 = __VLS_resolvedLocalAndGlobalComponents.SpellTable;
            /** @type { [typeof __VLS_components.SpellTable, ] } */
            // @ts-ignore
            const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ ...{ 'onSpellUpdated': {} }, ...{ 'onMissingSpells': {} }, spells: ((__VLS_ctx.filteredSpells)), characterId: ((__VLS_ctx.characterStore.getVerifiedCharacters()[0]?.id)), showOwnedColumn: ((__VLS_ctx.characterStore.getVerifiedCharacters().length > 0)), }));
            const __VLS_101 = __VLS_100({ ...{ 'onSpellUpdated': {} }, ...{ 'onMissingSpells': {} }, spells: ((__VLS_ctx.filteredSpells)), characterId: ((__VLS_ctx.characterStore.getVerifiedCharacters()[0]?.id)), showOwnedColumn: ((__VLS_ctx.characterStore.getVerifiedCharacters().length > 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
            let __VLS_105;
            const __VLS_106 = {
                onSpellUpdated: (__VLS_ctx.handleSpellUpdate)
            };
            const __VLS_107 = {
                onMissingSpells: (__VLS_ctx.missingSpells)
            };
            let __VLS_102;
            let __VLS_103;
            var __VLS_104;
            __VLS_nonNullable(__VLS_98.slots).default;
            var __VLS_98;
        }
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
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
