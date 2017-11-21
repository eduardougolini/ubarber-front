<template>
    <v-content>
        <v-container fluid>
            <v-list two-line subheader>
                <v-subheader>Serviços</v-subheader>
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
                services: this.services
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
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/main.styl"

    span
        float right
</style>