<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
        <v-card>
          <v-toolbar class="primary" dark>
             <v-btn icon>
              <v-icon>event</v-icon>
            </v-btn>
            <v-toolbar-title>Events</v-toolbar-title>              
            <v-spacer></v-spacer>  
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>      
          </v-toolbar>
          <v-list three-line>
              <template v-for="(item, index) in items_updates">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                >
                  {{ item.header }}
                </v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :inset="item.inset"
                  :key="index"
                ></v-divider>

                <v-list-tile
                  v-else
                  :key="item.title"
                  avatar                  
                >
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
            <v-list three-line>
              <template v-for="(item, index) in items_updates_upcoming">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                >
                  {{ item.header }}
                </v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :inset="item.inset"
                  :key="index"
                ></v-divider>

                <v-list-tile
                  v-else
                  :key="item.title"
                  avatar
                  
                >
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
          <v-card-text style="height: 100px; position: relative">
            <v-text-field
                v-model="input"
                hide-details
                flat
                label="Leave a comment..."
                solo
                @keydown.enter="comment"
              >
                <template slot="append">
                  <v-btn
                    class="orange"
                    depressed
                    @click="comment"
                  >
                    Post
                  </v-btn>
                </template>
              </v-text-field>
          </v-card-text>
        </v-card>
      </v-flex>      
      <v-flex xs12 sm12 md3>
        <!--Clock-In-->
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Timezone: Manila</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span>Date : {{ server_date }}</span><br>
              <span>Time : {{ server_time }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Time-In</v-btn>
          </v-card-actions>
        </v-card><br>
        <!--My Team-->
        <v-card> 
          <v-toolbar color="primary" dark>         
            <v-btn icon>
              <v-icon>group_work</v-icon>
            </v-btn>
            <v-toolbar-title>My Team</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
            >
              <v-list-tile-action>
                <v-icon v-if="item.icon" color="green">star</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-avatar>
                <img :src="require('@/assets/Robot-icon.png')">
              </v-list-tile-avatar>
            </v-list-tile>
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
          { divider: true, inset: true }
        ],
        items_updates_upcoming: [
          { header: 'Upcoming' },          
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