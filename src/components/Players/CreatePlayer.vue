<template>
    <div>
        <v-fab-transition>
            <v-btn
                v-show="$store.getters['players/createPlayer']"
                dark fab fixed bottom right color="blue"
                @click="showForm = true">
                <v-icon>add</v-icon>
            </v-btn>
        </v-fab-transition>

        <v-dialog v-model="showForm" persistent max-width="600px">
            <v-card>
                <v-form @submit.prevent="createPlayer" data-vv-scope="createPlayerForm">
                    <v-card-title>
                        <span class="headline">Create a new player</span>
                    </v-card-title>
                    <v-card-text>
                        <v-layout wrap>
                            <v-flex 
                                xs12 sm12 md12 lg12
                                v-for="(field, index) in playerFields"
                                :key="index"> 
                                <v-text-field
                                    v-model="playersInfo[field.name]"
                                    :name="field.name"
                                    :label="field.label"
                                    :prepend-icon="field.icon"
                                    :required="field.validation"
                                    :v-validate="field.validation ? 'required' : null"
                                    :data-vv-name="field.name"
                                    :error-messages="errors.collect([field.errorsName])"
                                ></v-text-field>                                        
                            </v-flex>

                            <v-flex xs12 sm12 md12 lg12>
                                <v-autocomplete
                                    v-model="playersInfo.playerCountry"
                                    :items="countriesNames"
                                    label="Player's country"
                                    persistent-hint
                                    prepend-icon="language"
                                >
                                </v-autocomplete>
                            </v-flex>
                            
                            
                            <v-flex xs12 sm12 md12 lg12>
                                <v-text-field 
                                    label="Выберите главное фото" 
                                    @click="pickFile" 
                                    v-model="playerPhoto.name" 
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
                        <v-btn color="primary" flat @click="showForm = false">Close</v-btn>
                        <v-btn color="success" flat type="submit">Create</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>        
    </div>
</template>

<script>
import countriesJson from '@/api/countries.json'
import { mapActions } from 'vuex'

export default {
    $_veeValidate: {
      validator: 'new'
    },
    data() {
        return {
            showForm: false,
            playerFields: [
                { name: 'playerName', label: 'Player\'s name', validation: true, errorsName: 'playerName', icon: 'person' },
                { name: 'playerEmail', label: 'Player\'s email', validation: false, errorsName: 'playerEmail', icon: 'email' },
                { name: 'playerPhone', label: 'Player\'s phone number', validation: false, errorsName: 'playerPhone', icon: 'phone' },
            ],
            playersInfo: {},
            countries: countriesJson,
            countriesNames: [],
            playerPhoto: {
                name: '',
                file: '',
                url: ''
            },
        }
    },
    methods: {
        ...mapActions([
            'players/createPlayer'
        ]),
        createPlayer() {
            this.playersInfo.playerPhoto = this.playerPhoto.file;
            this.$validator.validateAll('createPlayerForm')
                .then(success => {
                    if(success) {
                        let playerData = new FormData();
                        playerData.append('playerName', this.playersInfo['playerName']);
                        playerData.append('playerEmail', this.playersInfo['playerEmail']);
                        playerData.append('playerPhone', this.playersInfo['playerPhone']);
                        playerData.append('playerCountry', this.playersInfo['playerCountry']);
                        playerData.append('playerPhoto', this.playerPhoto.file);

                        this['players/createPlayer'](playerData);
                        this.playersInfo = {};
                        this.deleteCoverImage();
                        
                        this.showForm = false;
                    } else {
                        console.log('validation error');
                    }
                })
        },

        pickFile () {
            this.$refs.image.click();
        },

        onFilePicked (e) {
            const files = e.target.files;

            if(files[0] !== undefined) {
                this.playerPhoto.name = files[0].name;

                if(this.playerPhoto.name.lastIndexOf('.') <= 0) {
                    return
                }

                const fr = new FileReader();
                fr.readAsDataURL(files[0])
                fr.addEventListener('load', () => {
                    this.playerPhoto.url = fr.result;
                    this.playerPhoto.file = files[0];
                })
            } else {
                this.playerPhoto.url = '';
                this.playerPhoto.name = '';
                this.playerPhoto.file = '';
            }
        },

        deleteCoverImage() {
            this.playerPhoto.url = '';
            this.playerPhoto.name = '';
            this.playerPhoto.file = '';
        },
    },
    created() {
        this.countriesNames = this.countries.map(country => {
            return country.name.common;
        })
    }
}
</script>

<style>

</style>
