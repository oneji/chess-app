<template>
    <v-toolbar app fixed clipped-left>
        <v-btn :to="{ name: 'HomePage' }" fab small flat color="white">
            <v-icon>home</v-icon>
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
