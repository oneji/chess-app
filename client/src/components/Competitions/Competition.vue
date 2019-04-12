<template>  
    <v-card>
        <v-card-title primary-title>
            <div class="headline">
                <v-icon medium color="grey">dashboard</v-icon>
                {{ item.competitionName }}
            </div>
        </v-card-title>
        <v-divider light></v-divider>
        <v-card-actions class="px-3 py-1">
            <v-icon class="mr-2" small color="grey">access_time</v-icon>
            <span class="grey--text">Date: {{ item.createdAt }}</span>
            <v-spacer></v-spacer>
            <v-btn
                flat
                small 
                :to="{ name: 'Competition', params: { id: item._id } }">
                Open
            </v-btn>
            <v-btn fab small flat color="red" @click="deleteCompetition(item._id)">
                <v-icon>delete</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {

        }
    },
    methods: {
        deleteCompetition(projectId) {
            this.$store.dispatch('competitions/deleteCompetition', projectId);
        }
    },
    created() {
        console.log(this.item);
    }
}
</script>

<style>

</style>
