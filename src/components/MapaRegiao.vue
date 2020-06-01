<template>
  <div>
    <h2>Confira o relatos de pessoas com covid na sua região!</h2>
    <div ref="map" class="map"></div>
  </div>
</template>

<script>
export default {
  mounted() {
      setTimeout(this.initMap, 5000);
  },
  methods: {
    initMap: function() {
      var pontos = [{ lat: -23.6378209, lng: -46.7532582 },{ lat: -23.506066, lng: -46.6448636}, {lat: -23.5657212, lng: -46.6534179}, {lat: -23.5537742, lng: 46.4917594}, {lat: -23.5867304, lng: -46.4875677}, {lat: -23.5159374,lng: -46.4967897}, {lat: -23.6376041,lng:-46.7532168}, {lat: -23.6371653,lng: -46.7536142}, {lat: -23.6377901,lng: -46.7544276}, {lat: -23.6387075,lng: -46.7531657}, {lat: -23.6386765,lng: -46.7525714}, {lat: -23.636656,lng:-46.7546152}, {lat: -23.6376692,lng: -46.7532187}, {lat: -23.6379288,lng: -46.7543502}, {lat: -23.6372608,lng: -46.7538562}, {lat: -23.6372188,lng: -46.7546612}, {lat: -23.6375478,lng: -46.7547522}];
      var map = new google.maps.Map(this.$refs.map,{
        zoom: 19,
        center: {lat: -23.6378209, lng: -46.7532582 }
      });
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
