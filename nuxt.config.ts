// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  compatibilityDate: "2024-07-17",
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons"],
  css: ["~/assets/styles/main.css"],
  ssr: false,
});
