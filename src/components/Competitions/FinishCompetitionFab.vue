<template>
    <div>
        <v-fab-transition>
            <v-btn
                v-show="$store.getters['competitions/createCompetition']"
                dark fab fixed bottom right color="blue"
                @click="showForm = true">
                <v-icon>add</v-icon>
            </v-btn>
        </v-fab-transition>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    
</style>