import { defineStore } from 'pinia'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

axios.defaults.baseURL = 'http://localhost:4001/';

export const useUserStore = defineStore('user', {
    state: () => ({
        sub: '',
        email: '',
        picture: '',
        firstName: '',
        lastName: '',
    }),

    actions: {
        async getUserDetailsFromGoogle(data) {
            try {
                let res = await axios.post('api/google-login', {
                    token: data.credential
                })


                this.sub = res.data.sub
                this.email = res.data.email
                this.picture = res.data.picture
                this.firstName = res.data.given_name
                this.lastName = res.data.family_name
            } catch (e) {
                console.log(e);
            }
        },
