// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  imports: { dirs: ["stores"] },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.browser
        ? process.env.NUXT_PUBLIC_API_BASE_URL
        : "http://django-for-nuxt3-django-1:8000",
    },
  },
  modules: ["@pinia/nuxt"],
});
