import axios from "axios";
import { defineComponent } from "vue";
import { UPDATE_SPELL_OWNED_URL } from "@/constants/api";
export default defineComponent({
    props: {
        spells: {
            type: Array,
            required: true,
        },
        characterId: {
            type: String,
            required: true,
        },
        showOwnedColumn: {
            type: Boolean,
            default: false,
        },
        missingSpells: {
            type: Array,
            default: () => [],
        },
    },
    emits: ["spell-updated"], // Define the custom event
    setup(props, { emit }) {
        // Determine if a spell is owned by the character
        const isSpellOwned = (spellId) => {
            return !props.missingSpells?.some((spell) => spell.id === spellId);
        };
        // Handle checkbox state change
        const handleCheckboxChange = async (spell, isChecked) => {
            console.log("handleCheckBoxChange triggered");
            try {
                await axios.post(UPDATE_SPELL_OWNED_URL, {
                    spellId: spell.id,
                    characterId: props.characterId,
                    owned: isChecked,
                });
                emit("spell-updated", {
                    spellId: spell.id,
                    owned: isChecked,
                    characterId: props.characterId,
                });
            }
            catch (error) {
                console.error("Error updating spell ownership:", error);
            }
        };
        return { isSpellOwned, handleCheckboxChange };
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VTable;
    /** @type { [typeof __VLS_components.VTable, typeof __VLS_components.vTable, typeof __VLS_components.VTable, typeof __VLS_components.vTable, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-left") }, });
    if (__VLS_ctx.showOwnedColumn) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("text-left") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [spell] of __VLS_getVForSourceType((__VLS_ctx.spells))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((spell.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (spell.number);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VImg;
        /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.vImg, ] } */
        // @ts-ignore
        const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ src: ((spell.icon)), ...{ class: ("spell-sprite") }, width: ("42px"), }));
        const __VLS_9 = __VLS_8({ src: ((spell.icon)), ...{ class: ("spell-sprite") }, width: ("42px"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (spell.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        for (const [source] of __VLS_getVForSourceType((spell.sources))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((source.enemy)), });
            (source.enemy);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        for (const [source] of __VLS_getVForSourceType((spell.sources))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((source.location)), });
            (source.location);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (spell.patch);
        if (__VLS_ctx.showOwnedColumn) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
            /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
            // @ts-ignore
            const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ 'onChange': {} }, inputValue: ((__VLS_ctx.isSpellOwned(spell.id))), color: ("primary"), }));
            const __VLS_15 = __VLS_14({ ...{ 'onChange': {} }, inputValue: ((__VLS_ctx.isSpellOwned(spell.id))), color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
            let __VLS_19;
            const __VLS_20 = {
                onChange: ((value) => __VLS_ctx.handleCheckboxChange(spell, value))
            };
            let __VLS_16;
            let __VLS_17;
            var __VLS_18;
        }
    }
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['spell-sprite'];
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
