<template>
    <v-layout row wrap>
        <v-flex xs12 sm5 md5 lg5>
            <GamePlayer :item="item.whites" playerType="Whites" :game="item" />
        </v-flex>
        <v-flex xs12 sm2 md2 lg2>
            <GamePlayersDivider 
                :gameNumber="gameNumber" 
                :started="item.started"
                @sex="start(item._id)" />
        </v-flex>
        <v-flex xs12 sm5 md5 lg5>
            <GamePlayer :item="item.blacks" playerType="Blacks" :game="item" />
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
        ...mapActions('competitions', [
            'startCompetitionGame'
        ]),
        start(gameID) {
            this.startCompetitionGame(gameID);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>