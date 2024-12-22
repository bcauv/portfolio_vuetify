<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="aboutme"> {{ $t('home.aboutme') }} </v-tab>
      <v-tab value="resume"> {{ $t('home.resume') }} </v-tab>
      <v-tab value="portfolio"> {{ $t('home.portfolio') }} </v-tab>
    </v-tabs>
    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="aboutme">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.<br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. <br />
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? <br />
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
          illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </v-tabs-window-item>
        <v-tabs-window-item value="resume">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.<br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. <br />
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? <br />
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
          illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </v-tabs-window-item>
        <v-tabs-window-item value="portfolio">
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
        </v-tabs-window-item>

      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Clock from '@/assets/Clock.vue';
const tab = ref("aboutme")
</script>