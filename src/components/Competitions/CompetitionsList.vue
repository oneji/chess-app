<template>
    <v-navigation-drawer fixed v-model="show" right clipped app>
        <Competition
            class="mb-2"
            v-for="item in items"
            :key="item._id" 
            :item="item" />
    </v-navigation-drawer>
</template>

<script>
import Competition from './Competition'

export default {
    props: {
        items: Array
    },
    components: {
        Competition
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
