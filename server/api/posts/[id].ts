export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const id = event.context.params.id;
    const data = await $fetch(`http://localhost:8000/posts/${id}/`);
    return data;
  }
});
