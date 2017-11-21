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
                            :to="`../schedule/`+idBarber"
                            color="light-blue lighten-2">Agendamento</v-btn>
                    </v-flex>
                </v-layout>
                <v-list-tile v-for="item in services" :key="item.id">
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple @click.native="deleteService(item.id)">
                            <v-icon color="grey lighten-1">delete</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-container>
        <v-divider></v-divider>
        <v-subheader>Cadastro de Serviços</v-subheader>
        <v-layout>
            <v-flex sm6>
                <v-text-field
                    v-model="search"
                    label="Nome do Serviço"></v-text-field>
            </v-flex>
            <v-flex sm6>
                <v-btn
                    dark
                    color="light-blue lighten-2"
                    @click.native="createService()">Cadastrar</v-btn>
            </v-flex>
        </v-layout>
    </v-content>
</template>

<script>
    export default {
        data() {
            var services;
            this.$http.get(`../app_dev.php/barber/services/get/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`).then(response => {
                this.services = response.data;
            }, error => {
                console.log(error);
            });
            return {
                services: this.services,
                idBarber: window.location.href.substr(window.location.href.lastIndexOf("/") + 1)
            }
        },
        methods: {
            deleteService: function (id) {
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','isActive');
                formData.append('value','0');
                
                this.$http.post(`../app_dev.php/barber/services/update/${id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                ).then(response => {
                    if(response.status == 200){
                        this.services.splice(this.services.findIndex(item => item.id == id), 1);
                    }
                });
            },
            createService: function() {
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append(this.search);
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/barberPage.styl"
</style>