/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import apiClient from '@/apiClient';
import { RESET_PASSWORD_URL } from '@/constants/api';
import { passwordRule, confirmPasswordRule } from '@/utils/validationRules';
import { useRoute, useRouter } from 'vue-router'; // Import useRoute
export default (await import('vue')).defineComponent({
    name: 'ResetPassword',
    setup() {
        const newPassword = ref('');
        const confirmPassword = ref('');
        const message = ref('');
        const alertType = ref('info');
        const isValid = ref(false);
        const isResetting = ref(false);
        const route = useRoute();
        const router = useRouter();
        const token = ref('');
        onMounted(() => {
            if (route.query.token) {
                token.value = route.query.token;
            }
            else {
                router.push('/login');
            }
        });
        const resetPassword = async () => {
            if (!isValid.value || isResetting.value)
                return;
            isResetting.value = true;
            try {
                const response = await apiClient.post(RESET_PASSWORD_URL, {
                    Password: newPassword.value,
                    Token: token.value
                });
                alertType.value = 'success';
                message.value = 'Password reset successfully.';
                console.log('Reset Password response:', response.data.message);
            }
            catch (error) {
                const errorData = error.response?.data;
                alertType.value = 'error';
                message.value = errorData?.message || 'There was a problem resetting your password.';
                console.error('Password reset failed:', error);
            }
            finally {
                isResetting.value = false;
            }
        };
        return {
            newPassword,
            confirmPassword,
            message,
            alertType,
            isValid,
            resetPassword,
            passwordRule,
            confirmPasswordRule: confirmPasswordRule(() => newPassword.value)
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
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ type: ((__VLS_ctx.alertType)), dismissible: (true), }));
        const __VLS_27 = __VLS_26({ type: ((__VLS_ctx.alertType)), dismissible: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        (__VLS_ctx.message);
        __VLS_nonNullable(__VLS_30.slots).default;
        var __VLS_30;
    }
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ title: ("Reset Password"), }));
    const __VLS_33 = __VLS_32({ title: ("Reset Password"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ modelValue: ((__VLS_ctx.isValid)), }));
    const __VLS_39 = __VLS_38({ modelValue: ((__VLS_ctx.isValid)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
    const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ label: ("New Password"), modelValue: ((__VLS_ctx.newPassword)), type: ("password"), rules: (([__VLS_ctx.passwordRule])), required: (true), }));
    const __VLS_51 = __VLS_50({ label: ("New Password"), modelValue: ((__VLS_ctx.newPassword)), type: ("password"), rules: (([__VLS_ctx.passwordRule])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ label: ("Confirm Password"), modelValue: ((__VLS_ctx.confirmPassword)), type: ("password"), rules: (([__VLS_ctx.confirmPasswordRule])), required: (true), }));
    const __VLS_57 = __VLS_56({ label: ("Confirm Password"), modelValue: ((__VLS_ctx.confirmPassword)), type: ("password"), rules: (([__VLS_ctx.confirmPasswordRule])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({}));
    const __VLS_63 = __VLS_62({}, ...__VLS_functionalComponentArgsRest(__VLS_62));
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{ 'onClick': {} }, color: ("primary"), disabled: ((!__VLS_ctx.isValid)), }));
    const __VLS_69 = __VLS_68({ ...{ 'onClick': {} }, color: ("primary"), disabled: ((!__VLS_ctx.isValid)), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    let __VLS_73;
    const __VLS_74 = {
        onClick: (__VLS_ctx.resetPassword)
    };
    let __VLS_70;
    let __VLS_71;
    __VLS_nonNullable(__VLS_72.slots).default;
    var __VLS_72;
    __VLS_nonNullable(__VLS_66.slots).default;
    var __VLS_66;
    __VLS_nonNullable(__VLS_48.slots).default;
    var __VLS_48;
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
