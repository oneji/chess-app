<template>
    <div v-if="!$store.getters.getContentLoading">
        <v-scale-transition 
            group 
            tag="div" 
            class="layout row wrap"
            v-if="players.length !== 0"
        >
            <v-flex xs12 sm4 md3 lg2 v-for="player in players" :key="player._id">
                <Player 
                    :item="player"
                    @delete="deleteP" />
            </v-flex>
        </v-scale-transition>
        <!-- Show if there's no players created by the user -->
        <EmptySet 
            v-else
            text="You haven't created any players yet." />
    </div>    
</template>

<script>
import countriesJson from '@/api/countries.json'
import EmptySet from '@/components/EmptySet'
import Player from '@/components/Players/Player'
import { mapActions } from 'vuex'

export default {
    components: {
        Player,
        EmptySet
    },
    computed: {
        players() {
            return this.$store.getters['players/getPlayers'];
        }
    },
    data() {
        return {
            countries: countriesJson
        }
    },
    methods: {
        ...mapActions('players', [
            'getPlayers',
            'setCreatePlayer',
            'deletePlayer'
        ]),
        deleteP(playerId) {
            this.deletePlayer(playerId);
        }
    },
    created() {
        this.getPlayers();
        this.setCreatePlayer(true);
    },
    destroyed() {
        this.setCreatePlayer(false);
    },
}
</script>

<style>

</style>
