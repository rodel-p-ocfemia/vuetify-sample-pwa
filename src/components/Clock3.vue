<template>
  <v-layout>
    <v-flex xs9>
        <!--Events-->
        <v-card>
          <v-toolbar class="primary">
            <h3>Events/Updates</h3>
          </v-toolbar>
          <v-card-text style="height: 400px;" class="grey lighten-5">
            <v-chip >
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
            </v-avatar>
            Trevor Hansen
          </v-chip>
          </v-card-text>
          <v-card-text style="height: 100px; position: relative" class="primary">
              <v-form>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-text-field outline label="Message" append-icon="send"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>           
          </v-card-text>
        </v-card>
    </v-flex>
    <v-flex xs3 sm6 offset-sm3>
      <!--Time-in-->
      <v-card color="yellow" class="white--text">
          <v-img class="white--text" :src="require('@/assets/plane.jpg')" height="100px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Timezone</span>
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
          <v-btn flat color="orange">Time-Out</v-btn>
        </v-card-actions>
      </v-card><br>
      <!--my team-->
      <v-card>
        <v-toolbar color="primary">
          <v-toolbar-title>My Team</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="item in items_team" :key="item.title" avatar>
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
      </v-card><br>
      <!--my attendance-->
      <v-card>
        <v-toolbar color="primary">
          <v-toolbar-title>My Attendance</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="item in items_attendance" :key="item.title" avatar>
            <v-list-tile-action>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img :src="require('@/assets/sample_map.png')">
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
        server_date: null,
        server_time: null,
        items_team: [
          { icon: true, title: 'Juan - Online', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Maria', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Jose', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Andres', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ],
        items_attendance: [
          { icon: true, title: 'Thursday - Alabang', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Wednesday - Alabang', avatar: 'htztps://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Tuesday - Alabang', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Monday - Bacoor', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
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
   created () {
       this.getServerTime()
       setInterval(this.getServerTime, 60000)
   }
}
</script>