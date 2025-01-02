<template>
  <v-expansion-panels variant="accordion" color="primary">
    <v-expansion-panel :title="$t('resume.projects.pimpMyApp.title')">
      <v-expansion-panel-text>
        <p v-for="d in $tm('resume.projects.pimpMyApp.description')">
          {{ d }}
        </p>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="$t('resume.projects.feetBack.title')">
      <v-expansion-panel-text>
        <h3>{{ $t('resume.projects.feetBack.schoolProject') }}</h3>
        <p v-for="d in $tm('resume.projects.feetBack.description')">
          {{ d }}
        </p>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="$t('resume.projects.armOfHearing.title')">
      <v-expansion-panel-text>
        <h3>{{ $t('resume.projects.armOfHearing.schoolProject') }}</h3>
        <p v-for="d in $tm('resume.projects.armOfHearing.description')">
          {{ d }}
        </p>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>