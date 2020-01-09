<template>
    <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12>
            <div class="loading-block">
                <v-progress-circular
                    :size="60"
                    color="primary"
                    indeterminate
                ></v-progress-circular>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .loading-block {
        display: flex;
        justify-content: center;
    }
</style>
