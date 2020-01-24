<template>
    <div>
        
        <div v-for="(item, idx) in games" :key="idx">
            <v-btn
                block
                color="success"
                small
                v-if="item.items.length > 0"
            >
                {{ item.text }}
            </v-btn>
            <v-divider></v-divider>
            <Game 
                v-for="(game, index) in item.items" :key="game._id" 
                :item="game" 
                :gameNumber="index + 1"
                class="my-1" />
        </div>
    </div>
</template>

<script>
import Game from './Game'

export default {
    props: {
        games: {
            type: Object
        }
    },
    components: {
        Game
    },
    created() {
        console.log(this.games)
    }
}
</script>

<style lang="">
    
</style>