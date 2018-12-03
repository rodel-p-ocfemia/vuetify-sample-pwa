<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <!--Updates section-->
      <v-flex xs12 sm12 md12>
        <v-card>
           <v-toolbar dark color="primary">
              <v-toolbar-title></v-toolbar-title>
              <v-text-field class="mx-3" flat hide-no-data hide-details label="What's up" solo-inverted>
              </v-text-field>
                <v-btn icon>
                  <v-icon>send</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list three-line>
                <template v-for="(item, index) in items_updates">
                  <v-subheader v-if="item.header" :key="item.header">
                    {{ item.header }}
                  </v-subheader>
                  <v-divider
                    v-else-if="item.divider"
                    :inset="item.inset"
                    :key="index"
                  ></v-divider>
                  <v-list-tile v-else :key="item.title" avatar>
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
        </v-card>
      </v-flex>
    </v-layout>   
  </v-container>
</template>
<script>
import ApiService from '@/services/services.js'
  export default {
    data () {
      return {
        server_date: null,
        server_time: null,
        items: [
          { icon: true, title: 'Jason Oner - Online', avatar: "@/assets/Ninja-icon.png" },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ],
        items_updates: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Update',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; will be late today due to personal matters."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Reminder',
            subtitle: "Team building tomorrow night."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'For Approval',
            subtitle: "Timesheet for approval"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Reminder',
            subtitle: "Holiday on Friday"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Reminder',
            subtitle: "Timesheet submission due on Friday"
          },
          { divider: true, inset: true }       
        ]
      }
    },
    methods: {
       async getServerTime () {
           const response = await ApiService.getServerTime()
           this.server_date = this.formatDate(response.data)
           this.server_time = this.formatTime(response.data)
       },
        formatDate(dtstring) {
            var dt = new Date(dtstring)          
            return dt.toLocaleDateString()
        },
        formatTime(dtstring) {
            var dt = new Date(dtstring);
            var hrs = dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()
            var min = dt.getMinutes() >= 10 ? dt.getMinutes() : "0" + dt.getMinutes()
            var am_pm = dt.getHours() > 12 ? "PM" : "AM"
            return hrs + ":" + min + " " + am_pm
        }
    },
    created: function() {
      this.getServerTime()
       setInterval(this.getServerTime, 60000)
    }
  }
</script>