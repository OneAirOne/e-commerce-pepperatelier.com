<template>
  <v-dialog v-model="show" persistent max-width="290">
    <v-card>
      <v-card-title class="subheading">{{ title }}</v-card-title>
      <v-card-text>{{ subTitle }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" flat @click="cancel()">Annuler</v-btn>
        <v-btn color="success" flat @click="confirm()">Confirmer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'peeper-dialog',
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    confirm() {
      this.$emit('close', true);
      this.$emit('update:show', false);
    },
    cancel() {
      this.$emit('close', false);
      this.$emit('update:show', false);
    },
  },
};
</script>
