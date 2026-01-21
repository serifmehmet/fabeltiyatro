import { defineConfig } from "sanity";

export default defineConfig({
  modules: ['@nuxtjs/sanity']
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
});
