<template>
  <v-card>
    <v-tabs v-model="tab" align-tabs="end">
      <v-tab value="aboutme" variant="tonal"> {{ $t('home.aboutme') }} </v-tab>
      <v-tab value="resume" variant="tonal"> {{ $t('home.resume') }} </v-tab>
      <v-tab value="portfolio" variant="tonal"> {{ $t('home.portfolio') }} </v-tab>
      <v-tab value="siteinfo" variant="tonal"> {{ $t('home.siteinfo') }} </v-tab>
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
        <v-tabs-window-item value="siteinfo">
          <SiteInfo />
        </v-tabs-window-item>

      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref("aboutme")
</script>