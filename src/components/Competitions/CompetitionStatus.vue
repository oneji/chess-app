<template>
    <v-icon 
        medium 
        :color="options.color">
        {{ options.icon }}
    </v-icon>
</template>

<script>
export default {
    props: {
        status: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            optionsObj: {
                color: !this.status ? 'yellow' : 'green',
                icon: !this.status ? 'fiber_manual_record' : 'check'
            }
        }
    },
    computed: {
        options() {
            return this.optionsObj;
        }
    },
}
</script>

<style>

</style>
