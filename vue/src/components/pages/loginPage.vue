
<template>
    <v-app>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex sm4>
                    <v-card>
                        <v-card-media
                            src="uBarber-frontend/vue/images/login.jpg"
                            height="200px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
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
                window.location.href = `${window.location.href}app_dev.php/connect/facebook`;
            },
            checkGoogle: function () {
                window.location.href = `${window.location.href}app_dev.php/connect/google`;
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/login.styl"
</style>