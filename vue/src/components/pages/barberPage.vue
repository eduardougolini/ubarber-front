<template>
    <v-content>
        <v-container fluid>
            <v-list two-line subheader>
                <v-subheader>Serviços</v-subheader>
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
    @import "../../stylus/main.styl"

    span
        float right
</style>