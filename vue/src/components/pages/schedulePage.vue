<template>
    <v-content>
        <v-container fluid>
            <v-flex style="padding: 20px" xs11 sm5>
                <v-subheader style="font-size: 18px; padding: 0;">Você tem preferência pela:</v-subheader>
                <v-radio-group v-model="preference" hide-details>
                    <v-radio v-model="day" label="Data" color="grey darken-1" hide-details></v-radio>
                    <v-radio v-model="hour" label="Hora" color="grey darken-1" hide-details></v-radio>
                </v-radio-group>
                <v-menu
                    lazy
                    offset-y
                    full-width
                    v-show="!hidden"
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
                        v-model="scheduleDateFormatted"
                        style="width: 250px"></v-text-field>
                    <v-date-picker
                        actions
                        no-title
                        scrollable
                        locale="pt-br"
                        v-model="scheduleDate"
                        :allowed-dates="allowedDates"
                        :formatted-value.sync="scheduleDateFormatted"
                        :date-format="date => new Date(date).toLocaleDateString('pt-BR')">
                        <template slot-scope="{ save, cancel }">
                            <v-card-actions style="margin: auto">
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
                                <v-btn flat color="primary" @click="save">OK</v-btn>
                            </v-card-actions>
                        </template>
                    </v-date-picker>
                </v-menu>
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
                        v-model="scheduleHour"
                        style="width: 250px"></v-text-field>
                    <v-time-picker
                        actions
                        scrollable
                        format="24hr"
                        v-model="scheduleHour"
                        :allowed-dates="allowedHours">
                        <template slot-scope="{ save, cancel }">
                            <v-card-actions style="margin: auto">
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
                                <v-btn flat color="primary" @click="save">OK</v-btn>
                            </v-card-actions>
                        </template>
                    </v-time-picker>
                </v-menu>
            </v-flex>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data () {
            return {
                preference: true,
                day: true,
                hour: false,

                hidden: false,

                scheduleDate: null,
                scheduleDateFormatted: null,
                scheduleHour: null,

                allowedDates: null,
                allowedHours: null
            }
        },
        watch: {
            preference: function () {
                if(!this.scheduleDate && !this.scheduleHour) {
                    this.hidden = !this.hidden;
                } else if(this.scheduleDate && this.scheduleHour){
                    this.scheduleTimeDefined();
                } else {
                    this.hidden = !this.hidden;
                    this.getAvailability();
                }
            }
        },
        methods: {
            scheduleTimeDefined: function () {

            },
            getAvailability: function () {

            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/main.styl"
</style>