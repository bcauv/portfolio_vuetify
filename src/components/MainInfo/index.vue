<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="aboutme"> {{ $t('home.aboutme') }} </v-tab>
      <v-tab value="resume"> {{ $t('home.resume') }} </v-tab>
      <v-tab value="portfolio"> {{ $t('home.portfolio') }} </v-tab>
    </v-tabs>
    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="aboutme">
          <AboutMe />
        </v-tabs-window-item>
        <v-tabs-window-item value="resume">
          <Resume />
        </v-tabs-window-item>
        <v-tabs-window-item value="portfolio">
          <Portfolio />
        </v-tabs-window-item>

      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref("aboutme")
</script>