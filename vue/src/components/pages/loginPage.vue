<template>
    <v-app>
        <v-container fluid grid-list-md>
            <v-layout row wrap class="el100">
                <v-flex sm4 style="margin: auto">
                    <v-card flat>
                        <v-card-media
                            src="uBarber-frontend/vue/images/login.jpg"
                            height="200px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div style="margin: auto">
                                <div class="headline">Bem-vindo ao uBarber</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn class="loginBtn loginBtn--facebook" @click.native="checkFacebook()">Entrar com Facebook</v-btn>
                            <v-btn class="loginBtn loginBtn--google" @click.native="checkGoogle()">Entrar com Google</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: 'loginPage',
        methods: {
            checkFacebook: function () {
                window.location.href = `${window.location.href}connect/facebook`;
            },
            checkGoogle: function () {
                window.location.href = `${window.location.href}connect/google`;
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/login.styl"
</style>