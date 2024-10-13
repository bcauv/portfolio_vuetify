<template>
    <v-container class="fill-height">
        <v-app-bar :elevation="2" color="structure">
            <v-app-bar-title>My portfolio in vuetify</v-app-bar-title>
            <v-spacer />

            <v-switch v-model="themeToggle" class="mx-2" inset hide-details false-icon="mdi-white-balance-sunny"
                true-icon="mdi-weather-night" @click="toggleSwitch" />
        </v-app-bar>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTheme } from 'vuetify'
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
const theme = useTheme()

const themeToggle = ref(true)

const toggleSwitch = () => {
    theme.global.name.value = themeToggle.value ? 'light' : 'dark'
    cookies.set("theme", theme.global.name.value);
}
const setup = () => {
    let themeCookie = cookies.get("theme");
    theme.global.name.value = themeCookie ?? "dark"
    themeToggle.value = theme.global.name.value === "dark" ? true : false
    cookies.set("theme", theme.global.name.value);
}
onMounted(() => {
    setup()
})
</script>