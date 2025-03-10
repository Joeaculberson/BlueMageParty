import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
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
                const response = await axios.get(GET_PARTIES_BY_USER_ID_URL, {
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
                const response = await axios.post(CREATE_PARTY_URL, {
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
                await axios.delete(DELETE_PARTY_URL, { params: { partyId } });
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
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ modelValue: ((__VLS_ctx.partyName)), label: ("Enter party name"), disabled: ((__VLS_ctx.characterStore.getVerifiedCharacters().length == 0)), maxlength: ("255"), counter: (true), outlined: (true), dense: (true), }));
    const __VLS_45 = __VLS_44({ modelValue: ((__VLS_ctx.partyName)), label: ("Enter party name"), disabled: ((__VLS_ctx.characterStore.getVerifiedCharacters().length == 0)), maxlength: ("255"), counter: (true), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({}));
    const __VLS_51 = __VLS_50({}, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.partyName)), color: ("blue"), ...{ class: ("w-full") }, }));
    const __VLS_57 = __VLS_56({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.partyName)), color: ("blue"), ...{ class: ("w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    let __VLS_61;
    const __VLS_62 = {
        onClick: (__VLS_ctx.createParty)
    };
    let __VLS_58;
    let __VLS_59;
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    __VLS_nonNullable(__VLS_54.slots).default;
    var __VLS_54;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    if (__VLS_ctx.loading) {
        const __VLS_63 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ cols: ("12"), }));
        const __VLS_65 = __VLS_64({ cols: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
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
        __VLS_nonNullable(__VLS_68.slots).default;
        var __VLS_68;
    }
    else if (__VLS_ctx.hostedParties.length === 0 && __VLS_ctx.guestOfParties.length === 0) {
        const __VLS_93 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ cols: ("12"), ...{ class: ("text-center grey--text") }, }));
        const __VLS_95 = __VLS_94({ cols: ("12"), ...{ class: ("text-center grey--text") }, }, ...__VLS_functionalComponentArgsRest(__VLS_94));
        __VLS_nonNullable(__VLS_98.slots).default;
        var __VLS_98;
    }
    else {
        const __VLS_99 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ cols: ("12"), }));
        const __VLS_101 = __VLS_100({ cols: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
        const __VLS_105 = __VLS_resolvedLocalAndGlobalComponents.VList;
        /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
        // @ts-ignore
        const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({}));
        const __VLS_107 = __VLS_106({}, ...__VLS_functionalComponentArgsRest(__VLS_106));
        for (const [party] of __VLS_getVForSourceType((__VLS_ctx.hostedParties))) {
            const __VLS_111 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
            /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
            // @ts-ignore
            const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({ key: ((party.id)), }));
            const __VLS_113 = __VLS_112({ key: ((party.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { prepend: __VLS_thisSlot } = __VLS_nonNullable(__VLS_116.slots);
                const __VLS_117 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
                /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
                // @ts-ignore
                const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{ class: ("text-h6") }, }));
                const __VLS_119 = __VLS_118({ ...{ class: ("text-h6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_118));
                (party.name);
                __VLS_nonNullable(__VLS_122.slots).default;
                var __VLS_122;
                const __VLS_123 = __VLS_resolvedLocalAndGlobalComponents.VListItemSubtitle;
                /** @type { [typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, ] } */
                // @ts-ignore
                const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({}));
                const __VLS_125 = __VLS_124({}, ...__VLS_functionalComponentArgsRest(__VLS_124));
                (__VLS_ctx.formatDate(party.createdOn));
                (party.partyMembers.length);
                __VLS_nonNullable(__VLS_128.slots).default;
                var __VLS_128;
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
            {
                const { append: __VLS_thisSlot } = __VLS_nonNullable(__VLS_116.slots);
                const __VLS_129 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                // @ts-ignore
                const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }));
                const __VLS_131 = __VLS_130({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
                let __VLS_135;
                const __VLS_136 = {
                    onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.loading))))
                            return;
                        if (!(!((__VLS_ctx.hostedParties.length === 0 && __VLS_ctx.guestOfParties.length === 0))))
                            return;
                        __VLS_ctx.editParty(party.id);
                    }
                };
                let __VLS_132;
                let __VLS_133;
                __VLS_nonNullable(__VLS_134.slots).default;
                var __VLS_134;
                const __VLS_137 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                // @ts-ignore
                const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({ ...{ 'onClick': {} }, color: ("red"), small: (true), }));
                const __VLS_139 = __VLS_138({ ...{ 'onClick': {} }, color: ("red"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_138));
                let __VLS_143;
                const __VLS_144 = {
                    onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.loading))))
                            return;
                        if (!(!((__VLS_ctx.hostedParties.length === 0 && __VLS_ctx.guestOfParties.length === 0))))
                            return;
                        __VLS_ctx.deleteParty(party.id);
                    }
                };
                let __VLS_140;
                let __VLS_141;
                __VLS_nonNullable(__VLS_142.slots).default;
                var __VLS_142;
            }
            var __VLS_116;
        }
        __VLS_nonNullable(__VLS_110.slots).default;
        var __VLS_110;
        if (__VLS_ctx.guestOfParties.length > 0) {
            const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.VList;
            /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */
            // @ts-ignore
            const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({}));
            const __VLS_147 = __VLS_146({}, ...__VLS_functionalComponentArgsRest(__VLS_146));
            for (const [party] of __VLS_getVForSourceType((__VLS_ctx.guestOfParties))) {
                const __VLS_151 = __VLS_resolvedLocalAndGlobalComponents.VListItem;
                /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */
                // @ts-ignore
                const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ key: ((party.id)), }));
                const __VLS_153 = __VLS_152({ key: ((party.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { prepend: __VLS_thisSlot } = __VLS_nonNullable(__VLS_156.slots);
                    const __VLS_157 = __VLS_resolvedLocalAndGlobalComponents.VListItemTitle;
                    /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */
                    // @ts-ignore
                    const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({ ...{ class: ("text-h6") }, }));
                    const __VLS_159 = __VLS_158({ ...{ class: ("text-h6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_158));
                    (party.name);
                    __VLS_nonNullable(__VLS_162.slots).default;
                    var __VLS_162;
                    const __VLS_163 = __VLS_resolvedLocalAndGlobalComponents.VListItemSubtitle;
                    /** @type { [typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, ] } */
                    // @ts-ignore
                    const __VLS_164 = __VLS_asFunctionalComponent(__VLS_163, new __VLS_163({}));
                    const __VLS_165 = __VLS_164({}, ...__VLS_functionalComponentArgsRest(__VLS_164));
                    (__VLS_ctx.formatDate(party.createdOn));
                    (party.partyMembers.length);
                    __VLS_nonNullable(__VLS_168.slots).default;
                    var __VLS_168;
                }
                __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
                {
                    const { append: __VLS_thisSlot } = __VLS_nonNullable(__VLS_156.slots);
                    const __VLS_169 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
                    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
                    // @ts-ignore
                    const __VLS_170 = __VLS_asFunctionalComponent(__VLS_169, new __VLS_169({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }));
                    const __VLS_171 = __VLS_170({ ...{ 'onClick': {} }, color: ("warning"), small: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_170));
                    let __VLS_175;
                    const __VLS_176 = {
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
                    let __VLS_172;
                    let __VLS_173;
                    __VLS_nonNullable(__VLS_174.slots).default;
                    var __VLS_174;
                }
                var __VLS_156;
            }
            __VLS_nonNullable(__VLS_150.slots).default;
            var __VLS_150;
        }
        __VLS_nonNullable(__VLS_104.slots).default;
        var __VLS_104;
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
