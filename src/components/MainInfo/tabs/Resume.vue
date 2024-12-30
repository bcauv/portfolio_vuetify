<template>
  <v-expansion-panels variant="accordion" color="primary">
    <v-expansion-panel :title="$t('resume.jobs')">
      <v-expansion-panel-text>
        <Jobs />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="`${$t('resume.academic')}/${$t('resume.skills')}`">
      <v-expansion-panel-text>
        <p>Engineer school ECE Paris 2016-2021</p>
        <p>French (Native), English, Portuguese, Spanish</p>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="$t('resume.projects')">
      <v-expansion-panel-text>
        <Projects />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="$t('resume.hobbies')">
      <v-expansion-panel-text>
        Sport, tennis, coding, travels, films, music, video games
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>