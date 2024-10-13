<template>
    <v-footer color="structure">
        <div>
            <v-btn v-for="icon in footerIcon" :key="icon.icon" :icon="icon.icon" class="mx-4" variant="text"
                :href="icon.link" />
        </div>
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