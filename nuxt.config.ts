// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@fortawesome/fontawesome-svg-core/styles.css'],
    ssr: false,
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    modules: [
        '@pinia/nuxt'
    ],
    pinia: {
        autoImports: [
            'defineStore'
        ],
    },
    plugins: [
        { src: '~/plugins/fontAwesome.js' }
    ]
})
