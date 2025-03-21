/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref } from 'vue';
import apiClient from '@/apiClient';
import { useAuthStore } from '@/stores/authStore';
import { SAVE_SPELLS_BULK_URL, GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL, } from '@/constants/api';
export default (await import('vue')).defineComponent({
    setup() {
        const authStore = useAuthStore();
        const drawer = ref(false);
        const router = useRouter();
        const alertType = ref('info');
        const adminMessage = ref('');
        // Fetch and save spells in bulk from external API
        const fetchAndSaveSpells = async () => {
            try {
                // Fetch the spell data from the external API
                const response = await apiClient.get(GET_TARO_BOKOKINGWAY_MISSING_SPELLS_URL);
                const spellsToSave = response.data.map((spell) => ({
                    number: spell.order,
                    name: spell.name,
                    description: spell.description,
                    tooltip: spell.tooltip,
                    order: spell.order,
                    rank: spell.rank,
                    patch: spell.patch,
                    icon: spell.icon,
                    typeName: spell.type.name,
                    aspectName: spell.aspect.name,
                    sources: spell.sources.map((source) => {
                        const parts = source.text.split('/').map((part) => part.trim());
                        return {
                            enemy: parts.length > 1 ? parts[0] : '',
                            location: parts.length > 1 ? parts[1] : parts[0],
                        };
                    }),
                }));
                // Send the spells data in bulk to the server
                const bulkResponse = await apiClient.post(SAVE_SPELLS_BULK_URL, spellsToSave, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                alertType.value = 'success';
                adminMessage.value = bulkResponse.data.message;
            }
            catch (error) {
                alertType.value = 'error';
                adminMessage.value = 'Failed to fetch or save spells.';
                console.error('Error response:', error.response?.data || error.message);
            }
        };
        return {
            fetchAndSaveSpells,
            adminMessage,
            alertType
        };
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    if (__VLS_ctx.adminMessage) {
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VAlert;
        /** @type { [typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ type: ((__VLS_ctx.alertType)), dismissible: (true), }));
        const __VLS_9 = __VLS_8({ type: ((__VLS_ctx.alertType)), dismissible: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        (__VLS_ctx.adminMessage);
        __VLS_nonNullable(__VLS_12.slots).default;
        var __VLS_12;
    }
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ 'onClick': {} }, color: ("primary"), }));
    const __VLS_15 = __VLS_14({ ...{ 'onClick': {} }, color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    let __VLS_19;
    const __VLS_20 = {
        onClick: (__VLS_ctx.fetchAndSaveSpells)
    };
    let __VLS_16;
    let __VLS_17;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
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
