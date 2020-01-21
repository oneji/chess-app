<template>
    <v-dialog v-model="$store.getters['games/getFinishGameForm']" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Finish the game</span>
            </v-card-title>
            <v-card-text class="pt-0">
                <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm12 md12 lg12>
                        <v-subheader class="pl-0">Choose the winner</v-subheader>
                        <v-btn-toggle v-model="winner" mandatory class="mb-3">
                            <v-btn flat value="whites">
                                <span>Whites</span>
                                <v-icon>person</v-icon>
                            </v-btn>
                            <v-btn flat value="blacks">
                                <span>Blacks</span>
                                <v-icon>person</v-icon>
                            </v-btn>
                            <v-btn flat value="draw">
                                <span>Draw</span>
                                <v-icon>equalizer</v-icon>
                            </v-btn>
                        </v-btn-toggle>
                        <v-divider></v-divider>
                    </v-flex>

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
                <v-btn color="success" flat @click="finish">Finish the game</v-btn>
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
                blacks: null,
            },
            winner: 'draw'
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
        },
        finish() {
            let winner = null;

            if(this.times.whites !== null && this.times.blacks !== null) {
                // If the game is drawn
                if(this.winner === 'draw') {                    
                    // Check whose time is more that is the winner of the game
                    winner = this.times.whites > this.times.blacks ? 'whites' : 'blacks';                
                } else {
                    // If the game has a winner
                    winner = this.winner;
                }

                this.finishGame({ gameId: this.game._id.toString(), time: this.times, winner: winner });
            } else {
                // Player's times validation error...
                this.$store.dispatch('snackbar', {
                    color: 'warning',
                    active: true,
                    text: 'Before finishing the game choose players\' times!'
                });
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>