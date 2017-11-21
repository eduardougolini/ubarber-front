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
                                <img v-bind:src="userImage">
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

                    <!-- logunte -->
                    <v-list-tile 
                        router
                        value="true"
                        @click="logout()"
                        :to="'/'"
                        :key="'Sair'">
                        <v-list-tile-action>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Sair</v-list-tile-title>
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
                userImage: undefined,
                drawer: true,
                goTo: null,
                items: [
                    { icon: 'search', title: 'Pesquisar', link: '/search'},
                    { icon: 'event', title: 'Seus Agendamentos', link: '/yourSchedules' },
                    { icon: 'store', title: 'Cadastre sua Barbearia', link: '/new' }
                ],
                hidden: false
            }
        },
        beforeMount(){
            this.$http.get(`app_dev.php/getUserData`).then( response => {
                this.authenticated = response.body[0]!=undefined;
                this.name = response.body[0].name;
                this.role = response.body[0].role;
                this.userImage = response.body[0].userImage;
            })
        },
         methods: {
             logout: function(){
                window.location.href = `http://ubarber.com/logout`;
             }
         }
    }
</script>

<style lang="stylus">
    @import '../stylus/main.styl'
</style>