import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcsspost from '@tailwindcss/postcss'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [react(),tailwindcss()],
  css: {
    postcss: {
      plugins: [tailwindcsspost()],
    },
  }
})

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// });