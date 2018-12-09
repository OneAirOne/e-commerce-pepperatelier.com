<template>
  <back-to-top class="peeper-back-on-top"><v-icon large>keyboard_arrow_up</v-icon></back-to-top>
</template>

<script>
import BackToTop from 'vue-backtotop';

export default {
  name: 'peeper-back-top',
  components: { BackToTop },
};
</script>

<style>
.peeper-back-on-top:hover {
  transform: scale(1.7);
  transition: all .5s;
}
</style>
