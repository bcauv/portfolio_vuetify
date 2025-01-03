<template>
  <h1>
    <HtmlContent path="about_me.title" :values="{ role: $t('main.dev_fullstack') }" class="pb-2" />
  </h1>
  <h2> {{ $t('about_me.welcome') }}</h2>
  <p v-for="d in $tm('about_me.description')">
    {{ d }}
  </p>
  <ul class="default-list">
    <li v-for="project in $tm('about_me.project_list')">
      {{ project }}
    </li>
  </ul>
</template>