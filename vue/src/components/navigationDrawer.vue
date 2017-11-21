<template>
    <v-app light style="height: 1vh; min-height: 1vh" >
        <div v-if="authenticated">
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
                                <img src="uBarber-frontend/vue/images/icon.png" alt="">
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
        </div>
        <loginPage v-else></loginPage>
    </v-app>
</template>

<script>
    import loginPage from './pages/loginPage.vue';

    export default {
        components: {
            loginPage
        },
        data () {
            return {
                role: undefined,
                authenticated: false,
                name: 'Guilherme',
                drawer: true,
                goTo: null,
                items: [
                    { icon: 'search', title: 'Pesquisar', link: '/search'},
                    { icon: 'event', title: 'Seus Agendamentos', link: '/yourSchedules' },
                    { icon: 'store', title: 'Cadastre sua Barbearia', link: '/new' },
                    { icon: 'highlight_off', title: 'Sair', link: '/logout' }
                ],
                hidden: false
            }
        },
        beforeMount(){
            this.$http.get(`app_dev.php/getUserData`).then( response => {
                this.authenticated = response.body[0]!=undefined;
                this.name = response.body[0].name;
                this.role = response.body[0].role;
            })
        }
    }
</script>

<style lang="stylus">
    @import '../stylus/main.styl'
</style>