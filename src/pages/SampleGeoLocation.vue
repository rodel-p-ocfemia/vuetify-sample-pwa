<template>
  <div>
    <p>longitude: {{longitude}}</p>
    <p>latitude: {{latitude}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {        
        longitude: null,
        latitude: null
        }
    },
    created: function() {
        console.log('location')
         if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geo Location not supported by browser");
        }
    },
    methods: {
        showPosition(position) {
            /*
            var location = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }
            */
            this.longitude = position.coords.longitude
            this.latitude = position.coords.latitude
        }
    }
  }
</script>