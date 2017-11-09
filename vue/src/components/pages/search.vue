<template>
    <v-app light style="height: 1vh">
        <navigation></navigation>
        <main>
            <v-content>
                <v-container fluid>
                    <v-text-field
                        prepend-icon="search"
                        label="Pesquise aqui pela barbearia, pela cidade, ou pelo estado">
                    </v-text-field>
                </v-container>
            </v-content>
        </main>
    </v-app>
</template>

<script>
    import navigation from '../navigationDrawer.vue'

    export default {
        components: {
            navigation
        },
        data () {
            return {
                items: [
                    { icon: 'search', title: 'Pesquisa', value: 'search'},
                    { icon: 'today', title: 'Agendamento', value: 'scheduling' },
                    { icon: 'question_answer', title: 'Chat', value: 'chat' }
                ],
            }
        },
    }
</script>

<style lang="stylus">
    @import "../../stylus/main.styl"
</style>