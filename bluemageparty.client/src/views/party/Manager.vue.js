/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { defineComponent, ref, onMounted } from "vue";
import apiClient from '@/apiClient';
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { useCharacterStore } from "@/stores/characterStore";
import { GET_PARTIES_BY_USER_ID_URL, CREATE_PARTY_URL, DELETE_PARTY_URL } from '@/constants/api';
export default defineComponent({
    name: "PartyManager",
    setup() {
        const router = useRouter();
        const hostedParties = ref([]);
        const guestOfParties = ref([]);
        const loading = ref(true);
        const partyName = ref("");
        const authStore = useAuthStore();
        const characterStore = useCharacterStore();
        const message = ref("");
        const getUsersParties = async () => {
            loading.value = true;
            try {
                const response = await apiClient.get(GET_PARTIES_BY_USER_ID_URL, {
                    params: { authToken: authStore.getAuthToken() }
                });
                hostedParties.value = response.data.hostedParties;
                guestOfParties.value = response.data.guestOfParties;
            }
            catch (error) {
                console.error("Error fetching parties:", error);
            }
            finally {
                loading.value = false;
            }
        };
        const createParty = async () => {
            if (!partyName.value)
                return;
            try {
                const response = await apiClient.post(CREATE_PARTY_URL, {
                    authToken: authStore.getAuthToken(),
                    characterId: characterStore.getVerifiedCharacters()[0].id,
                    partyName: partyName.value
                });
                if (response.data) {
                    hostedParties.value.push(response.data);
                    partyName.value = ""; // Reset input after creation
                    router.push('/party/' + response.data.id);
                }
            }
            catch (error) {
                console.error("Error creating party:", error);
            }
        };
        const editParty = async (partyId) => {
            try {
                router.push("/party/" + partyId);
            }
            catch (error) {
                console.error("Error editing party:", error);
            }
        };
        const deleteParty = async (partyId) => {
            try {
                await apiClient.delete(DELETE_PARTY_URL, { params: { partyId } });
                hostedParties.value = hostedParties.value.filter((p) => p.id !== partyId);
            }
            catch (error) {
                console.error("Error deleting party:", error);
            }
        };
        const formatDate = (dateString) => {
            return new Date(dateString).toLocaleDateString();
        };
        onMounted(() => {
            getUsersParties();
        });
        return {
            hostedParties,
            guestOfParties,
            loading,
            partyName,
            createParty,
            editParty,
            deleteParty,
            formatDate,
            message,
            characterStore
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("party-manager") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("party-manager") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ cols: ("12"), }));
    const __VLS_15 = __VLS_14({ cols: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    if (__VLS_ctx.characterStore.getVerifiedCharacters().length == 0) {
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
        /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ type: ("info"), dismissible: (true), border: ("start"), }));
        const __VLS_21 = __VLS_20({ type: ("info"), dismissible: (true), border: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        __VLS_nonNullable(__VLS_24.slots).default;
        var __VLS_24;
    }
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ class: ("text-h5") }, }));
    const __VLS_33 = __VLS_32({ ...{ class: ("text-h5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.partyName)), label: ("Enter party name"), disabled: ((__VLS_ctx.characterStore.getVerifiedCharacters().length == 0)), maxlength: ("255"), counter: (true), outlined: (true), dense: (true), }));
    const __VLS_45 = __VLS_44({ ...{ 'onKeyup': {} }, modelValue: ((__VLS_ctx.partyName)), label: ("Enter party name"), disabled: ((__VLS_ctx.characterStore.getVerifiedCharacters().length == 0)), maxlength: ("255"), counter: (true), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    let __VLS_49;
    const __VLS_50 = {
        onKeyup: (__VLS_ctx.createParty)
    };
    let __VLS_46;
    let __VLS_47;
    var __VLS_48;
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({}));
    const __VLS_53 = __VLS_52({}, ...__VLS_functionalComponentArgsRest(__VLS_52));
    const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.partyName)), color: ("blue"), ...{ class: ("w-full") }, }));
    const __VLS_59 = __VLS_58({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.partyName)), color: ("blue"), ...{ class: ("w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    let __VLS_63;
    const __VLS_64 = {
        onClick: (__VLS_ctx.createParty)
    };
    let __VLS_60;
    let __VLS_61;
    __VLS_nonNullable(__VLS_62.slots).default;
    var __VLS_62;
    __VLS_nonNullable(__VLS_56.slots).default;
    var __VLS_56;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    if (__VLS_ctx.loading) {
        const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ cols: ("12"), }));
        const __VLS_67 = __VLS_66({ cols: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
        const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({}));
        const __VLS_73 = __VLS_72({}, ...__VLS_functionalComponentArgsRest(__VLS_72));
        const __VLS_77 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{ class: ("d-flex justify-center align-center") }, }));
        const __VLS_79 = __VLS_78({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_78));
        const __VLS_83 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_85 = __VLS_84({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_84));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
        __VLS_nonNullable(__VLS_88.slots).default;
        var __VLS_88;
        const __VLS_89 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_91 = __VLS_90({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_90));
        __VLS_nonNullable(__VLS_94.slots).default;
        var __VLS_94;
        __VLS_nonNullable(__VLS_82.slots).default;
        var __VLS_82;
        __VLS_nonNullable(__VLS_76.slots).default;
        var __VLS_76;
        __VLS_nonNullable(__VLS_70.slots).default;
        var __VLS_70;
    }
    else if (__VLS_ctx.hostedParties.length === 0 && __VLS_ctx.guestOfParties.length === 0) {
        const __VLS_95 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ cols: ("12"), ...{ class: ("text-center grey--text") }, }));
        const __VLS_97 = __VLS_96({ cols: ("12"), ...{ class: ("text-center grey--text") }, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
        __VLS_nonNullable(__VLS_100.slots).default;
        var __VLS_100;
    }
    else {
        const __VLS_101 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ cols: ("12"), }));
        const __VLS_103 = __VLS_102({ cols: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
        const __VLS_107 = __VLS_resolvedLocalAndGlobalComponents.VList;
        /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
        // @ts-ignore
        const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({}));
        const __VLS_109 = __VLS_108({}, ...__VLS_functionalComponentArgsRest(__VLS_108));
        for (const [party] of __VLS_getVForSourceType((__VLS_ctx.hostedParties))) {
            const __VLS_113 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
            /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
            // @ts-ignore
            const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ key: ((party.id)), }));
            const __VLS_115 = __VLS_114({ key: ((party.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { prepend: __VLS_thisSlot } = __VLS_nonNullable(__VLS_118.slots);
                const __VLS_119 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
                /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
                // @ts-ignore
                const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ ...{ class: ("text-h6") }, }));
                const __VLS_121 = __VLS_120({ ...{ class: ("text-h6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_120));
                (party.name);
                __VLS_nonNullable(__VLS_124.slots).default;
                var __VLS_124;
                const __VLS_125 = __VLS_resolvedLocalAndGlobalComponents.VListItemSubtitle;
                /** @type { [typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, ] } */
                // @ts-ignore
                const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({}));
                const __VLS_127 = __VLS_126({}, ...__VLS_functionalComponentArgsRest(__VLS_126));
                (__VLS_ctx.formatDate(party.createdOn));
                (party.partyMembers.length);
                __VLS_nonNullable(__VLS_130.slots).default;
                var __VLS_130;
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { append: __VLS_thisSlot } = __VLS_nonNullable(__VLS_118.slots);
                const __VLS_131 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                // @ts-ignore
                const __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }));
                const __VLS_133 = __VLS_132({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
                let __VLS_137;
                const __VLS_138 = {
                    onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.loading))))
                            return;
                        if (!(!((__VLS_ctx.hostedParties.length === 0 && __VLS_ctx.guestOfParties.length === 0))))
                            return;
                        __VLS_ctx.editParty(party.id);
                    }
                };
                let __VLS_134;
                let __VLS_135;
                __VLS_nonNullable(__VLS_136.slots).default;
                var __VLS_136;
                const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                // @ts-ignore
                const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ ...{ 'onClick': {} }, color: ("red"), small: (true), }));
                const __VLS_141 = __VLS_140({ ...{ 'onClick': {} }, color: ("red"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
                let __VLS_145;
                const __VLS_146 = {
                    onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.loading))))
                            return;
                        if (!(!((__VLS_ctx.hostedParties.length === 0 && __VLS_ctx.guestOfParties.length === 0))))
                            return;
                        __VLS_ctx.deleteParty(party.id);
                    }
                };
                let __VLS_142;
                let __VLS_143;
                __VLS_nonNullable(__VLS_144.slots).default;
                var __VLS_144;
            }
            var __VLS_118;
        }
        __VLS_nonNullable(__VLS_112.slots).default;
        var __VLS_112;
        if (__VLS_ctx.guestOfParties.length > 0) {
            const __VLS_147 = __VLS_resolvedLocalAndGlobalComponents.VList;
            /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
            // @ts-ignore
            const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({}));
            const __VLS_149 = __VLS_148({}, ...__VLS_functionalComponentArgsRest(__VLS_148));
            for (const [party] of __VLS_getVForSourceType((__VLS_ctx.guestOfParties))) {
                const __VLS_153 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
                /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
                // @ts-ignore
                const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ key: ((party.id)), }));
                const __VLS_155 = __VLS_154({ key: ((party.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { prepend: __VLS_thisSlot } = __VLS_nonNullable(__VLS_158.slots);
                    const __VLS_159 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
                    /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
                    // @ts-ignore
                    const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ ...{ class: ("text-h6") }, }));
                    const __VLS_161 = __VLS_160({ ...{ class: ("text-h6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_160));
                    (party.name);
                    __VLS_nonNullable(__VLS_164.slots).default;
                    var __VLS_164;
                    const __VLS_165 = __VLS_resolvedLocalAndGlobalComponents.VListItemSubtitle;
                    /** @type { [typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, ] } */
                    // @ts-ignore
                    const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({}));
                    const __VLS_167 = __VLS_166({}, ...__VLS_functionalComponentArgsRest(__VLS_166));
                    (__VLS_ctx.formatDate(party.createdOn));
                    (party.partyMembers.length);
                    __VLS_nonNullable(__VLS_170.slots).default;
                    var __VLS_170;
                }
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { append: __VLS_thisSlot } = __VLS_nonNullable(__VLS_158.slots);
                    const __VLS_171 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                    // @ts-ignore
                    const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }));
                    const __VLS_173 = __VLS_172({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_172));
                    let __VLS_177;
                    const __VLS_178 = {
                        onClick: (...[$event]) => {
                            if (!(!((__VLS_ctx.loading))))
                                return;
                            if (!(!((__VLS_ctx.hostedParties.length === 0 && __VLS_ctx.guestOfParties.length === 0))))
                                return;
                            if (!((__VLS_ctx.guestOfParties.length > 0)))
                                return;
                            __VLS_ctx.editParty(party.id);
                        }
                    };
                    let __VLS_174;
                    let __VLS_175;
                    __VLS_nonNullable(__VLS_176.slots).default;
                    var __VLS_176;
                }
                var __VLS_158;
            }
            __VLS_nonNullable(__VLS_152.slots).default;
            var __VLS_152;
        }
        __VLS_nonNullable(__VLS_106.slots).default;
        var __VLS_106;
    }
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['party-manager'];
    __VLS_styleScopedClasses['text-h5'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['grey--text'];
    __VLS_styleScopedClasses['text-h6'];
    __VLS_styleScopedClasses['text-h6'];
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
