<template>
  <div v-html="content"></div>
</template>

<script setup lang="ts">
import DOMPurify from 'dompurify';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  path: {
    type: String,
    required: true
  },
  values: {
    type: Object,
    default: () => ({})
  }
});

const { t } = useI18n();
const content = computed(() => {
  const rawHTML = t(props.path, props.values)
  return DOMPurify.sanitize(rawHTML)
});

</script>