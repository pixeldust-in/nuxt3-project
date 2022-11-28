<template>
  <div>
    <h1 class="text-3xl underline">Home Page</h1>
    <ul>
      <li
        v-if="posts && posts.length"
        v-for="post in posts"
        :key="`post-${post.id}`"
      >
        <NuxtLink :to="`posts/${post.id}`" class="text-blue-400">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = useFetch<{ id: number; title: string }[]>("/api/posts");
</script>

<style scoped></style>
