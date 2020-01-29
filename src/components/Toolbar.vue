<template>
    <v-toolbar dense app fixed clipped-left>
        <v-btn :to="{ name: 'HomePage' }" fab small flat color="white">
            <img style="width: 100%;" src="/images/chess-club-logo.svg" alt="John">
        </v-btn>

        <v-btn flat :to="{ name: 'Competitions' }" class="hidden-xs-only">
            <v-icon left dark>assessment</v-icon>
            Competitions
        </v-btn>
        <v-btn flat :to="{ name: 'Players' }" class="hidden-xs-only">
            <v-icon left dark>people</v-icon>
            Players
        </v-btn>

        <!-- ... -->
        <v-btn fab small flat :to="{ name: 'Competitions' }" class="hidden-sm-and-up">
            <v-icon>assessment</v-icon>
        </v-btn>
        <v-btn fab small flat :to="{ name: 'Players' }" class="hidden-sm-and-up">
            <v-icon>people</v-icon>
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
