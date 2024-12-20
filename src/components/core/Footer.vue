<template>
    <v-footer color="structure" :app="true">
        <v-btn v-for="icon in footerIcon" :key="icon.icon" :icon="icon.icon" class="ma-0 pa-0" variant="text"
            :href="icon.link" />
    </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const footerIcon = ref([
    // {
    //     icon: 'mdi-facebook',
    //     link: ""
    // },
    // {
    //     icon: 'mdi-twitter',
    //     link: ""
    // },
    {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/baptistecauvin/"
    },
    {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/baptiste_cauvin/"
    }
])
</script>