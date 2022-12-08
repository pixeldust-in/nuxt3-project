const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const data = await $fetch<{ id: number; title: string }[]>(
      `${config.public.apiBaseUrl}/posts/`
    );
    console.log(data);
    return data;
  } else if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const data = await $fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body,
    });
    return data;
  }
});
