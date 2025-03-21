import { defineComponent, onMounted } from 'vue';
import { handleDiscordCallback } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import apiClient from '@/apiClient';
import { GET_LOGIN_RESPONSE } from '@/constants/api';
export default defineComponent({
    name: 'DiscordCallback',
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();
        const getUser = async (token) => {
            try {
                const response = await apiClient.get(GET_LOGIN_RESPONSE, {
                    params: { jwt: token },
                });
                if (response.data) {
                    return response.data;
                }
                else {
                    console.log('Error fetching user data.');
                    return null;
                }
            }
            catch (error) {
                console.error('Error fetching user data:', error);
                return null;
            }
        };
        onMounted(async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            if (code) {
                try {
                    const { token } = await handleDiscordCallback(code);
                    authStore.login(token); // Store the JWT
                    const user = await getUser(token);
                    if (user) {
                        authStore.setEmail(user.email);
                        authStore.setIsAdmin(user.isAdmin);
                        authStore.setUserId(user.id);
                    }
                    // Redirect to the stored URL or fallback to the default route
                    const redirectUrl = localStorage.getItem('redirectUrl');
                    if (redirectUrl) {
                        localStorage.removeItem('redirectUrl'); // Clear the stored URL
                        router.push(redirectUrl); // Redirect to the original page
                    }
                    else {
                        router.push('/character/search'); // Fallback to the default route
                    }
                }
                catch (error) {
                    console.error('Error during Discord callback:', error);
                    router.push('/login'); // Redirect to login on error
                }
            }
            else {
                router.push('/login'); // Redirect to login if no code
            }
        });
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("d-flex justify-center align-center") }, ...{ style: ({}) }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("d-flex justify-center align-center") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("d-flex justify-center align-center") }, }));
    const __VLS_9 = __VLS_8({ ...{ class: ("d-flex justify-center align-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ cols: ("12"), ...{ class: ("text-center") }, }));
    const __VLS_15 = __VLS_14({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/seifer-panic.gif"), width: ("128"), alt: ("Loading"), });
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ cols: ("12"), ...{ class: ("text-center") }, }));
    const __VLS_21 = __VLS_20({ cols: ("12"), ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
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
