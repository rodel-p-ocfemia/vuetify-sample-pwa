<template>
  <v-app :dark="darkTheme">
    <v-navigation-drawer transparent persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer"
      enable-resize-watcher fixed app>
      <link href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'>
      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading">
              <span style="font-weight:bold;font-family:'Allura';font-size: 20px; top:5px;"><b>{{ companyName }}</b></span>
            </div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-toolbar flat color="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../assets/Ninja-icon.png">
            </v-list-tile-avatar>
            <v-list-tile-content> 
              <div v-if="loggedIn">
                Welcome! <b>{{ this.name }}</b>
              </div>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-divider></v-divider>
        <v-list-tile to="/" ripple>
          <v-list-tile-action>
            <v-badge overlap color="orange">
                <span slot="badge">2</span>
                <v-icon>dashboard</v-icon>
              </v-badge>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/myprofile" ripple>
          <v-list-tile-action>
            <v-badge overlap color="orange">
                <v-icon slot="badge" dark small>notifications</v-icon>
                <v-icon>account_box</v-icon>
              </v-badge>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/attendance/daily" ripple>
          <v-list-tile-action>
            <v-icon>access_time</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Attendance</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/samplesearch" ripple>
          <v-list-tile-action>
            <v-icon>attach_money</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Payslip</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--
        <v-list-tile v-for="item in items" :key="item.title" @click="_selected(item)" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        -->
      </v-list>
    </v-navigation-drawer>
    <!--<v-toolbar app :clipped-left="clipped" color="primary" dark :class="toolbarcolor">-->
    <v-toolbar app :clipped-left="clipped">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn icon @click.stop="clipped = !clipped">
          <v-icon>web</v-icon>
        </v-btn>     
        <!--<v-divider vertical></v-divider>>-->       
        <!--<v-toolbar-title v-text="title" style="font-weight:bold;font-family:'Allura';font-size: 25px;"></v-toolbar-title>-->
        <v-spacer></v-spacer>
        <v-menu offset-y>       
          <v-btn slot="activator" flat icon>
            <v-icon>edit</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="(item, index) in coloritems" :key="index" @click="_changecolor(item)">
              <v-list-tile-title><div :class="item.colorname"><v-badge></v-badge></div></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn icon>
          <v-switch v-model="darkTheme"></v-switch>
        </v-btn>         
        <v-btn icon v-if="loggedIn" to="/logout">
            <v-icon>power_settings_new</v-icon>
        </v-btn>      
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>          
          <v-flex xs12 sm6 md9 style="padding-right:17px;">
              <v-scroll-y-transition mode="out-in">
                <router-view></router-view>
              </v-scroll-y-transition>
          </v-flex>
          <!--left nav-->
          <v-flex xs12 md3>
            <!--Clock-In-->
            <v-card>
              <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/plane.jpg">
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
                <v-btn flat color="primary">Time-In</v-btn>
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
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar>
              <v-list>
                <v-list-tile
                  v-for="item in items_team"
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
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span style="font-weight:bold;font-size:12px;">davzOps &copy; 2017 | 
        About | 
        Developers | 
        Contact Us
      </span>
    </v-footer>
  </v-app>
</template>
<script>
import colors from 'vuetify/es5/util/colors'
import auth from '../auth'

export default {
  name: 'App',
  data () {
    return {
      loggedIn: auth.loggedIn(),
      name: auth.getName(),
      clipped: true,
      drawer: true,
      fixed: false,
      items_team: [
          { icon: true, title: 'Jason Oner - Online', avatar: "@/assets/Ninja-icon.png" },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ],
      items: [{ title: 'My Dashboard', icon: 'dashboard', path: '/'},
              { title: 'My Attendance', icon: 'access_time', path: '/attendance'},
              { title: 'My Payslip - PRO', icon: 'attach_money', path: '/sample2' },
              { title: 'Compensation and Benefits-PRO', icon: 'bubble_chart', path: '/samplesearch' },
              { title: 'Sample Geo Location', icon: 'place', path: '/samplegeolocation' }
              ],
      coloritems: [{ title: 'Blue', color: colors.blue, colorname: 'blue' },
                  { title: 'Green', color: colors.green, colorname: 'green' },                  
                  { title: 'Purple', color: colors.purple, colorname: 'purple' },
                  { title: 'Red', color: colors.red.darken1, colorname: 'red' },
                  { title: 'Brown', color: colors.brown.darken1, colorname: 'brown' },
                  { title: 'Teal', color: colors.teal, colorname: 'teal' },
                  { title: 'Orange', color: colors.orange, colorname: 'orange' },
                  ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      companyName: 'Company ABC',
      darkTheme: false
    }
  },
  methods: {
    _selected(selected)
    {
      console.log(selected.icon)
      //this.$vuetify.theme.primary = colors.purple;
    },
    _changecolor(selected) {
      this.$vuetify.theme.primary = selected.color;
    }
  },  
  created () {
    console.log('created')
    console.log(auth.loggedIn())
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    },
    this.name = auth.getName()
  }
}
</script>
