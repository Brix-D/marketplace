<template>
    <v-app dark class="application__background">
        <v-app-bar
            flat
            app
            absolute
            height="100"
            :color="$vuetify.theme.currentTheme.backgroundSecondary"
        >
            <v-container>
                <v-row align="center">
                    <v-col cols="3">
                        <h1
                            :style="{ color: $vuetify.theme.currentTheme.info }"
                            class="text-h3 font-italic font-weight-bold"
                        >
                            Servey
                        </h1>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="searchValue"
                            prepend-inner-icon="mdi-magnify"
                            hide-details
                            outlined
                            label="Найти..."
                            clearable
                            :color="$vuetify.theme.currentTheme.info"
                        />
                    </v-col>
                    <v-col cols="3">s</v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
        <!--        <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>-->
        <!--            <v-list>-->
        <!--                <v-list-item @click.native="right = !right">-->
        <!--                    <v-list-item-action>-->
        <!--                        <v-icon light> mdi-repeat </v-icon>-->
        <!--                    </v-list-item-action>-->
        <!--                    <v-list-item-title>Switch drawer (click me)</v-list-item-title>-->
        <!--                </v-list-item>-->
        <!--            </v-list>-->
        <!--        </v-navigation-drawer>-->
        <v-footer app absolute>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            // clipped: false,
            // drawer: false,
            // fixed: false,
            // items: [
            //     {
            //         icon: 'mdi-apps',
            //         title: 'Welcome',
            //         to: '/',
            //     },
            //     {
            //         icon: 'mdi-chart-bubble',
            //         title: 'Inspire',
            //         to: '/inspire',
            //     },
            // ],
            // miniVariant: false,
            // right: true,
            // rightDrawer: false,
            // title: 'Vuetify.js',
            searchValue: '',
        };
    },
};
</script>
<style scoped lang="scss">
//.header {
//    &__logo {
//
//    }
//}
.application {
    &__background {
        background-color: var(--v-background-base);
    }
}
</style>
