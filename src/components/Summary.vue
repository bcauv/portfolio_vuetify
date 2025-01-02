<template>
  <v-card>
    <v-card-title>
      <v-container class="my-0 py-0">
        <v-row class="d-flex justify-center">
          <v-col cols="auto">
            <v-avatar size="100px">
              <v-img alt="Photo Baptiste Cauvin" src="../assets/photo_prez.jpg" />
            </v-avatar>
          </v-col>
        </v-row>
        <v-row class="ma-1 d-flex justify-center">
          <v-col cols="auto" class="pa-0 px-1">
            Baptiste
          </v-col>
          <v-col cols="auto" class="pa-0 px-1">
            CAUVIN
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
    <v-divider class="mx-4 my-2" thickness="3" />
    <v-card-text>
      <v-container class="mt-0 pt-0 d-flex justify-center flex-column">
        <v-row>
          <v-col cols="auto">
            {{ $t('main.dev_fullstack') }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <b> {{ $t('summary.technical_stack') }} </b>
          </v-col>
        </v-row>
        <v-row v-for="tech in technicalStackArray" class="d-flex justify-start">
          <v-col cols="2">
            <v-icon> {{ tech.icon }} </v-icon>
          </v-col>
          <v-col cols="auto">
            <div> {{ tech.text }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const technicalStackArray = ref([
  {
    icon: "mdi-nodejs",
    link: "https://nodejs.org",
    text: "Node.js"
  },
  {
    icon: "mdi-vuejs",
    link: "https://vuejs.org",
    text: "Vue.js"
  },
  {
    icon: "mdi-language-typescript",
    link: "https://www.typescriptlang.org",
    text: "Typescript"
  },
  {
    icon: "mdi-database-outline",
    link: "https://www.mongodb.com",
    text: "MongoDB"
  },
])
</script>