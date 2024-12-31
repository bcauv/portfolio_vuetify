<template>
  <v-expansion-panels variant="accordion" color="primary">
    <v-expansion-panel title="2022-2024 BNP Paribas/Solutec">
      <v-expansion-panel-text>
        <h3>{{ $t('main.dev_fullstack') }}</h3>
        <p>{{ $t('resume.bnp.description', { role: $t('main.dev_fullstack') }) }}</p>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel title="2021 Eatic">
      <v-expansion-panel-text>
        <h3>{{ $t('main.internship') }}</h3>
        <p>{{ $t('resume.bnp.description', { role: $t('main.dev_fullstack') }) }}</p>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>