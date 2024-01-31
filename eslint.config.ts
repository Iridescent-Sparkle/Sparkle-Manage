import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    rules: {
      'no-undef': 'error',
    },
  },
  ...compat.config({
    extends: [
      './.eslintrc-auto-import.json',
    ],
  }),
)
