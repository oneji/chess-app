<template>
    <div>
        <v-fab-transition>
            <v-btn
                absolute dark fab bottom right color="blue"
                @click="showForm = true">
                <v-icon>add</v-icon>
            </v-btn>
        </v-fab-transition>

        <v-dialog v-model="showForm" persistent max-width="600px">
            <v-card>
                <v-form @submit.prevent="createCompetition" data-vv-scope="create-competition-form">
                    <v-card-title>
                        <span class="headline">Create a new competition</span>
                    </v-card-title>
                    <v-card-text>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md12 lg12> 
                                    <v-text-field
                                        v-model="competitionName"
                                        name="competition_name"
                                        label="Competition name" 
                                        required
                                        v-validate="'required'"
                                        data-vv-name="competition_name"
                                        :error-messages="errors.collect('competition_name')"
                                    ></v-text-field>                                        
                                </v-flex>
                        </v-layout>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="showForm = false">Close</v-btn>
                        <v-btn color="blue darken-1" flat type="submit">Save</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>        
    </div>
</template>

<script>
export default {
    $_veeValidate: {
      validator: 'new'
    },
    data() {
        return {
            showForm: false,
            competitionName: ''
        }
    },
    methods: {
        createCompetition() {
            this.$validator.validateAll('create-competition-form')
                .then(success => {
                    console.log(success);
                    console.log(this.$validator.errors);

                    if(success) {
                        let competitionData = {
                            competitionName: this.competitionName
                        }

                        console.log('data: ', competitionData)

                        this.$store.dispatch('competitions/createCompetition', competitionData);
                        this.showForm = false;
                    }
                })
        }
    }
}
</script>

<style>

</style>
