<template>
    <v-toolbar dense app fixed clipped-left>
        <v-btn :to="{ name: 'HomePage' }" fab small flat color="white">
            <img style="width: 100%;" src="/images/chess-club-logo.svg" alt="John">
        </v-btn>
        <v-btn flat :to="{ name: 'Competitions' }">
            <v-icon left dark>assessment</v-icon>
            Competitions
        </v-btn>
        <v-btn flat :to="{ name: 'Players' }">
            <v-icon left dark>people</v-icon>
            Players
        </v-btn>
        <v-spacer></v-spacer>
        <!-- User menu -->
        <UserMenu />
    </v-toolbar>
</template>

<script>
import UserMenu from './UserMenu'

export default {
    components: {
        UserMenu
    }
}
</script>

<style>

</style>
