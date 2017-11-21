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
        <div v-if="this.role=='MANAGER' || this.role=='ADMIN'">
            <v-divider></v-divider>
            <v-subheader>Cadastro de Serviços</v-subheader>
            <v-layout>
                <v-flex sm6>
                    <v-text-field
                        v-model="serviceName"
                        label="Nome do Serviço"></v-text-field>
                </v-flex>
                <v-flex sm6>
                    <v-btn
                        dark
                        color="light-blue lighten-2"
                        @click.native="createService()">Cadastrar</v-btn>
                </v-flex>
            </v-layout>
        </div>
        <v-divider></v-divider>
        <br/>
        <div class="flex sm6" style="margin:20px">
            <p>{{`Nome: ${about.name}`}}</p>
            <p>{{`CEP: ${about.zip}`}}</p>
            <p>{{`Estado: ${about.state}`}}</p>
            <p>{{`Cidade: ${about.city}`}}</p>
            <p>{{`Bairro: ${about.district}`}}</p>
            <p>{{ `Rua: ${about.street}`}}</p>
            <p>{{ `Número: ${about.number}`}}</p>
            <p>{{`Complemento: ${about.complement}`}}</p>
        </div>
        
    </v-content>
</template>

<script>
    export default {
        data() {
            var about;
            var role;
            var services;

            this.$http.get(`../app_dev.php/barber/about/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`).then( response => {
                this.about = response.body[0];
            })

            this.$http.get(`../app_dev.php/getUserRole/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`).then( response => {
                this.role = response.body[0].role;
            })

            this.$http.get(`../app_dev.php/barber/services/get/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`).then(response => {
                this.services = response.data;
            }, error => {
                console.log(error);
            });
            return {
                about : this.about,
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
                // /barber/services/add/{barber}
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('serviceName',this.serviceName);
                
                this.$http.post(`../app_dev.php/barber/services/add/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`, formData, function (data, status, request) {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                ).then(response => {
                    if(response.status == 200){
                        this.$http.get(`../app_dev.php/barber/services/get/${window.location.href.substr(window.location.href.lastIndexOf("/") + 1)}`).then(response => {
                            this.services = response.data;
                        }, error => {
                            console.log(error);
                        });
                    }
                });
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/barberPage.styl"
</style>