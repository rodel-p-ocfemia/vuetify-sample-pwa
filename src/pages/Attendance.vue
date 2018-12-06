<template>
<v-card class="mx-auto" max-width="100%">
          <v-card dark flat>
            <v-img style="height:250px;" src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
              gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)" >
                <v-layout column fill-height>
                  <v-card-title>
                    <v-btn dark icon>
                      <v-icon>chevron_left</v-icon>
                    </v-btn>
                    <v-btn dark icon class="mr-3">
                      <v-icon>chevron_right</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-card-title class="white--text">
                      <v-menu bottom left transition="slide-x-reverse-transition">
                        <v-btn slot="activator" dark icon>
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                        <v-list dense class="pt-0">
                          <v-list-tile-content>
                            <v-date-picker class="primary" v-model="date" landscape reactive></v-date-picker>
                          </v-list-tile-content>
                        </v-list>
                      </v-menu>
                    </v-card-title>
                  </v-card-title>
                  <v-spacer></v-spacer>
                  <v-card-title class="white--text pl-5 pt-5">
                    <v-layout align-center>
                      <strong class="display-4 font-weight-regular mr-4">8</strong>
                      <v-layout column justify-end>
                        <div class="headline font-weight-light">Monday</div>
                        <div class="text-uppercase font-weight-light">February 2015</div>
                      </v-layout>
                    </v-layout>
                  </v-card-title>
                </v-layout>
            </v-img>
          </v-card>
          <v-card-text class="py-0">
            <v-timeline align-top dense>
              <v-timeline-item color="pink" small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>5pm</strong>
                  </v-flex>
                  <v-flex>
                    <strong>New Icon</strong>
                    <div class="caption">Mobile App</div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
              <v-timeline-item color="teal lighten-3" small>
                <v-layout wrap pt-3>
                  <v-flex xs3>
                    <strong>3-4pm</strong>
                  </v-flex>
                  <v-flex>
                    <strong>Design Stand Up</strong>
                    <div class="caption mb-2">Hangouts</div>
                    <v-avatar>
                      <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                      ></v-img>
                    </v-avatar>
                    <v-avatar>

                      <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                      ></v-img>
                    </v-avatar>
                    <v-avatar>
                      <v-img
                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                      ></v-img>
                    </v-avatar>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
              <v-timeline-item color="pink" small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>12pm</strong>
                  </v-flex>
                  <v-flex>
                    <strong>Lunch break</strong>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
              <v-timeline-item color="teal lighten-3" small>
                <v-layout pt-3>
                  <v-flex xs3>
                    <strong>9-11am</strong>
                  </v-flex>
                  <v-flex>
                    <strong>Finish Home Screen</strong>
                    <div class="caption">Web App</div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
</template>
<script>
  export default {
    data: () => ({
        date: new Date().toISOString().substr(0, 10)
        
    }),

    mounted () {
      
    },

    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        return parseInt(day, 10) % 3 === 0
      }
    }
  }
</script>