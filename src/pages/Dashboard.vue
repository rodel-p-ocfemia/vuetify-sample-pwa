<template>
    <v-layout row wrap>
        <v-flex xs6>
            <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive" readonly></v-date-picker>
        </v-flex>
        <v-flex xs6>
            asdf
        </v-flex>
    </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        landscape: true,
        reactive: false
      }
    }
  }
</script>