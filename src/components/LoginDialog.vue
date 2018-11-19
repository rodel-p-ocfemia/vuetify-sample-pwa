<template>  
  <v-dialog v-model="dialog" persistent max-width="400">
    <v-form ref="form" v-model="valid" lazy-validation>
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
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" :append-icon="show1 ? 'visibility_off' : 'visibility'"
                          :rules="passwordRules"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                      ></v-text-field>
           </v-card-text>  
           <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" :disabled="!valid" @click="submit" :loading="loading">Login</v-btn>
              <v-btn @click="clear">clear</v-btn>
              <v-btn @click.native="close">Cancel</v-btn>
            </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
  import auth from '../auth'

  export default {
    data: () => ({
      error: false,
      loading: false,
      show1: false,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Min 8 characters',
        v => v.length <= 20 || 'Max 20 characters'
      ]
    }),
    methods: {
       close() {
          this.$emit('update:dialog', false)
      },
      submit () {
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
    },
    props: {
        dialog: {
        default: false
      }
    }
  }
</script>