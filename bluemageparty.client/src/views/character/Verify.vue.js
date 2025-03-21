import { defineComponent, ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useCharacterStore } from "@/stores/characterStore";
import { useRouter } from "vue-router";
import apiClient from '@/apiClient';
import { GET_VERIFICATION_CODE_URL, VERIFY_CHARACTER_URL } from "@/constants/api";
export default defineComponent({
    name: "VerifyCharacter",
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();
        const characterStore = useCharacterStore();
        const email = ref(authStore.getEmail() || "");
        const verificationCode = ref("");
        const verified = ref(false);
        const character = ref({
            avatar: "",
            name: "",
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
        const messageType = ref('info');
        const message = ref('');
        const isLoading = ref(false);
        onMounted(() => {
            const selectedCharacter = characterStore.getSelectedCharacter();
            if (selectedCharacter) {
                character.value = selectedCharacter;
                fetchVerificationCode();
            }
            else {
                router.push("/character/search");
            }
        });
        const fetchVerificationCode = async () => {
            try {
                const response = await apiClient.get(GET_VERIFICATION_CODE_URL, {
                    params: { token: authStore.getAuthToken() },
                });
                verificationCode.value = response.data.verificationCode; // No more error
            }
            catch (error) {
                console.error("Error fetching verification code:", error);
            }
        };
        const copyToClipboard = () => {
            navigator.clipboard.writeText(verificationCode.value);
        };
        const verify = async () => {
            if (!isLoading.value) {
                isLoading.value = true;
                try {
                    const payload = {
                        LoadstoneVerificationCode: verificationCode.value,
                        AuthToken: authStore.getAuthToken(),
                        Character: {
                            FirstName: character.value.name.split(' ')[0],
                            LastName: character.value.name.split(' ')[1],
                            World: character.value.server,
                            Title: character.value.title,
                            Avatar: character.value.avatar,
                            LoadstoneCharacterId: character.value.id,
                            Server: character.value.server,
                            ActiveClassJobIcon: character.value.activeClassJobIcon,
                            ActiveClassJobLevel: character.value.activeClassJobLevel,
                            Bio: character.value.bio,
                            FreeCompany: character.value.freeCompany,
                            Gender: character.value.gender,
                            GrandCompanyName: character.value.grandCompanyName,
                            GrandCompanyRank: character.value.grandCompanyRank,
                            GuardianDeityIcon: character.value.guardianDeityIcon,
                            GuardianDeityName: character.value.guardianDeityName,
                            Nameday: character.value.nameday,
                            Portrait: character.value.portrait,
                            PvpTeam: character.value.pvpTeam,
                            Race: character.value.race,
                            RaceClanGender: character.value.raceClanGender,
                            TownIcon: character.value.townIcon,
                            TownName: character.value.townName,
                            Tribe: character.value.tribe,
                        },
                    };
                    const response = await apiClient.post(VERIFY_CHARACTER_URL, payload);
                    if (!response.data.verified) {
                        message.value = "Character verification failed. Please confirm that the verification code is in the character's bio.";
                        messageType.value = 'error';
                        verified.value = false;
                        isLoading.value = false;
                        return;
                    }
                    if (response.data.alreadyVerified) {
                        messageType.value = 'success';
                        message.value = 'This character has already been verified!';
                    }
                    else if (response.data.verified) {
                        characterStore.addVerifiedCharacter(response.data.verifiedCharacter);
                        messageType.value = 'success';
                        message.value = 'Character verification successful!';
                    }
                    verified.value = true;
                }
                catch (error) {
                    message.value = "Character verification failed. Please confirm that the verification code is in the character's bio.";
                    messageType.value = 'error';
                    console.error("Error verifying character:", error);
                }
                isLoading.value = false;
            }
        };
        return {
            email,
            character,
            verificationCode,
            verified,
            copyToClipboard,
            verify,
            messageType,
            message,
            isLoading,
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
    __VLS_styleScopedClasses['character-item'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("pa-4") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("pa-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ justify: ("center"), }));
    const __VLS_9 = __VLS_8({ justify: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ cols: ("12"), md: ("8"), lg: ("6"), }));
    const __VLS_15 = __VLS_14({ cols: ("12"), md: ("8"), lg: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ class: ("elevation-2") }, }));
    const __VLS_21 = __VLS_20({ ...{ class: ("elevation-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({}));
    const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.character.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.email);
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VDivider;
    /** @type { [typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("character-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("character-icon") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.character.avatar)), alt: ((`${__VLS_ctx.character.name} icon`)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("character-details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("character-title") }, });
    (__VLS_ctx.character.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("character-name") }, });
    (__VLS_ctx.character.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("character-server") }, });
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ icon: ("mdi-web"), size: ("small"), }));
    const __VLS_45 = __VLS_44({ icon: ("mdi-web"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    (__VLS_ctx.character.server);
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ label: ("Verification Code"), modelValue: ((__VLS_ctx.verificationCode)), readonly: (true), outlined: (true), }));
    const __VLS_51 = __VLS_50({ label: ("Verification Code"), modelValue: ((__VLS_ctx.verificationCode)), readonly: (true), outlined: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ target: ("_blank"), rel: ("noopener noreferrer"), href: ("https://na.finalfantasyxiv.com/lodestone/my/setting/profile/"), });
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{ class: ("justify-space-between") }, }));
    const __VLS_57 = __VLS_56({ ...{ class: ("justify-space-between") }, }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ 'onClick': {} }, color: ("primary"), outlined: (true), }));
    const __VLS_63 = __VLS_62({ ...{ 'onClick': {} }, color: ("primary"), outlined: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    let __VLS_67;
    const __VLS_68 = {
        onClick: (__VLS_ctx.copyToClipboard)
    };
    let __VLS_64;
    let __VLS_65;
    const __VLS_69 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({ left: (true), icon: ("mdi-content-copy"), }));
    const __VLS_71 = __VLS_70({ left: (true), icon: ("mdi-content-copy"), }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    __VLS_nonNullable(__VLS_66.slots).default;
    var __VLS_66;
    const __VLS_75 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{ 'onClick': {} }, color: ("primary"), }));
    const __VLS_77 = __VLS_76({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    let __VLS_81;
    const __VLS_82 = {
        onClick: (__VLS_ctx.verify)
    };
    let __VLS_78;
    let __VLS_79;
    __VLS_nonNullable(__VLS_80.slots).default;
    var __VLS_80;
    __VLS_nonNullable(__VLS_60.slots).default;
    var __VLS_60;
    if (__VLS_ctx.isLoading) {
        const __VLS_83 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
        /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
        // @ts-ignore
        const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({}));
        const __VLS_85 = __VLS_84({}, ...__VLS_functionalComponentArgsRest(__VLS_84));
        const __VLS_89 = __VLS_resolvedLocalAndGlobalComponents.VRow;
        /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
        // @ts-ignore
        const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ ...{ class: ("d-flex justify-center align-center") }, }));
        const __VLS_91 = __VLS_90({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_90));
        const __VLS_95 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_97 = __VLS_96({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
        __VLS_nonNullable(__VLS_100.slots).default;
        var __VLS_100;
        const __VLS_101 = __VLS_resolvedLocalAndGlobalComponents.VCol;
        /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
        // @ts-ignore
        const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ cols: ("12"), ...{ class: ("text-center") }, }));
        const __VLS_103 = __VLS_102({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_102));
        __VLS_nonNullable(__VLS_106.slots).default;
        var __VLS_106;
        __VLS_nonNullable(__VLS_94.slots).default;
        var __VLS_94;
        __VLS_nonNullable(__VLS_88.slots).default;
        var __VLS_88;
    }
    if (__VLS_ctx.message) {
        const __VLS_107 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
        /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
        // @ts-ignore
        const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ type: ((__VLS_ctx.messageType)), ...{ class: ("mt-4") }, dismissible: (true), }));
        const __VLS_109 = __VLS_108({ type: ((__VLS_ctx.messageType)), ...{ class: ("mt-4") }, dismissible: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
        (__VLS_ctx.message);
        __VLS_nonNullable(__VLS_112.slots).default;
        var __VLS_112;
    }
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['pa-4'];
    __VLS_styleScopedClasses['elevation-2'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['character-item'];
    __VLS_styleScopedClasses['character-icon'];
    __VLS_styleScopedClasses['character-details'];
    __VLS_styleScopedClasses['character-title'];
    __VLS_styleScopedClasses['character-name'];
    __VLS_styleScopedClasses['character-server'];
    __VLS_styleScopedClasses['justify-space-between'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-4'];
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
