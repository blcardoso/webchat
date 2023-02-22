import '@fortawesome/pro-solid-svg-icons'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defineNuxtPlugin } from "nuxt/app"

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        icons: {
            iconFont: 'faSvg'
        },
        ssr: true,
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})
