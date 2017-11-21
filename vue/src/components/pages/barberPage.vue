<template>
    <v-content class="barberPage">
        <v-container fluid>
            <v-list two-line subheader>
                <v-layout>
                    <v-flex sm6>
                        <span>Serviços</span>
                    </v-flex>
                    <v-flex sm6>
                        <v-btn
                            dark
                            router
                            :to="`../schedule`"
                            color="light-blue lighten-2">Agendamento</v-btn>
                    </v-flex>
                </v-layout>
                <v-list-tile v-for="item in services" :key="item.id">
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple @click.native="deleteService()">
                            <v-icon color="grey lighten-1">delete</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        id: 1,
                        title: 'Corte'
                    }
                ]
            }
        },
        methods: {
            deleteService: function () {

            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/barberPage.styl"
</style>