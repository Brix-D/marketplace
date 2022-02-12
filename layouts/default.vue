<template>
    <v-app dark class="application__background">
        <TheHeader />
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
import TheHeader from '@/components/layout/TheHeader';
export default {
    name: 'DefaultLayout',
    components: {
        TheHeader,
    },
    data() {
        return {};
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
