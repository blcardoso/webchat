import {library, config} from '@fortawesome/fontawesome-svg-core'
import { faPaperPlaneTop } from '@fortawesome/pro-solid-svg-icons'
import { faUser, faBars, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineNuxtPlugin } from 'nuxt/app'


// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
    faPaperPlaneTop,
    faUser,
    faBars,
    faMessage,
)

export default defineNuxtPlugin(({vueApp}) => {
    vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
