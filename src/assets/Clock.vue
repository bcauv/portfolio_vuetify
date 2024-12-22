<template>
    <svg :height="svgHeight" :width="svgWidth" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
        <rect width="16" height="16" x="4" y="4" stroke="#0A0A30" stroke-width="1.5" rx="8" />
        <path stroke="#0A0A30" stroke-linecap="round" stroke-width="1.5" d="M12.021 12l2.325 2.325" />
        <path stroke="#265BFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.021 12V6.84"
            style="animation:rotate 2s linear infinite both;transform-origin:center" />
    </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    svgHeight: {
        type: String,
        default: '24px'
    },
    svgWidth: {
        type: String,
        default: '24px'
    }
});
</script>

<style>
@keyframes rotate {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}
</style>