import { defineConfig } from 'vite'
import { resolve } from 'path'
//base: "/travels/",
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        speleo: resolve(__dirname, 'speleo/index.html'),
        pvd: resolve(__dirname, 'pvd/index.html'),
        canyoning: resolve(__dirname, 'canyoning/index.html'),
        tour: resolve(__dirname, 'tour/index.html'),
        "tour/1": resolve(__dirname, 'tour/1/index.html'),
        "tour/2": resolve(__dirname, 'tour/2/index.html'),
        "tour/3": resolve(__dirname, 'tour/3/index.html'),
        "tour/4": resolve(__dirname, 'tour/4/index.html'),
        "tour/5": resolve(__dirname, 'tour/5/index.html'),
        "tour/6": resolve(__dirname, 'tour/6/index.html'),
        "tour/7": resolve(__dirname, 'tour/7/index.html'),
        "tour/8": resolve(__dirname, 'tour/8/index.html'),
        "tour/9": resolve(__dirname, 'tour/9/index.html'),
        "tour/10": resolve(__dirname, 'tour/10/index.html'),
        "tour/11": resolve(__dirname, 'tour/11/index.html'),
        "tour/12": resolve(__dirname, 'tour/12/index.html'),
        reviews: resolve(__dirname, 'reviews/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        admin: resolve(__dirname, 'admin/index.html'),
      }
    }
  }
})