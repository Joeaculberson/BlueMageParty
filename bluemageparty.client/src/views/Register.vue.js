import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { REGISTER_URL } from "@/constants/api";
import { useAuthStore } from '@/stores/authStore';
import { emailRule, passwordRule, confirmPasswordRule } from '@/utils/validationRules';
export default defineComponent({
    name: "Register",
    setup() {
        const email = ref("");
        const password = ref("");
        const confirmPassword = ref("");
        const message = ref("");
        const isValid = ref(false);
        const isVerifying = ref(false);
        const router = useRouter();
        const authStore = useAuthStore();
        // Confirm password rule depends on the current password value
        const confirmPasswordValidation = confirmPasswordRule(() => password.value);
        // Register method
        const register = async () => {
            try {
                // Only proceed if the form is valid
                if (!isValid.value)
                    return;
                if (isVerifying.value)
                    return; // Prevent double clicks
                isVerifying.value = true;
                const response = await axios.post(REGISTER_URL, {
                    email: email.value,
                    password: password.value,
                });
                // Store email in Pinia
                authStore.setEmail(email.value);
                // Handle success
                console.log("Registration successful:", response.data);
                router.push('/verify?emailsent=true');
            }
            catch (error) {
                message.value = error.response?.data?.message || "Registration failed";
            }
            finally {
                isVerifying.value = false;
            }
        };
        const goToResendActivationEmail = async () => router.push('/ResendActivationEmail');
        return {
            email,
            password,
            confirmPassword,
            message,
            isValid,
            register,
            goToResendActivationEmail,
            emailRule,
            passwordRule,
            confirmPasswordRule,
            confirmPasswordValidation
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
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    if (__VLS_ctx.message) {
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
        /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ type: ("error"), dismissible: (true), }));
        const __VLS_27 = __VLS_26({ type: ("error"), dismissible: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        (__VLS_ctx.message);
        __VLS_nonNullable(__VLS_30.slots).default;
        var __VLS_30;
    }
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ title: ("Register"), }));
    const __VLS_33 = __VLS_32({ title: ("Register"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.isValid)), }));
    const __VLS_39 = __VLS_38({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.isValid)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    let __VLS_43;
    const __VLS_44 = {
        onSubmit: (__VLS_ctx.register)
    };
    let __VLS_40;
    let __VLS_41;
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ modelValue: ((__VLS_ctx.email)), label: ("Email"), type: ("email"), rules: (([__VLS_ctx.emailRule])), required: (true), }));
    const __VLS_53 = __VLS_52({ modelValue: ((__VLS_ctx.email)), label: ("Email"), type: ("email"), rules: (([__VLS_ctx.emailRule])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    const __VLS_57 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ modelValue: ((__VLS_ctx.password)), label: ("Password"), type: ("password"), rules: (([__VLS_ctx.passwordRule])), required: (true), }));
    const __VLS_59 = __VLS_58({ modelValue: ((__VLS_ctx.password)), label: ("Password"), type: ("password"), rules: (([__VLS_ctx.passwordRule])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    const __VLS_63 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ ...{ 'onKeydown': {} }, modelValue: ((__VLS_ctx.confirmPassword)), label: ("Confirm Password"), type: ("password"), rules: (([__VLS_ctx.confirmPasswordValidation])), required: (true), }));
    const __VLS_65 = __VLS_64({ ...{ 'onKeydown': {} }, modelValue: ((__VLS_ctx.confirmPassword)), label: ("Confirm Password"), type: ("password"), rules: (([__VLS_ctx.confirmPasswordValidation])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    let __VLS_69;
    const __VLS_70 = {
        onKeydown: (__VLS_ctx.register)
    };
    let __VLS_66;
    let __VLS_67;
    var __VLS_68;
    __VLS_nonNullable(__VLS_50.slots).default;
    var __VLS_50;
    const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
    // @ts-ignore
    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{ class: ("justify-space-between") }, }));
    const __VLS_73 = __VLS_72({ ...{ class: ("justify-space-between") }, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
    const __VLS_77 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.isValid)), color: ("primary"), }));
    const __VLS_79 = __VLS_78({ ...{ 'onClick': {} }, disabled: ((!__VLS_ctx.isValid)), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
    let __VLS_83;
    const __VLS_84 = {
        onClick: (__VLS_ctx.register)
    };
    let __VLS_80;
    let __VLS_81;
    __VLS_nonNullable(__VLS_82.slots).default;
    var __VLS_82;
    const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ ...{ 'onClick': {} }, color: ("primary"), }));
    const __VLS_87 = __VLS_86({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    let __VLS_91;
    const __VLS_92 = {
        onClick: (__VLS_ctx.goToResendActivationEmail)
    };
    let __VLS_88;
    let __VLS_89;
    __VLS_nonNullable(__VLS_90.slots).default;
    var __VLS_90;
    __VLS_nonNullable(__VLS_76.slots).default;
    var __VLS_76;
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
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
    __VLS_styleScopedClasses['justify-space-between'];
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
