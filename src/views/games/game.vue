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
                                :history="[]"
                                :pgn="game.pgn" />
                        </v-flex>
                    </v-layout>
                </v-card-title>
            </v-card>
        </v-flex>

        <v-flex xs12 sm12 md8 lg8>
            <v-layout row wrap>
                <!-- <GameHistory 
                        :items="game.pgn" /> -->
                <v-flex d-flex xs12>
                    <Game :item="game" />            
                </v-flex>
                <v-flex xs12 sm6 md5 lg5>
                    <v-card>
                        <v-card-title>
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md12 lg12>
                                    <StatsChart :playerStats="stats.whitePlayerStats" />
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm6 md5 lg5 offset-md2 offset-lg2>
                    <v-card>
                        <v-card-title>
                            <v-layout row wrap>
                                <v-flex xs12 sm12 md12 lg12>
                                    <StatsChart :playerStats="stats.blackPlayerStats" />
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import ChessBoard from '@/components/Chess/ChessBoard'
import ChessBoardControls from '@/components/Chess/ChessBoardControls'
import Game from '@/components/Games/Game'
import GameHistory from '@/components/Games/GameHistory'
import StatsCard from '@/components/StatsCard'
import StatsChart from '@/components/StatsChart'

export default {
    components: {
        ChessBoardControls,
        ChessBoard,
        Game,
        GameHistory,
        StatsCard,
        StatsChart
    },
    computed: {
        game() {
            return this.$store.getters['games/getCurrentGame'] || {};
        },
        stats() {
            return this.$store.getters['games/getGamePlayerStats'];
        }
    },
    methods: {
        ...mapActions('games', [ 'getById' ]),
    },
    created() {
        this.getById(this.$route.params.id);
    }
}
</script>

<style lang="scss">

</style>