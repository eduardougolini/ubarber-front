<template>
    <v-content>
        <v-container fluid>
            <v-flex sm3 md4 lg6 style="margin: auto">
                <v-text-field
                    v-model="search"
                    prepend-icon="search"
                    label="Pesquise aqui pela barbearia">
                </v-text-field>
            </v-flex>
        </v-container>
        <v-list class="barbersList">
            <v-list-tile
                value="true"
                :key="item.id"
                v-for="item in barbers">
                <v-card router :to="`barber/${item.id}`">
                    <v-card-media
                        class="white--text"
                        src="uBarber-frontend/vue/images/barber.jpg">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox class="text-sm-center">
                                    <span>{{item.name}}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                </v-card>
            </v-list-tile>
        </v-list>
    </v-content>
</template>

<script>
    import _ from 'lodash';

    export default {
        data () {
            return {
                search: null,
                barbers: []
            }
        },
        watch: {
            search: _.debounce(
                function() {
                    this.searchFor();
                }, 800
            )
        },
        methods: {
            searchFor: function() {
                this.$http.get(`app_dev.php/barber/get/${this.search}`).then(response => {
                    this.barbers = response.data;
                }, error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/searchPage.styl"
</style>