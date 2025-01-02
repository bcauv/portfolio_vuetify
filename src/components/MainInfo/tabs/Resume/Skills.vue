<template>
  <h2>{{ $t('resume.skills.title') }}</h2>
  <h3>{{ $t('resume.skills.technical.title') }}</h3>
  <ul class="default-list">
    <li v-for="l in $tm('resume.skills.technical.list')">
      {{ l }}
    </li>
  </ul>
  <h3>{{ $t('resume.skills.soft.title') }}</h3>
  <ul class="default-list">
    <li v-for="l in $tm('resume.skills.soft.list')">
      {{ l }}
    </li>
  </ul>
  <h3>{{ $t('resume.skills.languages.title') }}</h3>
  <ul class="default-list">
    <li v-for="l in $tm('resume.skills.languages.list')">
      {{ l }}
    </li>
  </ul>
</template>