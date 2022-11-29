<template>
  <div>
    <h1 class="text-3xl underline">Home Page</h1>
    <ul>
      <li
        v-if="postStore.posts && postStore.posts.length"
        v-for="post in postStore.posts"
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
const postStore = usePostStore();

onMounted(async () => {
  await postStore.fetchPosts();
});
</script>

<style scoped></style>
