<template>
  <h1>Post: {{ post }}</h1>
</template>

<script setup lang="ts">
const route = useRoute();
// Show error on UI
const {
  data: post,
  pending,
  refresh,
  error,
} = useFetch<{ id: number; title: string }>(`/api/posts/${route.params.id}`);
</script>

<style scoped></style>
