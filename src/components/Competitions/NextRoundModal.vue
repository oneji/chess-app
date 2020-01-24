<template>
    <v-dialog v-model="$store.getters['competitions/getNextRoundModal']" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Next round</span>
            </v-card-title>
            <v-card-text class="pt-0">
                <v-layout row wrap justify-space-around>
                    <v-flex xs12 sm12 md12 lg12>
                        <v-alert :value="true" type="info" icon="person" class="py-2">
                            {{ nextRound }}
                        </v-alert>
                        <v-divider class="my-3"></v-divider>
                    </v-flex>

                    <v-flex xs12 sm12 md12 lg12>
                        <v-select
                            :items="nextRoundTypes"
                            v-model="nextRoundType"
                            label="Choose next round type"
                            single-line
                            box
                            hide-details
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 md6 lg6>

                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="setNextRoundModal(false)">Close</v-btn>
                <v-btn color="success" flat @click="goToNextRound">Go to the next round</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        nextRound() {
            if(this.winnersCount === 2) {
                this.nextRoundType = 'final';
            } else if(this.winnersCount === 4) {
                this.nextRoundType = 'semiFinal';
            } if(this.winnersCount === 8) {
                this.nextRoundType = 'quarterFinal';
            } if(this.winnersCount > 8) {
                this.nextRoundType = 'qualifications';
            }
        },
        winnersCount() {
            // let competition = this.$store.getters['competitions/getCompetition'];
            // let competitionGameTypes = this.$store.getters['games/getGames'];

            // let games = [];
            // games.push(...competitionGameTypes['qualifications'].items);
            // games.push(...competitionGameTypes.quarterFinal.items);
            // games.push(...competitionGameTypes.semiFinal.items);
            // games.push(...competitionGameTypes.final.items);

            // let winners = games.filter(game => {
            //     return game.ended === true;
            // });

            // return winners.length;
        }
    },
    data() {
        return {
            nextRoundTypes: [
                { text: 'Qualification', value: 'qualifications' },
                { text: 'Quater final', value: 'quarterFinal' },
                { text: 'Semi final', value: 'semiFinal' },
                { text: 'Final', value: 'final' }
            ],
            nextRoundType: null,
            nextRoundBtnLoading: false
        }
    },
    methods: {
        ...mapActions('competitions', [
            'setNextRoundModal', 'nextRoundGames'
        ]),
        goToNextRound() {
            let competition = this.$store.getters['competitions/getCompetition'];
            this.nextRoundBtnLoading = true;
            console.log(competition)
            this.nextRoundGames({ 
                competitionId: competition._id, 
                gameType: this.nextRoundType 
            })
            .then(() => {
                this.$store.dispatch('games/getCompetitionGames', competition._id)
                    .then(() => {
                        this.nextRoundBtnLoading = false;
                    });
            });
        }
    }
}
</script>

<style lang="scss">
    
</style>