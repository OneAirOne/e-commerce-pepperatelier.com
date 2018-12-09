<template>
  <v-card class="card">
    <v-toolbar height="50" flat color="white">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="toolbar"></slot>
      <v-tooltip top>
        <span>Back</span>
        <peeper-back-button slot="activator"></peeper-back-button>
      </v-tooltip>
    </v-toolbar>
    <v-divider></v-divider>
    <v-container class="peeper-scroll-y" fluid>
      <slot name="content"></slot>
    </v-container>
    <v-flex>
      <slot name="footer"></slot>
    </v-flex>
  </v-card>
</template>

<script>
import PeeperBackButton from '@/components/shared/BackButton';

export default {
  components: { PeeperBackButton },
  name: 'peeper-card',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
