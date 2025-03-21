import { defineComponent, ref, onMounted, computed, watch } from "vue";
import apiClient from '@/apiClient';
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import SpellComparison from "@/components/SpellComparison.vue";
import { GET_PARTY_DETAILS_URL, SEARCH_DATABASE_CHARACTERS_URL, GET_MISSING_SPELLS_URL, ADD_PARTY_MEMBER_URL, } from "@/constants/api";
export default defineComponent({
    name: "PartyDetails",
    components: {
        SpellComparison,
    },
    setup() {
        const route = useRoute();
        const party = ref({
            id: "",
            partyMembers: [],
            everyoneNeeds: [],
            spells: [],
        });
        const loading = ref(true);
        const searchLoading = ref(false);
        const searchQuery = ref("");
        const selectedCharacter = ref(null);
        const characters = ref([]);
        const authStore = useAuthStore();
        const currentUserId = authStore.getUserId();
        const message = ref("");
        const isAuthenticated = authStore.isAuthenticated;
        // Fetch party details from the API
        const getPartyDetails = async () => {
            loading.value = true;
            try {
                const response = await apiClient.get(GET_PARTY_DETAILS_URL, {
                    params: { partyId: route.params.partyId },
                });
                if (response.data) {
                    party.value = response.data;
                }
                else {
                    console.log("Error fetching party data.");
                }
            }
            catch (error) {
                message.value = "Sorry, but this party does not exist.";
                console.error("Error fetching party data:", error);
            }
            loading.value = false;
        };
        const recalculateEveryoneNeeds = () => {
            if (!party.value.partyMembers || !party.value.spells) {
                console.error("Party members or spells are undefined.");
                return;
            }
            const allSpells = party.value.spells;
            // Create a Set of spell IDs that each member is missing
            const memberOwnedSpells = party.value.partyMembers.map((member) => {
                if (!member.character.missingSpells || !Array.isArray(member.character.missingSpells)) {
                    return new Set();
                }
                return new Set(member.character.missingSpells.map((spell) => spell.id));
            });
            // Filter spells that are missing for all members
            party.value.everyoneNeeds = allSpells.filter((spell) => {
                const isMissingForEveryone = memberOwnedSpells.every((ownedSpells) => ownedSpells.has(spell.id));
                return isMissingForEveryone;
            });
        };
        // Search characters based on the query
        const searchCharacters = async () => {
            if (searchQuery.value.length < 3)
                return;
            searchLoading.value = true;
            try {
                const response = await apiClient.get(SEARCH_DATABASE_CHARACTERS_URL, {
                    params: { query: searchQuery.value, partyId: party.value.id },
                });
                characters.value = response.data.map((char) => ({
                    ...char,
                    fullName: `${char.firstName} ${char.lastName}`,
                }));
            }
            catch (error) {
                console.error("Error fetching characters:", error);
            }
            searchLoading.value = false;
        };
        // Clear the search query and results
        const clearSearch = () => {
            searchQuery.value = "";
            characters.value = [];
        };
        // Handle search input update
        const handleSearchUpdate = (value) => {
            searchQuery.value = value;
            characters.value = [];
        };
        // Update partyMembers when an event is emitted
        const updatePartyMembers = (updatedPartyMembers) => {
            party.value.partyMembers = updatedPartyMembers;
            recalculateEveryoneNeeds();
        };
        const addCharacterToParty = async (character) => {
            if (!character)
                return;
            // Check if the character is already in the party
            const isCharacterInParty = party.value.partyMembers?.some((member) => member.character.id === character.id);
            if (isCharacterInParty) {
                alert(`${character.firstName} ${character.lastName} is already in the party.`);
                return;
            }
            try {
                // Fetch missing spells for the character
                const response = await apiClient.get(GET_MISSING_SPELLS_URL, {
                    params: { characterId: character.id },
                });
                const missingSpells = response.data;
                // Add the character to the party via API
                const addResponse = await apiClient.post(ADD_PARTY_MEMBER_URL, {
                    characterId: character.id,
                    partyId: party.value.id,
                });
                // Add the character to the local party state
                const newPartyMember = {
                    id: addResponse.data.id,
                    character: { ...character, missingSpells: missingSpells },
                    isHost: false,
                };
                party.value.partyMembers.push(newPartyMember);
                // Recalculate everyone's needs after adding a member
                recalculateEveryoneNeeds();
                clearSearch();
            }
            catch (error) {
                console.error("Error fetching missing spells or adding character to party:", error);
            }
        };
        // Compute filtered characters for the autocomplete
        const filteredCharacters = computed(() => {
            return characters.value.map((char) => ({
                ...char,
                fullName: `${char.firstName} ${char.lastName}`,
            }));
        });
        // Watch for changes to the search query and trigger search
        watch(searchQuery, (newValue) => {
            searchCharacters();
        });
        // Fetch party details when the component mounts
        onMounted(() => {
            getPartyDetails();
        });
        return {
            party,
            loading,
            searchLoading,
            searchQuery,
            selectedCharacter,
            characters,
            filteredCharacters,
            addCharacterToParty,
            clearSearch,
            handleSearchUpdate,
            updatePartyMembers,
            recalculateEveryoneNeeds,
            currentUserId,
            message,
            isAuthenticated,
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("party-details") }, });
    if (!__VLS_ctx.message && __VLS_ctx.isAuthenticated) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VAutocomplete;
        /** @type { [typeof __VLS_components.VAutocomplete, typeof __VLS_components.vAutocomplete, typeof __VLS_components.VAutocomplete, typeof __VLS_components.vAutocomplete, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onUpdate:search': {} }, ...{ 'onBlur': {} }, ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.selectedCharacter)), items: ((__VLS_ctx.filteredCharacters)), label: ("Search Character"), itemValue: ("id"), itemTitle: ("fullName"), returnObject: (true), loading: ((__VLS_ctx.searchLoading)), noDataText: ("No characters found"), }));
        const __VLS_2 = __VLS_1({ ...{ 'onUpdate:search': {} }, ...{ 'onBlur': {} }, ...{ 'onUpdate:modelValue': {} }, modelValue: ((__VLS_ctx.selectedCharacter)), items: ((__VLS_ctx.filteredCharacters)), label: ("Search Character"), itemValue: ("id"), itemTitle: ("fullName"), returnObject: (true), loading: ((__VLS_ctx.searchLoading)), noDataText: ("No characters found"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        let __VLS_6;
        const __VLS_7 = {
            'onUpdate:search': (__VLS_ctx.handleSearchUpdate)
        };
        const __VLS_8 = {
            onBlur: (__VLS_ctx.clearSearch)
        };
        const __VLS_9 = {
            'onUpdate:modelValue': (__VLS_ctx.addCharacterToParty)
        };
        let __VLS_3;
        let __VLS_4;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { item: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
            const [{ item }] = __VLS_getSlotParams(__VLS_thisSlot);
            const __VLS_10 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
            /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
            // @ts-ignore
            const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{ 'onClick': {} }, }));
            const __VLS_12 = __VLS_11({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
            let __VLS_16;
            const __VLS_17 = {
                onClick: (...[$event]) => {
                    if (!((!__VLS_ctx.message && __VLS_ctx.isAuthenticated)))
                        return;
                    __VLS_ctx.addCharacterToParty(item.raw);
                }
            };
            let __VLS_13;
            let __VLS_14;
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-center") }, });
            const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VAvatar;
            /** @type { [typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ] } */
            // @ts-ignore
            const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ size: ("50"), ...{ class: ("mr-3") }, }));
            const __VLS_20 = __VLS_19({ size: ("50"), ...{ class: ("mr-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ width: ("50px"), src: ((item.raw.avatar)), alt: ("Character Avatar"), });
            __VLS_nonNullable(__VLS_23.slots).default;
            var __VLS_23;
            const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
            /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
            const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
            (item.raw.fullName);
            (item.raw.server);
            __VLS_nonNullable(__VLS_29.slots).default;
            var __VLS_29;
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("align-right") }, });
            __VLS_nonNullable(__VLS_15.slots).default;
            var __VLS_15;
        }
        var __VLS_5;
    }
    if (!__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        if (!__VLS_ctx.message) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.SpellComparison;
            /** @type { [typeof __VLS_components.SpellComparison, ] } */
            // @ts-ignore
            const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onUpdatePartyMembers': {} }, ...{ 'onUpdateEveryoneNeeds': {} }, party: ((__VLS_ctx.party)), showRemoveIcon: ((true)), currentUserId: ((__VLS_ctx.currentUserId)), }));
            const __VLS_32 = __VLS_31({ ...{ 'onUpdatePartyMembers': {} }, ...{ 'onUpdateEveryoneNeeds': {} }, party: ((__VLS_ctx.party)), showRemoveIcon: ((true)), currentUserId: ((__VLS_ctx.currentUserId)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
            let __VLS_36;
            const __VLS_37 = {
                onUpdatePartyMembers: (__VLS_ctx.updatePartyMembers)
            };
            const __VLS_38 = {
                onUpdateEveryoneNeeds: (__VLS_ctx.recalculateEveryoneNeeds)
            };
            let __VLS_33;
            let __VLS_34;
            var __VLS_35;
        }
        else {
            const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
            /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
            // @ts-ignore
            const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ type: ("warning"), dismissible: (true), border: ("start"), }));
            const __VLS_41 = __VLS_40({ type: ("warning"), dismissible: (true), border: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
            (__VLS_ctx.message);
            __VLS_nonNullable(__VLS_44.slots).default;
            var __VLS_44;
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-gray-600") }, });
        const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
        const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
        const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ class: ("d-flex justify-center align-center") }, ...{ style: ({}) }, }));
        const __VLS_53 = __VLS_52({ ...{ class: ("d-flex justify-center align-center") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), alt: ("Loading"), });
        __VLS_nonNullable(__VLS_56.slots).default;
        var __VLS_56;
        __VLS_nonNullable(__VLS_50.slots).default;
        var __VLS_50;
    }
    __VLS_styleScopedClasses['party-details'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['mr-3'];
    __VLS_styleScopedClasses['align-right'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
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
