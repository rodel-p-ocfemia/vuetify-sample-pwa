<template>
 
      <v-card>
        <v-card dark>
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
                        <v-icon>event</v-icon>
                      </v-btn>
                      <v-list dense class="pt-0">
                        <v-list-tile-content>
                          <v-date-picker class="primary" v-model="date" landscape reactive></v-date-picker>
                        </v-list-tile-content>
                      </v-list>
                    </v-menu>
                    <v-menu bottom left transition="slide-x-reverse-transition">
                      <v-btn slot="activator" dark icon class="mr-3">
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                      <v-list>
                        <v-list-tile to="/attendance/daily">
                          <v-list-tile-title><v-icon>event</v-icon> Daily</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile to="/attendance/weekly">
                          <v-list-tile-title><v-icon>event_note</v-icon> Weekly</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile to="/attendance/monthly">
                          <v-list-tile-title><v-icon>date_range</v-icon> Monthly</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                  </v-card-title>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-title class="white--text pl-5 pt-5">
                  <v-layout align-center>
                    <v-layout column justify-end>
                      <div class="headline font-weight-light">December 2-8, 2018</div>
                    </v-layout>
                  </v-layout>
                </v-card-title>
              </v-layout>
          </v-img>
        </v-card>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-card>
</template>
<script>
  export default {
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]        
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