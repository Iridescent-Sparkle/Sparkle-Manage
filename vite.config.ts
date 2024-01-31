import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },

    }),
    Components({
      resolvers: [Vuetify3Resolver()],
      dts: './src/components.d.ts',
    }),
    VueRouter({
      dts: './src/typed-router.d.ts',
      routesFolder: 'src/pages',
      extensions: ['.vue'],
      exclude: [],
      importMode: 'async',
    }),
    UnoCSS(),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    // Vuetify({
    //   autoImport: true,
    // }),
  ],
})
