<template>
  <h2>
    <HtmlContent path="about_me.title" :values="{ role: $t('main.dev_fullstack') }" class="pb-2" />
  </h2>
  <!-- peut etre repetitif avec ce qu'il y a a gauche -->
  <HtmlContent path="about_me.description_part1" />
  <HtmlContent path="about_me.description_part2" />
  <HtmlContent path="about_me.description_part3" />
  <HtmlContent path="about_me.description_part4" />
</template>