import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [

  ],
  theme: {
    colors: {
      'success-100': '#F2F9EC',
      'success-200': '#E4F2DB',
      'success-300': '#7EC050',
      'warn-100': '#FCF6ED',
      'warn-200': '#F8ECDA',
      'warn-300': '#DCA550',
      'error-100': '#ED7456',
      'error-200': '#F3471c',
      'error-300': '#ffffff',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(
      {
        collections: {
          mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        },
      },
    ),
    presetTypography(),
    presetWebFonts({
      fonts: {

      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

})
