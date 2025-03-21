/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, onMounted } from 'vue';
import apiClient from '@/apiClient';
import { useRouter, useRoute } from 'vue-router'; // Import useRoute
import { useAuthStore } from '@/stores/authStore';
import { emailRule, passwordRule } from '@/utils/validationRules';
import { LOGIN_URL } from '@/constants/api';
export default (await import('vue')).defineComponent({
    name: 'Login',
    setup() {
        const email = ref('');
        const password = ref('');
        const message = ref('');
        const alertType = ref('info');
        const isValid = ref(false);
        const isVerified = ref(false); // Add a ref for verified status
        const router = useRouter();
        const route = useRoute(); // Use useRoute to access query parameters
        const authStore = useAuthStore();
        // Check if the URL contains verified=true
        onMounted(() => {
            if (route.query.verified === 'true') {
                message.value = 'Your account has been verified!';
                alertType.value = 'success';
            }
        });
        const forgotPassword = async () => {
            router.push('/resetpasswordrequest');
        };
        const login = async () => {
            if (!isValid.value)
                return;
            try {
                const response = await apiClient.post(LOGIN_URL, {
                    email: email.value,
                    password: password.value,
                });
                if (response.data.auth_token) {
                    authStore.login(response.data.auth_token);
                    authStore.setEmail(response.data.email);
                    authStore.setIsAdmin(response.data.is_admin);
                    authStore.setUserId(response.data.id);
                    alertType.value = 'success';
                    message.value = 'Login successful.';
                    router.push('/'); // Redirect to home page
                }
            }
            catch (error) {
                const errorData = error.response?.data;
                alertType.value = 'error';
                message.value = errorData?.message || 'An error occurred during login.';
                console.error('Login failed:', error);
            }
        };
        return {
            email,
            password,
            message,
            alertType,
            isValid,
            isVerified, // Return isVerified
            login,
            emailRule,
            passwordRule,
            forgotPassword,
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
    if (__VLS_ctx.message || __VLS_ctx.isVerified) {
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
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ title: ("Login"), }));
    const __VLS_33 = __VLS_32({ title: ("Login"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.isValid)), }));
    const __VLS_39 = __VLS_38({ ...{ 'onSubmit': {} }, modelValue: ((__VLS_ctx.isValid)), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    let __VLS_43;
    const __VLS_44 = {
        onSubmit: (__VLS_ctx.login)
    };
    let __VLS_40;
    let __VLS_41;
    const __VLS_45 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    const __VLS_51 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{ 'onKeyup': {} }, label: ("Email"), modelValue: ((__VLS_ctx.email)), type: ("email"), rules: (([__VLS_ctx.emailRule])), required: (true), }));
    const __VLS_53 = __VLS_52({ ...{ 'onKeyup': {} }, label: ("Email"), modelValue: ((__VLS_ctx.email)), type: ("email"), rules: (([__VLS_ctx.emailRule])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    let __VLS_57;
    const __VLS_58 = {
        onKeyup: (__VLS_ctx.login)
    };
    let __VLS_54;
    let __VLS_55;
    var __VLS_56;
    const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ 'onKeyup': {} }, label: ("Password"), modelValue: ((__VLS_ctx.password)), type: ("password"), rules: (([__VLS_ctx.passwordRule])), required: (true), }));
    const __VLS_61 = __VLS_60({ ...{ 'onKeyup': {} }, label: ("Password"), modelValue: ((__VLS_ctx.password)), type: ("password"), rules: (([__VLS_ctx.passwordRule])), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
    let __VLS_65;
    const __VLS_66 = {
        onKeyup: (__VLS_ctx.login)
    };
    let __VLS_62;
    let __VLS_63;
    var __VLS_64;
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ ...{ class: ("justify-space-between") }, }));
    const __VLS_69 = __VLS_68({ ...{ class: ("justify-space-between") }, }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ type: ("submit"), color: ("primary"), disabled: ((!__VLS_ctx.isValid)), }));
    const __VLS_75 = __VLS_74({ type: ("submit"), color: ("primary"), disabled: ((!__VLS_ctx.isValid)), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    __VLS_nonNullable(__VLS_78.slots).default;
    var __VLS_78;
    const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ ...{ 'onClick': {} }, color: ("primary"), }));
    const __VLS_81 = __VLS_80({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    let __VLS_85;
    const __VLS_86 = {
        onClick: (__VLS_ctx.forgotPassword)
    };
    let __VLS_82;
    let __VLS_83;
    __VLS_nonNullable(__VLS_84.slots).default;
    var __VLS_84;
    __VLS_nonNullable(__VLS_72.slots).default;
    var __VLS_72;
    __VLS_nonNullable(__VLS_50.slots).default;
    var __VLS_50;
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
