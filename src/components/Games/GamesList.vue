<template>
    <div>
        <!-- <v-btn block color="success" small>Games</v-btn> -->
        <!-- <v-stepper v-model="e13" vertical non-linear>
            <div v-for="(item, idx, index) in games" :key="idx">
                <v-stepper-step
                    :step="index"
                    editable
                    complete
                    complete-icon="check"
                    edit-icon="check"
                    error-icon="error"
                    v-if="item.items.length > 0"
                >
                    {{ item.text }} -> {{ index }}
                </v-stepper-step>

                <v-stepper-content :step="index" v-if="item.items.length > 0">
                    <Game 
                        v-for="(game, index) in item.items" :key="game._id" 
                        :item="game" 
                        :gameNumber="index + 1"
                        class="my-1" />
                </v-stepper-content>
            </div>
        </v-stepper> -->
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
    data() {
        return {
            e13: 0
        }
    }
}
</script>

<style lang="scss">
    .v-stepper--vertical .v-stepper__content {
        border-left: 1px solid rgba(0,0,0,0.12) !important;
    }

    .v-stepper--vertical .v-stepper__step {
        padding: 10px 24px !important;
    }
    
</style>