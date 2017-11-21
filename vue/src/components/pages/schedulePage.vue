<template>
    <v-content class="schedules">
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12 sm3>
                    <v-menu
                        lazy
                        offset-y
                        full-width
                        :nudge-right="40"
                        max-width="290px"
                        min-width="290px"
                        transition="scale-transition"
                        :close-on-content-click="false">
                        <v-text-field
                            readonly
                            slot="activator"
                            prepend-icon="event"
                            label="Agendar data para corte"
                            v-model="scheduleDateFormatted"></v-text-field>
                        <v-date-picker
                            actions
                            no-title
                            scrollable
                            locale="pt-br"
                            color="blue darken-3"
                            v-model="scheduleDate"
                            :formatted-value.sync="scheduleDateFormatted"
                            :date-format="date => new Date(date).toLocaleDateString('pt-BR')">
                            <template slot-scope="{ save, cancel }">
                                <v-card-actions style="margin: auto">
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="save">OK</v-btn>
                                </v-card-actions>
                            </template>
                        </v-date-picker>
                    </v-menu>
                </v-flex>
                <v-flex sm1 class="until">
                    <p v-show="hidden">às</p>
                </v-flex>
                <v-flex xs12 sm3>
                    <v-menu
                        lazy
                        offset-y
                        full-width
                        v-show="hidden"
                        :nudge-right="40"
                        max-width="290px"
                        min-width="290px"
                        transition="scale-transition"
                        :close-on-content-click="false">
                        <v-text-field
                            readonly
                            slot="activator"
                            prepend-icon="event"
                            label="Agendar hora para corte"
                            v-model="scheduleHour"></v-text-field>
                        <v-time-picker
                            actions
                            scrollable
                            format="24hr"
                            color="blue darken-3"
                            header-color="blue darken-3"
                            v-model="scheduleHour">
                            <template slot-scope="{ save, cancel }">
                                <v-card-actions style="margin: auto">
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="save">OK</v-btn>
                                </v-card-actions>
                            </template>
                        </v-time-picker>
                    </v-menu>
                </v-flex>
                <v-flex sm5 class="sendSchedule" @click="scheduleBarber()">
                    <v-btn dark color="light-blue lighten-2" v-show="hiddenMax">agendar</v-btn>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
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
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data () {
            var schedules;
            this.$http.get(`../app_dev.php/schedulement/get/barber/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`).then(response => {
                this.schedules = response.data;
                console.log(this.schedules);
            }, error => {
                console.log(error);
            });
            return {
                hidden: false,
                hiddenMax: false,

                scheduleDate: new Date(),
                scheduleDateFormatted: null,
                scheduleHour: null,

                schedules: this.schedules
            }
        },
        watch: {
            scheduleDate: function () {
                this.hidden = true;
            },
            scheduleHour: function () {
                this.hiddenMax = true;
            }
        },
        methods: {
            scheduleBarber: function () {
                this.ajaxRequest = true;
                this.$http.post(`../app_dev.php/schedulement/new/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}/${new Date(`${this.scheduleDate} ${this.scheduleHour}`).getTime()/1000}`, undefined, function (data, status, request) {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                ).then(response => {
                    if(response.status == 200){
                        this.$http.get(`../app_dev.php/schedulement/get/barber/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`).then(response => {
                            this.schedules = response.data;
                        }, error => {
                            console.log(error);
                        });
                    }
                });
            },
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
    @import "../../stylus/pages/schedulePage.styl"
</style>