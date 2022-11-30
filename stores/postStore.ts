import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", () => {
  // understand multiple uses
  const posts = ref<{ id: number; title: string }[]>([]);

  const fetchPosts = async () => {
    const data = await $fetch<{ id: number; title: string }[]>("/api/posts");
    console.log(data);
    posts.value = data;
  };

  return {
    posts,
    fetchPosts,
  };
});
