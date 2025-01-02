<template>
  <h2>
    <HtmlContent path="about_me.title" :values="{ role: $t('main.dev_fullstack') }" class="pb-2" />
  </h2>
  <!-- peut etre repetitif avec ce qu'il y a a gauche -->
  <p v-for="d in $tm('about_me.description')">
    {{ d }}
  </p>
</template>