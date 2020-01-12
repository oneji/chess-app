<template>
    <v-layout row wrap>
        <v-flex xs12 sm5 md5 lg5>
            <GamePlayer :item="item.whites || {}" playerType="Whites" :game="item" @winner="setWinner" />
        </v-flex>
        <v-flex xs12 sm2 md2 lg2>
            <GamePlayersDivider 
                :gameNumber="gameNumber" 
                :game="item"
                @start="start(item._id)" />
        </v-flex>
        <v-flex xs12 sm5 md5 lg5>
            <GamePlayer :item="item.blacks || {}" playerType="Blacks" :game="item" @winner="setWinner" />
        </v-flex>
    </v-layout>
</template>

<script>
import GamePlayer from './GamePlayer'
import GamePlayersDivider from './GamePlayersDivider'
import { mapActions } from 'vuex';

export default {
    props: {
        item: {
            type: Object
        },
        gameNumber: {
            type: Number
        }
    },
    components: {
        GamePlayer,
        GamePlayersDivider
    },
    methods: {
        ...mapActions('games', [
            'startGame'
        ]),
        start(gameID) {
            this.startGame(gameID);
        },
        setWinner(playerId) {
            this.$store.dispatch('games/setWinner', { gameId: this.item._id, playerId });
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>