<template>
    <h1>{{ $route.params.slug }}</h1>
</template>

<script>
import axios from '@/axios'

export default {
    computed: {
        API_URL() {
            return process.env.VUE_APP_API_URL;
        }
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
