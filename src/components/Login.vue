<template>
    <div class="login-page-container"> 
        <v-flex xs11 sm6 md4 lg3 dark> 
            <v-card class="elevation-2 px-4 py-5">                    
                <!-- <v-card-media>
                    <v-layout row justify-center>
                        <v-flex>
                            <div class="user-avatar"></div>
                        </v-flex>
                    </v-layout>
                </v-card-media>  -->
                                    
                <v-card-text>
                    <v-alert
                        transition="scale-transition"
                        :value="$store.getters['auth/getAuthError'].error"
                        type="error"
                        icon="error"
                        outline
                    >
                        {{ $store.getters['auth/getAuthError'].errorMessage }}                        
                    </v-alert>

                    <v-form @submit.prevent="login">
                        <v-text-field v-model="username" name="username" label="Имя пользователя" type="text"
                            v-validate="'required'" 
                            :error-messages="errors.collect('username')"
                            data-vv-name="username" data-vv-as='"Имя пользователя"' required                                    
                        ></v-text-field>
                        <v-text-field v-model="password" name="password" label="Пароль" hint="Минимум 6 символов"
                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                            @click:append="() => (showPassword = !showPassword)"
                            :type="showPassword ? 'password' : 'text'"
                            v-validate="'required|min:6'"
                            :error-messages="errors.collect('password')"
                            data-vv-name="password" data-vv-as='"Пароль"' required 
                        ></v-text-field>                         
                        <v-btn :loading="$store.getters['auth/getAuthLoadingState']" color="info" block large type="submit">Войти</v-btn>
                    </v-form>
                </v-card-text> 
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import axios from '@/axios'

export default {
    $_veeValidate: {
        validator: 'new'
    },
    data: () => ({        
        showPassword: true,
        username: '',
        password: ''
    }),
    methods: {
        login() {            
            this.$validator.validateAll().then(success => {
                if(success) {
                    this.$store.dispatch('auth/login', {
                        username: this.username,
                        password: this.password
                    });       
                }
            });                
        }
    }
}
</script>

<style scoped>
    .login-page-container {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-avatar {
        width: 70px;
        height: 70px;
        display: block;
        text-align: center;
        border-radius: 100%;
        /* background-image: url('../assets/images/user.png'); */
        background-repeat: no-repeat;
        background-color: rgba(0, 0, 0, .085);
        background-position: 50% 1px;
        margin: 0 auto;
    }
</style>
