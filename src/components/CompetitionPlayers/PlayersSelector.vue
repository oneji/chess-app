<template>
    <div>
        <v-select
            v-model="playersToParticipate"
            :items="playersList"
            label="Choose players"
            multiple
            box
            hide-details 
            class="mb-3"
        >
            <template v-slot:prepend-item>
                <v-list-tile
                    ripple
                >
                    <v-list-tile-action>
                        <v-icon :color="playersToParticipate.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Select All</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider class="mt-2"></v-divider>
            </template>
        </v-select>
        <v-btn 
            color="success" 
            block 
            outline 
            class="mb-3"
            @click="addPlayerToParticipants"
        >   
            Add
        </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        competition() {
            return this.$store.getters['competitions/getCompetition'];
        },

        playersList() {
            let players = this.$store.getters['players/getPlayers'];
            let parsedPlayers = [];

            for(let i = 0; i < players.length; i++) {
                parsedPlayers.push({
                    text: players[i].playerName,
                    value: players[i]._id
                });
            }

            return parsedPlayers;
        },

        icon () {
            return 'home'
        }
    },
    data() {
        return {
            playersToParticipate: []
        }
    },
    methods: {
        ...mapActions('players', [
            'getPlayers'
        ]),

        addPlayerToParticipants() {
            this.$store.dispatch('competitions/addPlayers', this.playersToParticipate);
            this.playersToParticipate = [];
        }
    },
    created() {
        this.getPlayers();
    }
}
</script>

<style>

</style>
