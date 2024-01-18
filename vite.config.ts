import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    AutoImport({
    // Filepath to generate corresponding .d.ts file
      dts: './src/auto-imports.d.ts',
      imports: [
      // presets
        'vue',
        'vue-i18n',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
      // Auto import inside Vue template
      vueTemplate: true,
      // Generate corresponding .eslintrc-auto-import.json file.
      eslintrc: {
        enabled: true, // <-- this
        // Default `./.eslintrc-auto-import.json`
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    Components({
      dts: './src/components.d.ts',
    }),
    VueRouter({
      dts: './src/typed-router.d.ts',
    }),
    vuetify({
      autoImport: true,
    }),
  ],
})
