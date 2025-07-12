import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcsspost from "@tailwindcss/postcss";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // basicSsl({
    //   name: "mi_solicitud.csr",
    //   domains: ["*.rumboalaequidad.org"],
    //   //certDir: "/root/proyecto-iniciativas",
    // }),
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
    key: "/../../../../mi_clave_privada.key", // Reemplaza con la ruta a tu clave privada
    cert: "../../../../mi_solicitud.csr",
  },
});
