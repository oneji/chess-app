<template>
    <v-card>
        <v-list two-line class="py-0">
        <div class="loser-player" v-if="gameLoser"></div>
        <template>
            <v-subheader class="game-player-subheader">{{ playerType }}</v-subheader>
            <v-divider :inset="false"></v-divider>
            <v-list-tile :key="item._id" avatar>
                <v-list-tile-avatar>
                    <img :src="baseURL + '/' + item.playerPhoto">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title v-html="item.playerName"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.playerCountry"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action v-if="game.started && !gameLoser">
                    <v-tooltip top>
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
export default {
    props: {
        item: Object,
        playerType: String,
        game: Object
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
    }

    .loser-player {
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }
</style>