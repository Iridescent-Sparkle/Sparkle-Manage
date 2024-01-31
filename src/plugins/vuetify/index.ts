/*
 * @Date: 2024-01-04 18:48:33
 * @Description: Vuetify全局配置
 */
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import defaults from './defaults'
import aliases from './aliases'
import locale from './locale'
import icons from './icons'
import theme from './theme'

const vuetify = createVuetify({
  defaults,
  aliases,
  locale,
  icons,
  theme,
})

export default vuetify
