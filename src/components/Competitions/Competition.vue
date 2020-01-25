<template>  
    <v-card>
        <v-card-title primary-title>
            <div class="headline text-truncate">
                <!-- Competition name and status -->
                <CompetitionStatus 
                    :started="item.started"
                    :finished="item.finished" />
                {{ item.competitionName }}
            </div>
        </v-card-title>
        <v-divider light></v-divider>
        <v-card-actions class="px-3 py-1">            
            <!-- Created at -->
            <v-icon class="mr-2" small color="grey">access_time</v-icon>
            <span class="grey--text mr-2">{{ item.createdAt | moment('MMMM D, YYYY')}}</span>
            <v-spacer></v-spacer>
            <!-- Open competition -->
            <v-btn flat small :to="{ name: 'Competition', params: { slug: item.slug } }">
                Open
            </v-btn>
            <!-- Delete competition -->
            <v-btn fab small flat color="red" @click="deleteCompetition(item._id)">
                <v-icon>delete</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import CompetitionStatus from './CompetitionStatus'

export default {
    props: {
        item: Object
    },
    components: {
        CompetitionStatus
    },
    data() {
        return {

        }
    },
    methods: {
        deleteCompetition(projectId) {
            this.$store.dispatch('competitions/deleteCompetition', projectId);
        }
    }
}
</script>

<style>

</style>
