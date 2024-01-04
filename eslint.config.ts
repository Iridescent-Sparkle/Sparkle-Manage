// eslint.config.js
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  // custom rules
  {
    rules: {
      'no-undef': 'error',
    },
  },
  // disable no-undef rule for unplugin-auto-import
  ...compat.config({
    extends: [
      './.eslintrc-auto-import.json',
    ],
  }),
)
