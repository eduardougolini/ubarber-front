<template>
    <v-app light style="height: 1vh; min-height: 1vh">
        <v-navigation-drawer
            app
            persistent
            v-model="drawer"
            enable-resize-watcher>
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
                    value="true"
                    :key="item.title"
                    v-for="item in items"
                    @click="goTo = item.value">
                    <v-list-tile-action>
                        <v-icon light v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
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
                    { icon: 'search', title: 'Pesquisa', value: 'search'},
                    { icon: 'today', title: 'Agendamento', value: 'scheduling' },
                    { icon: 'question_answer', title: 'Chat', value: 'chat' }
                ],
            }
        },
        watch: {
            goTo: function () {
                this.changeRoute(this.goTo);
            }
        },
        methods: {
            changeRoute: function (route) {
                let appDevLink = (window.location.href.indexOf("dev.php") === -1) ? "/" : "/app_dev.php/";

                console.log(appDevLink + route)

                this.$http.get(appDevLink + route);
            }
        }
    }
</script>

<style lang="stylus">
    /*@import '../../stylus/components/pages/main.styl'*/
</style>