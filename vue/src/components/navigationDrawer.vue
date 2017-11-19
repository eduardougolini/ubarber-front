<template>
    <v-app light style="height: 1vh; min-height: 1vh">
        <v-navigation-drawer
            app
            dense="true"
            persistent
            v-model="drawer"
            enable-resize-watcher
            :mini-variant="hidden">
            <v-toolbar flat class="transparent">
                <v-list>
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="images/icon.png" alt="">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="name"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list>
                <v-list-tile
                    router
                    value="true"
                    :to="item.link"
                    :key="item.title"
                    v-for="item in items">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-footer absolute style="background-color: white">
                <v-btn fab small flat v-show="!hidden" style="margin: 5px auto" @click.native="hidden = !hidden">
                    <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>
                <v-btn fab small flat v-show="hidden" style="margin: 5px auto" @click.native="hidden = !hidden">
                    <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
            </v-footer>
        </v-navigation-drawer>
        <v-toolbar fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <main>
            <router-view></router-view>
        </main>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                name: 'Guilherme',
                drawer: true,
                goTo: null,
                items: [
                    { icon: 'search', title: 'Pesquisar', link: '/search'},
                    { icon: 'event', title: 'Seus Agendamentos', link: '/kkkk' },
                    { icon: 'store', title: 'Cadastre sua Barbearia', link: '/new' },
//                    { icon: 'settings', title: 'Configurações', value: 'settings' }
                ],
                hidden: false
            }
        },
    }
</script>

<style lang="stylus">
    @import '../stylus/main.styl'
</style>