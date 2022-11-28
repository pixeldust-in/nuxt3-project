export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const id = event.context.params.id;
    const data = await $fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  }
});
