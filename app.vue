<template>
  <NuxtPage />
  {{ store.count }}
  {{ store.doubleCount }}
  <button @click="store.increment">Increment</button>
</template>

<script setup lang="ts">
const store = useCounterStore();
</script>

<style scoped></style>
