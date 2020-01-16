<template>
    <div>
        <v-divider></v-divider>
        <Game 
            :item="game" 
            :gameNumber="idx + 1"
            class="my-1"
            v-for="(game, idx) in games" :key="game._id" />
        <v-divider></v-divider>
    </div>
</template>

<script>
import Game from './Game'

export default {
    props: {
        games: {
            type: Array
        }
    },
    components: {
        Game
    }
}
</script>

<style lang="">
    
</style>