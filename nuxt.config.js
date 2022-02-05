import colors from 'vuetify/es5/util/colors';

// nuxt generate error https://github.com/nuxt/nuxt.js/issues/9185

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - marketplace',
        title: 'marketplace',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@mdi/font/css/materialdesignicons.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://rest-api/api',
        debug: true,
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.indigo.lighten5,
                    accent: colors.deepPurple.lighten1,
                    secondary: colors.grey.lighten3,
                    info: colors.blue.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.base,
                    backgroundSecondary: colors.grey.darken4,
                    background: colors.grey.darken3,
                },
                light: {
                    primary: colors.grey.darken4,
                    accent: colors.deepPurple.lighten1,
                    secondary: colors.blueGrey.lighten3,
                    info: colors.blue.darken2,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.base,
                    backgroundSecondary: colors.indigo.lighten5,
                    background: colors.grey.lighten4,
                },
            },
            options: {
                customProperties: true,
            },
        },
        icons: {
            iconfont: 'mdi',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        //publicPath: '/front/_nuxt/',
    },
};
