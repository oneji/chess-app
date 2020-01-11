<template>
    <v-layout row wrap>
        <v-flex xs12 sm5 md5 lg5>
            <GamePlayer :item="item.whites" playerType="Whites" />
        </v-flex>
        <v-flex xs12 sm2 md2 lg2>
            <GamePlayersDivider :gameNumber="gameNumber" />
        </v-flex>
        <v-flex xs12 sm5 md5 lg5>
            <GamePlayer :item="item.blacks" playerType="Blacks" />
        </v-flex>
    </v-layout>
</template>

<script>
import GamePlayer from './GamePlayer'
import GamePlayersDivider from './GamePlayersDivider'

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
    }
}
</script>

<style lang="scss" scoped>
    
</style>