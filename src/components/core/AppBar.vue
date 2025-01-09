<template>
  <v-container>
    <v-app-bar :elevation="2" color="structure">
      <v-app-bar-title><v-img :width="75" aspect-ratio="1/1" alt="Logo" src="/logo_no_bg.png"
          title="Logo"></v-img></v-app-bar-title>
      <v-spacer />
      <label title="Language" aria-label="Language">
        <select v-model="$i18n.locale" @change="handleLanguageChange($i18n.locale)" :class="[
          'custom-select rounded pa-2 pe-8',
          `bg-${backgroundColor}`,
          `text-${textColor}`,
          theme.global.current.value.dark ? 'dark-border' : 'light-border'
        ]">
          <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
            {{ locale }}
          </option>
        </select>
      </label>
      <v-switch v-model="themeToggle" title="Switch Dark/Light mode" class="mx-2" inset hide-details
        false-icon="mdi-white-balance-sunny" true-icon="mdi-weather-night" @click="toggleSwitch" />
      <div class="snowflakes" aria-hidden="true">
        <div v-for="n in 50" :key="`snowflake-${n}`" class="snowflake" :style="generateSnowflakeStyle()">
          {{ n % 2 === 0 ? '❅' : '❆' }}
        </div>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTheme } from 'vuetify'
import { useCookies } from "vue3-cookies";
import { useI18n } from 'vue-i18n'

const { cookies } = useCookies();
const theme = useTheme()
const { locale, availableLocales } = useI18n()

const themeToggle = ref(true)
const backgroundColor = 'structure'
const textColor = 'letters'

// Add language handling
const handleLanguageChange = (newLocale: string) => {
  cookies.set("lang", newLocale);
}
const toggleSwitch = () => {
  theme.global.name.value = themeToggle.value ? 'light' : 'dark'
  cookies.set("theme", theme.global.name.value);
}
const generateSnowflakeStyle = () => {
  // TODO see why there is a delay between the first wave of snow and the second
  // TODO add date detection to stop falling after the end of winter
  const left = Math.random() * 100;
  const duration = Math.random() * 10 + 5; // 5s to 15s
  const delay = Math.random() / 5;
  return {
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };
};
const setup = () => {
  // Theme Setup
  let themeCookie = cookies.get("theme");
  theme.global.name.value = themeCookie ?? "dark"
  themeToggle.value = theme.global.name.value === "dark" ? true : false
  cookies.set("theme", theme.global.name.value);
  // Language Setup
  const savedLanguage = cookies.get("lang");
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
}
onMounted(() => {
  setup()
})
</script>
<style scoped>
.custom-select {
  border-width: 2px;
  border-style: solid;
  appearance: none;
  background: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E') no-repeat right 0.5rem center;
  background-size: 0.65em auto;
}

.light-border {
  border-color: rgba(0, 0, 0, 0.3);
  /* Subtle dark border for light mode */
}

.dark-border {
  border-color: rgba(255, 255, 255, 0.3);
  /* Subtle light border for dark mode */
}

.snowflakes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.snowflake {
  position: absolute;
  top: -10px;
  color: white;
  font-size: 1em;
  user-select: none;
  animation: fall linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0);
  }

  100% {
    transform: translateY(100vh) translateX(50vh);
  }
}
</style>