<template>
    <v-scale-transition 
        group 
        tag="div" 
        class="layout row wrap"
        v-if="players.length !== 0"
    >
        <v-flex xs12 sm4 md3 lg3 v-for="player in players" :key="player._id">
            <Player :item="player" />
        </v-flex>
    </v-scale-transition>
    <!-- Show if there's no players created by the user -->
    <EmptySet 
        v-else 
        text="You haven't created any players yet." />
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
    methods: {
        ...mapActions('players', [
            'getPlayers',
            'setCreatePlayer'
        ])
    },
    data() {
        return {
            countries: countriesJson
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
