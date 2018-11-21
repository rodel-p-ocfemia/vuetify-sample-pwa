<template>
  <v-layout>
    <v-flex xs9></v-flex>
    <v-flex xs3 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="require('@/assets/plane.jpg')" 
        >
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
        server_time: null
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