<template>
  <v-card>
    <v-card-title>
      <v-container class="my-0 py-0">
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
    <v-divider class="mx-4 my-2" />
    <v-card-text>
      <v-container class="mt-0 pt-0 d-flex justify-center flex-column">
        <v-row>
          <v-col cols="auto">
            Developper Web Fullstack
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="auto">
            <b> {{ $t('summary.technical_stack') }} </b>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Vue js <br />
            Node js <br />
            Typescript <br />
            Mongo <br />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
</script>