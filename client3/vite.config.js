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
      name: "mi_solicitud.csr",
      domains: ["*.rumboalaequidad.org"],
      certDir: "/root/proyecto-iniciativas",
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
    https: {
      key: "/root/proyecto-iniciativas/mi_clave_privada.key", // Path to your private key
      cert: "/root/proyecto-iniciativas/tu_certificado.crt", // Path to your issued SSL certificate
    },
  },
});
