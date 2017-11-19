<template>
    <v-content>
        <v-container fluid>
            <v-flex sm3 md6 lg8 style="margin: auto">
                <v-text-field
                    v-model="search"
                    prepend-icon="search"
                    label="Pesquise aqui pela barbearia, pela cidade, ou pelo estado">
                </v-text-field>
            </v-flex>
        </v-container>
    </v-content>
</template>

<script>
    import _ from 'lodash';
    import navigation from '../navigationDrawer.vue'

    export default {
        components: {
            navigation
        },
        data () {
            return {
                search: null
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
                this.$http.get('/barber/get').then( response => {
                    console.log(response);
                }, response => {
                    console.log(response);
                });
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/main.styl"
</style>