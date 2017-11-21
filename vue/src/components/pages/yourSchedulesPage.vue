<template>
    <v-content>
        <v-container fluid>
            <v-layout row wrap>
                <v-list two-line subheader>
                    <v-subheader>Agendamentos</v-subheader>
                    <v-list-tile v-for="item in schedules" :key="item.id">
                        <v-list-tile-content>
                            <v-list-tile-title>{{`${new Date(item.date.date).toLocaleDateString("pt-BR")} ` +
                                `${new Date(item.date.date).toLocaleTimeString("pt-BR")}`}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon ripple @click.native="deleteSchedule(item.id)">
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
            var schedules;
            this.$http.get(`app_dev.php/schedulement/get/user`).then(response => {
                this.schedules = response.data;
            }, error => {
                console.log(error);
            });
            return {
                schedules: this.schedules
            }
        },
        methods: {
            deleteSchedule: function (id) {
                this.ajaxRequest = true;
                this.$http.post(`../app_dev.php/schedulement/update/${id}/0`, undefined, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                ).then(response => {
                    if(response.status == 200){
                        this.schedules.splice(this.schedules.findIndex(item => item.id == id), 1);
                    }
                });
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/yourSchedulesPage.styl"
</style>