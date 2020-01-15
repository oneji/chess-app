<template>
    <v-layout row wrap v-if="!$store.getters.getContentLoading">
        <v-flex xs12 sm12 md4 lg4>
            <v-card>
                <v-card-title>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12 lg12>
                            <ChessBoard 
                                :free="true"
                                :fen="game.fen"
                                :history="game.history" />
                        </v-flex>
                    </v-layout>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 sm12 md8 lg8>
            <Game :item="game" />
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import ChessBoard from '@/components/Chess/ChessBoard'
import ChessBoardControls from '@/components/Chess/ChessBoardControls'
import Game from '@/components/Games/Game'

export default {
    components: {
        Game,
        ChessBoard,
        ChessBoardControls,
    },
    computed: {
        game() {
            return this.$store.getters['games/getCurrentGame'] || {};
        }
    },
    methods: {
        ...mapActions('games', [
            'getById'
        ]),
    },
    created() {
        this.getById(this.$route.params.id);
    }
}
</script>

<style lang="scss">
    
</style>