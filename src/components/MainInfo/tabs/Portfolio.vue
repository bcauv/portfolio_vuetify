<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="auto">
        <v-icon size="80"> mdi-account-hard-hat</v-icon>
      </v-col>
      <v-col cols="auto" class="mt-4">
        <h1>Work in progress</h1>
      </v-col>
      <v-col cols="auto" class="mt-n2">
        <Clock svgHeight="100px" svgWidth="100px" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Clock from '@/assets/Clock.vue';
</script>