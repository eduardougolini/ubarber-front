<template>
    <v-content>
        <v-container fluid>
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
        </v-container>
    </v-content>
</template>

<script>
    import VTextField from "vuetify/es5/components/VTextField/VTextField";

    export default {
        components: {VTextField},
        data() {
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
            }
        }
    }
</script>

<style lang="stylus">
    @import "../../stylus/pages/createBarber.styl"
</style>