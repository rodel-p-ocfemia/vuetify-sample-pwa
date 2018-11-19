<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="400">
            <v-form @submit.prevent="login" ref="form">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                  <v-layout align-center justify-space-around wrap>
                    <v-avatar color="primary" size="100" overlap>
                       <img :src="require('@/assets/logo.png')">                      
                    </v-avatar>
                  </v-layout>
                </v-card-title>
                <v-card-text>
                    <p v-if="error" class="error">Bad login information</p>
                    <v-layout row wrap>                      
                      <v-text-field append-icon="account_circle" v-model="email" label="Email" :rules="[rules.required, rules.email, rules.min]"></v-text-field>
                      <v-text-field v-model="pass" :append-icon="show1 ? 'visibility_off' : 'visibility'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-layout>                    
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" type="submit" :loading="loading" >Login</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                    <v-btn @click.native="close">Cancel</v-btn>
                </v-card-actions>
            </v-card>
            </v-form>
        </v-dialog>
    </div>
</template>
<script>
import auth from '../auth'
  export default {
    name: 'login-dialog',
    data () {
      return {
        loading: false,
        email: '',        
        pass: '',
        error: false,
        show1: false,
        title: 'Preliminary report',        
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    },
    props: {
        dialog: {
        default: false
      }
    },
    methods: {
        close() {
          this.$emit('update:dialog', false)
        },
        login () {
          console.log('login')
          if (this.$refs.form.validate()) {
            this.loading = true
            auth.login(this.email, this.pass, loggedIn => {
            console.log('login')
            if (!loggedIn) {
              this.error = true
              this.loading = false
            } else {
              this.$router.replace(this.$route.query.redirect || '/')  
              this.loading = false
              //this.$store.commit('changeName', auth.getName())                      
            }
          })     
          }             
        },
        clear () {
            this.error = false
            this.$refs.form.reset()
        }
    }
  }
</script>