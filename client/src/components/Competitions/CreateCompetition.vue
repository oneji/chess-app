<template>
    <div>
        <v-fab-transition>
            <v-btn
                dark fab fixed bottom right color="blue"
                @click="showForm = true">
                <v-icon>add</v-icon>
            </v-btn>
        </v-fab-transition>

        <v-dialog v-model="showForm" persistent max-width="600px">
            <v-card>
                <v-form @submit.prevent="createCompetition" data-vv-scope="createCompetitionForm">
                    <v-card-title>
                        <span class="headline">Create a new competition</span>
                    </v-card-title>
                    <v-card-text>
                        <v-layout wrap>
                            <v-flex xs12 sm12 md12 lg12> 
                                <v-text-field
                                    v-model="competitionName"
                                    name="competitionName"
                                    label="Competition name"
                                    prepend-icon="label"
                                    required
                                    v-validate="'required'"
                                    data-vv-name="competitionName"
                                    :error-messages="errors.collect('competitionName')"
                                ></v-text-field>
                            </v-flex>
                            
                            <v-flex xs12 sm12 md12 lg12>
                                <v-text-field 
                                    label="Выберите главное фото" 
                                    @click="pickFile" 
                                    v-model="competitionLogo.name" 
                                    prepend-icon="attach_file"
                                    append-icon="delete" 
                                    @click:append="deleteCoverImage"
                                ></v-text-field>
                                <input type="file" style="display: none" @change="onFilePicked" ref="image" accept="image/*">
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
            competitionName: '',
            competitionLogo: {
                name: '',
                file: '',
                url: ''
            }
        }
    },
    methods: {
        createCompetition() {
            this.$validator.validateAll('createCompetitionForm')
                .then(success => {
                    if(success) {
                        let  competitionData = new FormData(); 
                        competitionData.append('competitionName', this.competitionName);
                        competitionData.append('competitionLogo', this.competitionLogo.file);

                        // Clear inputs
                        this.competitionName = '';
                        this.deleteCoverImage();

                        this.$store.dispatch('competitions/createCompetition', competitionData);
                        this.showForm = false;
                    }
                })
        },

        pickFile () {
            this.$refs.image.click();
        },

        onFilePicked (e) {
            const files = e.target.files;

            if(files[0] !== undefined) {
                this.competitionLogo.name = files[0].name;

                if(this.competitionLogo.name.lastIndexOf('.') <= 0) {
                    return
                }

                const fr = new FileReader();
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                    this.competitionLogo.url = fr.result;
                    this.competitionLogo.file = files[0];
                })
            } else {
                this.competitionLogo.url = '';
                this.competitionLogo.name = '';
                this.competitionLogo.file = '';
            }
        },

        deleteCoverImage() {
            this.competitionLogo.url = '';
            this.competitionLogo.name = '';
            this.competitionLogo.file = '';
        },
    }
}
</script>

<style>

</style>
