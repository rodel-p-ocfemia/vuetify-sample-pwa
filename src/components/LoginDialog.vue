<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="400">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Login
                </v-card-title>
                <v-card-text>
                    <v-layout row wrap>
                        
                            <v-text-field v-model="email" label="Email" :rules="[rules.required, rules.email]"></v-text-field>
                        
                            <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'visibility_off' : 'visibility'"
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
                <v-btn color="primary" flat @click.native="close">Cancel</v-btn>
                <v-btn color="primary" flat @click.native="close" to="/">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
  export default {
    name: 'login-dialog',
    data () {
      return {
        show1: false,
        title: 'Preliminary report',
        email: '',
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
      }
    }
  }
</script>