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
    <button @click="refreshPosts">Refresh Posts</button>
  </div>
</template>

<script setup lang="ts">
const postStore = usePostStore();

const { pending, refresh, error } = await useAsyncData<
  void,
  { statusCode: number; name: string; message: string; stack: string }
>(postStore.fetchPosts);
console.log(`pending: ${pending.value}`);
console.log(error.value);

const refreshPosts = async () => {
  await refresh();
};
</script>

<style scoped></style>
