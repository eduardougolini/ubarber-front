<template>
    <v-content>
        <v-container
            fluid
            grid-list-lg
            style="min-height: 0;">
            <v-layout row wrap>
                <v-flex xs5 class="center">
                    <v-list>
                        <v-list-tile
                            value="true"
                            :key="item.id"
                            v-for="item in schedules">
                            <v-card color="blue-grey darken-2" class="white--text">
                                <v-card-title primary-title>
                                    <div class="headline center">Corte dia {{
                                        new Date(item.date.date).toLocaleDateString("pt-BR")}}</div>
                                    <div class="headline center">as {{
                                        new Date(item.date.date).toLocaleTimeString("pt-BR")}}</div><br/>
                                </v-card-title>
                                <v-card-title primary-title>
                                    <div class="headline center">Barbearia {{item.name}}</div>
                                </v-card-title>
                            </v-card>
                        </v-list-tile>
                    </v-list>
                </v-flex>
                <v-list two-line subheader>
                    <v-subheader>Agendamentos</v-subheader>
                    <v-list-tile v-for="item in schedules" :key="item.id">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.date }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon ripple @click.native="deleteService(item.id)">
                                <v-icon color="grey lighten-1">delete</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data () {
            return {
                schedules: []
            }
        },
        mounted() {
            this.$http.get(`app_dev.php/schedulement/get/user`).then(response => {
                this.schedules = response.data;
            }, error => {
                console.log(error);
            });
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/yourSchedulesPage.styl"
</style>