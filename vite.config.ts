import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
    // Filepath to generate corresponding .d.ts file
      dts: './src/auto-imports.d.ts',
      imports: [
      // presets
        'vue',
        'vue-router',
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
      dts: 'src/components.d.ts',
    }),
  ],
})
