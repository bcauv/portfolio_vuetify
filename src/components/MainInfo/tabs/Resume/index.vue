<template>
    <v-expansion-panels variant="accordion" color="primary">
        <v-expansion-panel :title="$t('resume.jobs.title')">
            <v-expansion-panel-text>
                <Jobs />
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel :title="`${$t('resume.academic.title')}/${$t('resume.skills.title')}`">
            <v-expansion-panel-text>
                <p>Engineer school ECE Paris 2016-2021</p>
                <p>French (Native), English, Portuguese, Spanish</p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel :title="$t('resume.projects.title')">
            <v-expansion-panel-text>
                <Projects />
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel :title="$t('resume.hobbies.title')">
            <v-expansion-panel-text>
                Sport, tennis, coding, travels, films, music, video games
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>