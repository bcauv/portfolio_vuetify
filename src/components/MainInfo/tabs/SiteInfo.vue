<template>
  <h2>{{ $t('site_info.technical_info') }}</h2>
  <p>{{ $t('site_info.intro') }}</p>
  <ul class="default-list">
    <li v-for="tech in $tm('site_info.tech_list')"> {{ tech }}</li>
  </ul>
</template>