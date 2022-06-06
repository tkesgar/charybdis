<template>
  <div class="flex items-center min-h-screen p-16">
    <div>
      <img
        class="rounded-full mb-8 w-40 h-40"
        src="https://gravatar.com/avatar/10cb7510f4c0347e5334f9f11ce09176?s=160&d=mp&r=x"
        alt="Portrait"
      />
      <h1 class="mb-4 font-light text-6xl">Ted Kesgar</h1>
      <div class="content mb-16">
        <ContentDoc path="/welcome" />
      </div>
      <a
        class="text-gray-600 hover:underline focus:underline"
        href="https://github.com/tkesgar/charybdis"
      >
        View source code for this website
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "#imports";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped>
.content {
  @apply text-lg;
}

.content :deep(p) {
  @apply mb-4;
}

.content :deep(a) {
  @apply text-indigo-600;
}

.content :deep(ul) {
  @apply list-disc ml-8;
}
</style>
