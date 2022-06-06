<template>
  <NuxtPage />
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,700&display=swap",
    },
  ],
  title: "Ted Kesgar",
});
</script>

<script>
import { defineComponent } from "#imports";

export default defineComponent({
  name: "App",
});
</script>
