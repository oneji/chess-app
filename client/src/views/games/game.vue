<template>
    <v-layout row wrap v-if="!$store.getters.getContentLoading">
        <v-flex xs12 sm8 md8 lg8 offset-md2 offset-lg2>
            <Game :item="game" class="my-1" />
        </v-flex>
        <v-flex xs12 sm8 md4 lg4 offset-md4 offset-lg4>
            <v-card>
                <v-card-title>
                    <ChessBoard :free="true"/>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import ChessBoard from '@/components/Chess/ChessBoard'
import Game from '@/components/Games/Game'

export default {
    components: {
        ChessBoard,
        Game
    },
    computed: {
        game() {
            return this.$store.getters['games/getCurrentGame'] || {};
        }
    },
    methods: {
        ...mapActions('games', [
            'getById'
        ])
    },
    created() {
        this.getById(this.$route.params.id);
    }
}
</script>

<style lang="scss">
    
</style>