<template>
  <v-expansion-panels variant="accordion" color="primary">
    <v-expansion-panel :title="$t('resume.jobs.title')">
      <v-expansion-panel-text>
        <Jobs />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="`${$t('resume.academic.title')}/${$t('resume.skills.title')}`">
      <v-expansion-panel-text>
        <Academics />
        <Skills />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="$t('resume.projects.title')">
      <v-expansion-panel-text>
        <Projects />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel :title="$t('resume.hobbies.title')">
      <v-expansion-panel-text>
        <ul>
          <li v-for="hobby in $tm('resume.hobbies.list')">
            {{ hobby }}
          </li>
        </ul>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>