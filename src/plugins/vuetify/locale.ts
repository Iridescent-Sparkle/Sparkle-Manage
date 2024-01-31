import { createI18n } from 'vue-i18n'
import type { VuetifyOptions } from 'vuetify'
import { en, zhHans } from 'vuetify/locale'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

const messages = {
  en: {
    $vuetify: {
      ...en,
      dataIterator: {
        rowsPerPageText: 'Items per page:',
        pageText: '{0}-{1} of {2}',
      },
    },
  },
  zhHans: {
    $vuetify: {
      ...zhHans,
      dataIterator: {
        rowsPerPageText: 'Element per sida:',
        pageText: '{0}-{1} av {2}',
      },
    },
  },
}

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'sv',
  fallbackLocale: 'en',
  messages,
})

const locale: VuetifyOptions['locale'] = {
  adapter: createVueI18nAdapter({ i18n, useI18n }),
}

export default locale
