import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcsspost from "@tailwindcss/postcss";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    basicSsl({
      name: "rumboalaequidad-cert",
      domains: ["*.rumboalaequidad.org"],
      //certDir: "./cert",
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcsspost()],
    },
  },
  server: {
    host: "*",
    port: 443,
    allowedHosts: ["rumboalaequidad.org", "www.rumboalaequidad.org"],
    https: true,
  },
});
