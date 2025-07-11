import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcsspost from "@tailwindcss/postcss";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcsspost()],
    },
  },
  server: {
    host: "*",
    port: 80,
    allowedHosts: ["rumboalaequidad.org", "www.rumboalaequidad.org"], // Added www.rumboalaequidad.org
  },
});
