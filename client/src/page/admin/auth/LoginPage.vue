<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <!--  :append-icon-cb="() => (passwordFieldVisible = !passwordFieldVisible)"  -->
              <v-text-field
                name="login"
                label="Login"
                v-model="form.login"
                v-validate="'required|email'"
                :error-messages="errors.collect('login')"
                prepend-icon="mail"
              >
              </v-text-field>
              <v-text-field
                name="password"
                label="Password"
                v-model="form.password"
                prepend-icon="lock"
                v-validate="'required'"
                :error-messages="errors.collect('password')"
                :append-icon="passwordFieldVisible ? 'visibility' : 'visibility_off'"
                value=""
                class="input-group--focused"
                @keyup.enter.native="submit()"
                :type="!passwordFieldVisible ? 'password' : 'text'"
              >
              </v-text-field>
              </v-form>
              <v-alert
                v-show="error !== null"
                type="error"
              >
                {{ error !== null ? error.message : '' }}
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="submit()"
                :loading="isLoading"
                :disabled="errors.any() || !isComplete || isLoading"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { LOGIN } from '@/store/modules/auth/transactions';
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      drawer: null,
      form: {
        login: this.$route.query.login || '',
        password: '',
      },
      passwordFieldVisible: false,
    };
  },
  methods: {
    ...mapActions('auth', { login: LOGIN.action }),
    async submit() {
      try {
        await this.login(this.form);
        this.$router.push({ name: 'admin-products' });
      } catch (error) {
        this.form.password = '';
      }
    },
  },
  computed: {
    ...mapState('auth', {
      isLoading: LOGIN.keys.pending,
      error: LOGIN.keys.error,
    }),
    isComplete() {
      return this.form.login !== '' && this.form.password !== '';
    },
  },
};
</script>

<style>

</style>
