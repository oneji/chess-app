<template>
    <v-dialog v-model="$store.getters['games/getFinishGameForm']" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Finish the game</span>
            </v-card-title>
            <v-card-text>
                <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm6 md6 lg6> 
                        <PlayerTimePicker 
                            playerType="whites"
                            @set="setPlayerTime" />
                    </v-flex>
                    
                    <v-flex xs12 sm6 md6 lg6>
                        <PlayerTimePicker 
                            playerType="blacks"
                            @set="setPlayerTime" />
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="showFinishGameForm({ status: false, game: {} })">Close</v-btn>
                <v-btn color="success" flat @click="finishGame({ gameId: game._id.toString(), time: times })">Finish the game</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import PlayerTimePicker from './PlayerTimePicker'

export default {
    components: {
        PlayerTimePicker
    },
    data() {
        return {
            times: {
                whites: null,
                blacks: null
            }
        }
    },
    computed: {
        game() {
            return this.$store.getters['games/getCurrentGame'];
        }
    },
    methods: {
        ...mapActions('games', [ 'showFinishGameForm', 'finishGame' ]),
        setPlayerTime(data) {
            let { playerType, playerTime } = data;
            this.times[playerType] = playerTime;
        }
    }
}
</script>

<style lang="scss">
    
</style>