<template>
  <l-map class="peeper-map" ref="map" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution" >
    </l-tile-layer>
    <l-marker v-for="item in markers"
      :key="item.id"
      :lat-lng="item.position"
     >
      <l-popup :content="item.tooltip" :options="options"></l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export default {
  name: 'peeper-map',
  components: { LMap, LTileLayer, LMarker, LPopup, LTooltip, L },
  props: {
    markerList: {
      type: Array,
    },
  },
  data: () => ({
    zoom: 9,
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    center: [45.046362, 6.307102],
    markers: [],
    currentCenter: [45.046362, 6.307102],
    options: {
      riseOnHover: true,
      permanent: true,
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.markerList.forEach((element) => {
        this.markers.push(element);
      });
      if (this.$refs.map) {
        this.$refs.map.mapObject.scrollWheelZoom.disable();
      }
    });
  },
};
</script>

<style>
.peeper-map {
  z-index: 20 !important;
  height: 100%;
  width: 100%;
}
</style>
