<template>
    <v-content>
        <v-container fluid>
            <div v-if="!this.owner">
                <v-layout row wrap>
                    <v-flex xs12 style="margin-bottom: 20px">
                        <span class="title">Cadastre sua Barbearia</span>
                    </v-flex>
                    <v-flex xs12 sm5 class="left">
                        <v-text-field
                            required
                            v-model="barberName"
                            color="grey darken-2"
                            label="Nome da Barbearia"
                            :rules="[() => barberName.length > 0 || '']">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm5>
                        <v-text-field
                            required
                            label="CNPJ"
                            v-model="CNPJ"
                            color="grey darken-2"
                            :rules="[() => CNPJ.length == 14 || '']">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm3 class="left">
                        <v-text-field
                            required
                            label="CEP"
                            v-model="zipCode"
                            color="grey darken-2"
                            :rules="[() => zipCode.length == 8 || '' ]">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm3 class="left">
                        <v-text-field
                            required
                            label="Rua"
                            v-model="street"
                            color="grey darken-2"
                            :rules="[() => street.length > 0 || '']">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm1>
                        <v-text-field
                            required
                            label="Número"
                            v-model="number"
                            color="grey darken-2"
                            :rules="[() => number.length > 0 || '']">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <v-text-field
                            label="Complemento"
                            v-model="complement"
                            color="grey darken-2">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm2 class="left">
                        <v-text-field
                            required
                            v-model="district"
                            label="Bairro"
                            color="grey darken-2"
                            :rules="[() => district.length > 0 || '']">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2 class="left">
                        <v-text-field
                            required
                            v-model="city"
                            label="Cidade"
                            color="grey darken-2"
                            :rules="[() => city.length > 0 || '']">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2>
                        <v-select
                            autocomplete
                            v-model="state"
                            v-bind:items="states"></v-select>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm10>
                        <v-btn
                            dark
                            large
                            color="blue"
                            class="save"  @click.native="postToCreate()">Salvar</v-btn>
                    </v-flex>
                </v-layout>
            </div>
            <div v-else>
                <v-layout row wrap>
                    <v-flex xs12 style="margin-bottom: 20px">
                        <span class="title">Edite sua Barbearia</span>
                    </v-flex>
                    <v-flex xs12 sm5 class="left">
                        <v-text-field
                            v-model="barberName"
                            color="grey darken-2"
                            label="Nome da Barbearia"
                            :value="barberName"  @change="updateName"
                            >
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm5>
                        <v-text-field
                            label="CNPJ"
                            v-model="CNPJ"
                            color="grey darken-2"
                            :value="CNPJ"  @change="updateCNPJ"
                            >
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm3 class="left">
                        <v-text-field
                            label="CEP"
                            v-model="zipCode"
                            color="grey darken-2"
                            :value="zipCode"  @change="updateZipCode"  
                            >
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm3 class="left">
                        <v-text-field
                            label="Rua"
                            v-model="street"
                            color="grey darken-2"
                            :value="street"  @change="updateStreet" 
                            >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm1>
                        <v-text-field
                            label="Número"
                            v-model="number"
                            color="grey darken-2"
                            :value="number"  @change="updateNumber"
                            >
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm4>
                        <v-text-field
                            label="Complemento"
                            v-model="complement"
                            color="grey darken-2"
                            :value="complement"  @change="updateComplement" 
                            >
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm2 class="left">
                        <v-text-field
                            v-model="district"
                            label="Bairro"
                            color="grey darken-2"
                            :value="district"  @change="updateDistrict" 
                            >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2 class="left">
                        <v-text-field
                            v-model="city"
                            label="Cidade"
                            color="grey darken-2"
                            :value="city"  @change="updateCity" 
                            >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12 sm2>
                        <v-select
                            autocomplete
                            v-model="state"
                            v-bind:items="states"
                            :value="state"  @change="updateState" 
                            ></v-select>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        data() {
            var edit;
            var owner = false;
            this.$http.get('app_dev.php/barber/getOwnBarber').then(response => {
                this.edit = response.body[0];
                this.barberName= this.edit.name;
                this.CNPJ= this.edit.cnpj;
                this.zipCode= this.edit.zip;
                this.state= this.edit.state;
                this.city= this.edit.city;
                this.street= this.edit.street;
                this.number= this.edit.number;
                this.district= this.edit.district;
                this.complement= this.edit.complement;
                this.owner = true;
            }, error => {
                console.log(error.status==500);
                console.log(this.edit);
                this.owner = false;
            });

            return {
                barberName: '',
                CNPJ: '',
                zipCode: '',
                state: 'São Paulo',
                city: '',
                street: '',
                number: '',
                district: '',
                complement: '',

                states: [
                    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
                    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais',
                    'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
                    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
                ]
            }

        },
        methods: { 
            postToCreate: function() {
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('name',this.barberName);
                formData.append('city', this.city);
                formData.append('state', this.state);
                formData.append('zip', this.zipCode);
                formData.append('street', this.street);
                formData.append('district', this.district);
                formData.append('number',this.number);
                formData.append('complement', this.complement);
                formData.append('cnpj', this.CNPJ);
                
                this.$http.post('app_dev.php/barber/new', formData, function (data, status, request) {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateName(value) {
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','name');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateState(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','state');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateCity(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','city');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateDistrict(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','district');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );                
            },
            updateComplement(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','complement');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateNumber(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','number');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateStreet(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','street');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateZipCode(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','zip');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            },
            updateCNPJ(value){
                this.ajaxRequest = true;
                var formData = new FormData();
                formData.append('field','cnpj');
                formData.append('value', value);
                
                this.$http.post(`app_dev.php/barber/edit/${this.edit.id}`, formData, (data, status, request) => {
                        this.postResults = data;
                        this.ajaxRequest = false;
                    }
                );
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/createBarber.styl"
</style>