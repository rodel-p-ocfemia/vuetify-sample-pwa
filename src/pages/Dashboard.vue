<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md9>
        <v-card>
          <v-toolbar class="primary">
             <v-btn icon>
              <v-icon>event</v-icon>
            </v-btn>
            <v-toolbar-title>Events / Updates</v-toolbar-title>   
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
                  @click=""
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
                    class="mx-0"
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
                <img :src="item.avatar">
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>   
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { icon: true, title: 'Jason Oner - Online', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ],
        items_updates: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
          }
        ]
      }
    }
  }
</script>