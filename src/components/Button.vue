<script setup>
import { computed } from "vue"
import { RouterLink } from "vue-router";
import { getButtonColor } from "@/colors.js";
import Icon from "@/components/Icons.vue";

const props = defineProps({
    label: {
        type: [String, Number],
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    iconStyle: {
        type: String,
        default: null
    },
    href: {
        type: String,
        default: null,
    },
    target: {
        type: String,
        default: null,
    },
    to: {
        type: [String, Object],
        default: null,
    },
    type: {
        type: String,
        default: null,
    },
    color: {
        type: String,
        default: "white",
    },
    as: {
        type: String,
        default: null,
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    roundedFull: Boolean,
})

const is = computed(() => {
    if (props.as) {
        return props.as;
    }
    if (props.to) {
        return RouterLink;
    }
    if (props.href) {
        return "a";
    }
    return "button";
});

const computedType = computed(() => {
    if (is.value === "button") {
        return props.type ?? "button";
    }
    return null;
});

const labelClass = computed(() =>
    props.small && props.icon ? "px-1" : "px-2"
);

const componentClass = computed(() => {
    const base = [
        "inline-flex justify-center items-center whitespace-nowrap px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform focus:outline-none focus:ring border",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded-md",
        getButtonColor(props.color, props.outline, !props.disabled, props.active),
    ];
    if (!props.label && props.icon) {
        base.push("p-1");
    } else if (props.small) {
        base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
    } else {
        base.push("py-2", props.roundedFull ? "px-6" : "px-3");
    }
    if (props.disabled) {
        base.push(props.outline ? "opacity-60" : "opacity-80");
    }
    return base;
});

</script>

<template>
    <component :is="is" :class="componentClass" :href="href" :type="computedType" :to="to" :target="target"
        :disabled="disabled">

        <Icon v-if="icon" :icon="props.icon" :class="props.iconStyle" />

        <span v-if="label" :class="labelClass"> {{ label }}</span>

    </component>
</template>