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

                if (!userExists) await this.saveUserDetails(res);

                this.sub = res.data.sub
                this.email = res.data.email
                this.picture = res.data.picture
                this.firstName = res.data.given_name
                this.lastName = res.data.family_name
            } catch (e) {
                console.log(e);
            }
        },
        async saveUserDetails(res) {
            try {
                await setDoc(doc(db, 'users', res.data.sub), {
                    sub: res.data.sub,
                    email: res.data.email,
                    picture: res.data.picture,
                    firstName: res.data.given_name,
                    lastName: res.data.family_name
                })
            } catch (e) {
                console.log(e);
            }

        },
        logout() {
            this.sub = '',
                this.email = '',
                this.picture = '',
                this.firstName = '',
                this.lastName = ''
        },
    },
    persist: true
})