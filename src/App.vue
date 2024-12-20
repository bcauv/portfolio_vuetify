<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Kursor from "kursor"
import { computed, onMounted, ref, watch } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme()

const kursorInstance = ref<any>(null)
const colorCursor = computed(() => theme.current.value.colors.cursor)

// TODO: For now, the color of the cursor isn't changing
// So the watch is doing nothing here
watch(colorCursor, () => {
  if (kursorInstance.value)
    kursorInstance.value.color = colorCursor.value
})

onMounted(() => {
  kursorInstance.value = new Kursor({
    type: 1,
    removeDefaultCursor: true,
    color: colorCursor.value
  })
})
</script>
