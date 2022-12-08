const config = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const id = event.context.params.id;
    const data = await $fetch(`${config.public.apiBaseUrl}/posts/${id}/`);
    return data;
  }
});
