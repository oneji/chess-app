<template>
    <v-card>
        <v-list two-line class="py-0">
        <transition name="scale-transition" mode="out-in">
            <div class="loser-player" v-if="gameLoser"></div>
        </transition>
        <template>
            <v-subheader class="game-player-subheader">
                {{ playerType }}
                <span class="game-player-time" v-if="game[playerType.toLowerCase() + 'Time'] !== null">Time: {{ game[playerType.toLowerCase() + 'Time'] }}</span>
            </v-subheader>
            <v-divider :inset="false"></v-divider>
            <v-list-tile :key="item._id" avatar>
                <v-list-tile-avatar>
                    <img :src="item.playerPhoto === null 
                                ? 'images/default_user.png' 
                                : baseURL + '/' + item.playerPhoto"
                    >
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title v-html="item.playerName"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.playerCountry"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <AppBadge v-if="game.winner && !gameLoser" text="Winner" color="success" />
                    <v-tooltip top v-if="game.started && !gameLoser && !game.winner">
                        <v-btn icon ripple slot="activator" @click="$emit('winner', item._id)">
                            <v-icon color="green">check</v-icon>
                        </v-btn>                        
                        <span>Winner</span>
                    </v-tooltip>
                </v-list-tile-action>
            </v-list-tile>
        </template>
        </v-list>
    </v-card>
</template>

<script>
import AppBadge from '../AppBadge'

export default {
    props: {
        item: Object,
        playerType: String,
        game: Object
    },
    components: {
        AppBadge
    },
    computed: {
        baseURL() {
            return process.env.VUE_APP_API_URL;
        },

        gameLoser() {
            if(this.game.winner === null) {
                return false;
            } else {
                return this.game.winner !== this.playerType.toLowerCase();
            }

        }
    },
}
</script>

<style lang="scss" scoped>
    .game-player-subheader {
        height: 30px;
        justify-content: space-between;

        .game-player-time {
            float: right;
        }
    }

    .loser-player {
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }
</style>