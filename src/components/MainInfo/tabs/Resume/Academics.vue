<template>
  <h2>{{ $t('resume.academics.title') }}</h2>
  <p>
  <div v-for="detail in $tm('resume.academics.details')">
    {{ detail }}
  </div>
  </p>
</template>