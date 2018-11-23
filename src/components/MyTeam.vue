<template>
    <v-layout>
        <v-flex>
            <v-card>
            <v-toolbar color="primary">
            <v-toolbar-title>My Team</v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
            <v-list>
            <v-list-tile v-for="item in items_team" :key="item.title" avatar>
                <v-list-tile-action>
                <v-icon v-if="item.icon" color="pink">star</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-avatar>
                <img :src="item.avatar">
                </v-list-tile-avatar>
            </v-list-tile>
            </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
import ApiService from '@/services/services.js'
    
export default {
  data () {
      return {       
        items_team: [
          { icon: true, title: 'Juan - Online', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Maria', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Jose', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Andres', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ]
      }
    },
   methods: {       
   },
   created () {      
   }
}
</script>