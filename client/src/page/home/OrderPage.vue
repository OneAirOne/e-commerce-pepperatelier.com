<template>
  <div>
    <h2 class="headline font-weight-thin text-uppercase  text-xs-center mt-4 mb-2">précommander</h2>
    <!-- <v-container fluid> -->

    <!-- </v-container> -->
    <v-layout row wrap>
        <v-container>
          <v-layout justify-end>
            <v-btn flat @click="goBack">retour</v-btn>
          </v-layout>
          <v-flex>
            En raison du carractère artisanal de la marque Pepper, la vente en ligne n'est pas encore disponnible.
          </v-flex>
          <v-flex mb-4>
            Vous avez 2 solutions pour acquerir une planche Pepper :
          </v-flex>
          <v-flex ml-3 mb-3>
            <v-icon>done</v-icon> poursuivre votre précommande pour le modèle que vous avez choisi, afin que Pepper prenne contact avec vous.
          </v-flex>
          <v-flex ml-3 mb-5>
            <v-icon>done</v-icon>trouver un distributeur via la rubrique <strong class="peeper-shop" @click="goToShop"> points de vente </strong>
          </v-flex>
          <v-flex v-if="cart.length > 0">
            <h1 class="title mb-3">Résumé de votre panier :</h1>
            <v-flex mb-5>
              <v-list
                v-for="(item, index) in cart"
                :key="index"
              >
                <v-layout row>
                  <v-flex xs12>
                    <v-list-tile :to="{ name: 'products-details', params: { productId: item._id }}">
                        <v-flex>
                          <v-img position="left" :src="item.thumbnail.path" width="30" contain></v-img>
                        </v-flex>
                        <v-flex>
                          {{ item.name }}
                        </v-flex>
                        <v-flex class="caption">
                          {{ item.price }}€
                        </v-flex>
                    </v-list-tile>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-btn class="mr-5" flat icon @click.stop="removeFromCart(index)"><v-icon>delete</v-icon></v-btn>
                </v-layout>
                <v-divider class="mt-3"></v-divider>
              </v-list>
              <v-flex class="font-weight-bold">
                Total {{ total }}€
              </v-flex>
            </v-flex>

            <h1 class="title my-3">Coordonnées :</h1>
            <v-flex xs12 md6>
              <v-form>
                <v-text-field
                  label="Nom"
                  v-validate="'required'"
                  v-model="form.lastName"
                  :error-messages="errors.collect('name')"
                  data-vv-name="name"
                >
                </v-text-field>
                <v-text-field
                  label="Prénom"
                  v-validate="'required'"
                  v-model="form.firstName"
                  :error-messages="errors.collect('first name')"
                  data-vv-name="first name"
                >
                </v-text-field>
                <v-text-field
                  label="Email"
                  v-validate="'required|email'"
                  v-model="form.email"
                  :error-messages="errors.collect('email')"
                  data-vv-name="email"
                >
                </v-text-field>
              </v-form>
            </v-flex>
            <v-flex my-5>
              <v-btn class="ml-0" color="primary" @click="onSubmit"
                :disabled="errors.any() || !isComplete" :loading="isLoading"
              >Envoyer la précommande</v-btn>
            </v-flex>
          </v-flex>
          <v-flex v-if="cart.length === 0" class="peeper-cart">
            <v-layout row align-center justify-center>
              <v-flex>
                Votre panier est vide
              </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import { REMOVE_FROM_CART } from '@/store/modules/cart/transactions';
import { emptyCart } from '@/store/modules/cart/actionsTypes';
import { ORDER_PRODUCT } from '@/store/modules/order/transactions';

export default {
  name: 'peeper-order',
  data: () => ({
    form: {
      firstName: '',
      lastName: '',
      email: '',
      products: '',
      total: '',
    },
  }),
  computed: {
    ...mapGetters('cart', ['cart']),
    ...mapState('order', {
      isLoading: ORDER_PRODUCT.keys.pending,
      error: ORDER_PRODUCT.keys.error,
    }),
    total: {
      get() {
        let total = 0;
        this.cart.forEach((element) => {
          total += element.price;
        });
        return total;
      },
    },
    isComplete() {
      return this.form.firstName !== '' && this.form.lastName !== '' && this.form.email !== '';
    },
  },
  methods: {
    ...mapActions('cart', {
      removeFromCart: REMOVE_FROM_CART.action,
    }),
    ...mapActions('cart', [emptyCart]),
    ...mapActions('order', {
      orderProduct: ORDER_PRODUCT.action,
    }),
    async onSubmit() {
      this.form.products = this.cart;
      this.form.total = this.total;
      try {
        await this.orderProduct(this.form);
        this.emptyCart();
        this.$router.push({ name: 'products' });
      } catch (error) {
        if (error) {
          console.log('error');
        }
      }
    },
    goTo(productId) {
      this.$router.push({ name: 'products-details', params: { productId } });
    },
    goToShop() {
      this.$router.push({ name: 'shop' });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  .peeper-shop:hover{
    cursor: pointer;
  }
</style>
