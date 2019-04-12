<template>
    <v-dialog
        v-model="$store.getters.getContentLoading"
        hide-overlay
        persistent
        width="300"
    >
        <v-card
            color="dark"
            dark
        >
            <v-card-text>
                Загрузка данных
                <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>    
</template>

<script>
export default {

}
</script>

<style>
</style>
