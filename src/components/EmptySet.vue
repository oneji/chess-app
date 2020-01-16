<template>
    <v-layout row wrap>
        <v-flex>
            <v-alert icon="info" :value="true" type="success" outline transition="scale-transition">
                {{ text }}
            </v-alert>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>
