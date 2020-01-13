<template>
    <div class="game-players-divider">
        <div class="game-players-divider-text" v-if="gameNumber">
            <AppBadge :text="`Game ${gameNumber}`" color="primary" />
        </div>
        <div class="game-players-divider-item"></div>
        <div class="game-players-divider-text" v-if="!game.started">
            <v-btn color="warning" small @click="$emit('start')">Start game</v-btn>
        </div>
        <div class="game-players-divider-text" v-if="game.started && !game.ended">
            <AppBadge text="Started" color="success" />
        </div>
        <div class="game-players-divider-text" v-if="game.ended">
            <AppBadge text="Finished" color="danger" />
        </div>
        <div class="game-players-divider-text" v-if="game.started">
            <v-tooltip bottom>
                <v-btn icon ripple slot="activator" @click="watchGame(game._id)">
                    <v-icon color="grey">remove_red_eye</v-icon>
                </v-btn>                        
                <span>Watch</span>
            </v-tooltip>
            <v-tooltip bottom v-if="!game.ended">
                <v-btn icon ripple slot="activator" @click="showFinishGameForm({ status: true, game })">
                    <v-icon color="red">stop</v-icon>
                </v-btn>                        
                <span>Finish</span>
            </v-tooltip>
        </div>
    </div>
</template>

<script>
import AppBadge from '../AppBadge'
import { mapActions } from 'vuex'

export default {
    props: {
        gameNumber: Number,
        game: Object
    },
    components: {
        AppBadge
    },
    methods: {
        ...mapActions('games', [ 'showFinishGameForm' ]),
        watchGame(gameId) {
            if(this.$route.name === 'Game') {
                return null;
            } else {
                this.$router.push({ name: 'Game', params: { id: gameId } });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .game-players-divider {
        height: 100%;
        padding: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        &-item {
            border: 1px solid rgba(255,255,255,0.12);
            height: 1px;
            width: 100%;
            border-radius: 10px;
            margin: 5px 0;
        }
    }
</style>