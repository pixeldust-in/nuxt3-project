# Nuxt 3 Project Scaffolding

- Scaffold Nuxt 3 project with the following command:

```jsx
npx nuxi init nuxt3-project
```

- Install Tailwind CSS for Nuxt 3 using these steps: [](https://tailwindcss.com/docs/guides/nuxtjs#3)[https://tailwindcss.com/docs/guides/nuxtjs#3](https://tailwindcss.com/docs/guides/nuxtjs#3)
- If you have **Take Over Mode** enabled in VS Code, you can disable generating shim for `*.vue` using the following code:

```jsx
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
});
```

- When you have multiple routes in the Nuxt 3 project, please use `<NuxtPage />` tag in app.vue.
- When creating server routes, use defineEventHandler to create the routes.
- Access data like, params, query params from event.context in the server routes.
- Typical server route would look something like this:

```jsx
//server/api/posts.ts

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const data = await $fetch<{ id: number; title: string }[]>(
      "<https://jsonplaceholder.typicode.com/posts>"
    );
    return data;
  } else if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const data = await $fetch("<https://jsonplaceholder.typicode.com/posts>", {
      method: "POST",
      body,
    });
    return data;
  }
});

```

- To call a server route in a component, call it using `useFetch` method in `<script setup>` tag:

```jsx
//pages/index.vue

const { data: posts } = useFetch<{ id: number; title: string }[]>("/api/posts");
```
