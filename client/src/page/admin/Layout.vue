<template>
  <v-layout>
    <peeper-navigation></peeper-navigation>
    <v-content>
      <v-layout column>
        <v-flex mb-2>
          <peeper-toolbar></peeper-toolbar>
        </v-flex>
        <v-flex>
          <v-card flat>
            <v-layout class="peeper-layout">
              <v-flex class="peeper-scroll-y">
                <v-container pa-1>
                  <router-view :key="$route.path"></router-view>
                </v-container>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
    <peeper-snackbar></peeper-snackbar>
    <v-footer color="secondary" app>
      <span class="white--text" style="margin-left:10px">&copy; Peeper Atelier 2018</span>
    </v-footer>
  </v-layout>
</template>

<script>
import PeeperNavigation from '@/components/admin/Navigation';
import PeeperSnackbar from '@/components/Snackbar';
import PeeperToolbar from '@/components/admin/Toolbar';

export default {
  components: { PeeperNavigation, PeeperSnackbar, PeeperToolbar },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
.peeper-layout {
  display: flex;
  max-height: 86vh;
}
.peeper-scroll-y {
  overflow: auto;
}
</style>

