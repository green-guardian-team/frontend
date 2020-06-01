<template>
  <div ref="map" class="map"></div>
</template>

<script>
export default {
  mounted() {
      setTimeout(this.initMap, 5000);
  },
  methods: {
    initMap: function() {
      // The location of saopaulo
      var pontos = [{ lat: -23.6378209, lng: -46.7532582 },
      { lat: -23.5159423, lng: -46.4967897}];
      // The map, centered at saopaulo
      var map = new google.maps.Map(this.$refs.map,{
        zoom: 10,
        center: {lat: -23.6378209, lng: -46.7532582 }
      });
      // The marker, positioned at saopaulo
      for (let index = 0; index < pontos.length; index++) {
          const element = pontos[index];
          var marker = new google.maps.Marker({ position: element, map: map });
      }
    }
  }
};
</script>

<style scoped>
/* Always set the map height explicitly to define the size of the div
    * element that contains the map. */
.map {
    width: 100%;
    height: 80vh;
    background-color: grey;
}
/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
