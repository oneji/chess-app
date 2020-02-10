<template>
    <v-layout row wrap>
        <v-flex xs4 sm5 md5 lg5>
            <GamePlayer 
                :item="item.whites"
                :game="item"
                playerType="Whites"
                @winner="setWinner" />
        </v-flex>
        <v-flex xs4 sm2 md2 lg2>
            <GamePlayersDivider 
                :gameNumber="gameNumber" 
                :game="item"
                @start="startGame(item)" />
        </v-flex>
        <v-flex xs4 sm5 md5 lg5>
            <GamePlayer 
                :item="item.blacks"
                :game="item"
                playerType="Blacks"
                @winner="setWinner" />
        </v-flex>
    </v-layout>
</template>

<script>
import GamePlayer from './GamePlayer'
import GamePlayersDivider from './GamePlayersDivider'
import GameHistory from './GameHistory'
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
        GamePlayersDivider,
        GameHistory
    },
    methods: {
        ...mapActions('games', [ 'startGame' ]),
        setWinner(playerId) {
            this.$store.dispatch('games/setWinner', { game: this.item, playerId });
        },
    }
}
</script>

<style lang="scss" scoped>
    .game-history-list {
        padding: 0;
        list-style-type: none;
        
        li {
            border: 1px solid transparent;
            transition: .3s all ease;
            margin: 5px 0;
            padding: 0 10px;

            &:hover {
                cursor: pointer;
                border-color:#ddd;
            }
        }
    }
</style>