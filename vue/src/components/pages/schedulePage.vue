<template>
    <v-app light style="height: 1vh">
        <navigation></navigation>
        <main>
            <v-content>
                <v-flex xs11 sm5>
                    <v-subheader>Você tem preferência pelo:</v-subheader>
                    <v-radio-group v-model="preference" hide-details>
                        <v-radio v-model="day" label="Dia" hide-details></v-radio>
                        <v-radio v-model="hour" label="Hora" hide-details></v-radio>
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
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
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
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="save">OK</v-btn>
                                </v-card-actions>
                            </template>
                        </v-time-picker>
                    </v-menu>
                </v-flex>
            </v-content>
        </main>
    </v-app>
</template>

<script>
    import navigation from '../navigationDrawer.vue';

    export default {
        components: {
            navigation
        },
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
                this.hidden = !this.hidden;
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/main.styl"
</style>