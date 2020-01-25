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
        started: Boolean,
        finished: Boolean
    },
    computed: {
        options() {
            let color = 'yellow';
            let icon = 'fiber_manual_record';

            if(this.started) {
                color = 'green';
                icon = 'check'
            }

            if(this.finished) {
                color = 'red';
                icon = 'done_all';
            }

            return { 
                color, 
                icon
            };
        }
    },
}
</script>

<style>

</style>
