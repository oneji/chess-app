<template>
    <v-toolbar app fixed clipped-left>
        <v-btn :to="{ name: 'HomePage' }" fab small flat color="white">
            <img style="width: 100%;" src="/images/chess-club-logo.svg" alt="John">
        </v-btn>
        <v-btn :to="{ name: 'Competitions' }">Competitions</v-btn>
        <v-btn :to="{ name: 'Players' }">Players</v-btn>
        <v-toolbar-title></v-toolbar-title>
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
