import type { VuetifyOptions } from 'vuetify'
import { Icon } from '@iconify/vue'

export const iconify = {
  component: (props: any) => h(Icon, props),
}

const icons: VuetifyOptions['icons'] = {
  defaultSet: 'iconify',
  sets: {
    iconify,
  },
}

export default icons
