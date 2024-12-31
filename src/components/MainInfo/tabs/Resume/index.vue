<template>
    <v-expansion-panels variant="accordion" color="primary">
        <v-expansion-panel :title="$t('resume.jobs.title')">
            <v-expansion-panel-text>
                <Jobs />
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel :title="`${$t('resume.academic.title')}/${$t('resume.skills.title')}`">
            <v-expansion-panel-text>
                <h2>Engineer degree (2021)</h2>
                <p>
                    Details: <br />
                    Engineer school ECE Paris 2016-2021 <br />
                    Specilization : "OCRES", Connected Objects, Network and services <br />
                    Semester in London, in Inseec U. London University (2018)
                </p>
                <h2>Skills</h2>
                <h3>Technical Skills</h3>
                <ul class="default-list">
                    <li>Front-end languages : Vue.js and React.js</li>
                    <li>Back-end languages : Node.js</li>
                    <li>Javascript/Typescript</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>Some DevOps notion and eager to learn more (Docker, Kubernetes)</li>
                </ul>
                <h3>Soft Skills</h3>
                <ul class="default-list">
                    <li>Gestion de Projet (Agile)</li>
                </ul>
                <h3>Languages</h3>
                <ul class="default-list">
                    <li>French (Native)</li>
                    <li>English (TOEIC 930)</li>
                    <li>Spanish (scholar level)</li>
                    <li>Portuguese (scholar level)</li>
                </ul>
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