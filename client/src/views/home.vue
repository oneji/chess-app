<template>
    <v-responsive color="grey lighten-2">
        <v-container fill-height>
            <v-layout justify center align-center>
                <v-flex class="text-md-center">
                    <img style="width: 220px; display: block; margin: 0 auto;" src="/images/chess-club-logo.svg" alt="">
                    <v-divider class="my-3"></v-divider>
                    <h3 class="display-3">Welcome to the Chess Club!</h3>
                    <span class="subheading">Here you can add players, create competitions and have fun with your friends as much as you want.</span>
                    <v-divider class="my-3"></v-divider>
                </v-flex>
            </v-layout>
        </v-container>
    </v-responsive>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    created() {
        this.$store.dispatch('contentLoading', false);
    }
}
</script>

<style lang="">
    
</style>