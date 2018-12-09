<template>
  <v-card >
    <peeper-dialog :show.sync="dialogDelete.show" :title="dialogDelete.title"
      @close="deleteProduct"
    >
    </peeper-dialog>
    <v-card-title>
      Liste des produits
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <!-- <v-tooltip top>
          <span>Back</span>
          <peeper-back-button slot="activator"></peeper-back-button>
        </v-tooltip> -->
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
      :loading="isLoading"
    >
      <template slot="items" slot-scope="props">
        <tr @click="goTo(props.item._id)">
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.price }}</td>
          <td class="text-xs-center">{{ props.item.year }}</td>
          <td class="text-xs-center">
            <v-container v-if="props.item.thumbnail">
              <v-img :src="props.item.thumbnail.path" alt="thumbnail" contain max-height="70"></v-img>
            </v-container>
          </td>
          <td class="text-xs-center">

            <v-layout row wrap>
              <v-flex
              v-if="props.item && props.item.images"
              v-for="image in props.item.images"
              :key=image.id
              xs4
              d-flex
              >
                <v-card flat tile class="d-flex" color="transparent">
                  <v-flex mr-1 mb-1>
                    <v-img
                      :src="image.file.src"
                      contain
                      max-height="200"
                    ></v-img>
                  </v-flex>
                </v-card>
              </v-flex>
            </v-layout>
          </td>
          <td class="text-xs-center font-weight-bold">{{ props.item.stock }}</td>
          <td class="text-xs-center">
            <v-icon v-if="props.item.visible">done</v-icon>
            <v-icon v-if="!props.item.visible">clear</v-icon>
          </td>
          <td>
            <v-tooltip top>
              <span>Supprimer</span>
              <v-btn @click.stop="dialogDelete.show = true ; currentProduct = props.item"
                slot="activator" icon small flat class="mr-2">
                <v-icon small>delete</v-icon>
              </v-btn>
            </v-tooltip>
          </td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import { GET_PRODUCTS } from '@/store/modules/product/transactions';
import { mapState, mapActions } from 'vuex';
import PeeperCard from '@/components/shared/Card';
import PeeperBackButton from '@/components/shared/BackButton';
import PeeperDialog from '@/components/shared/Dialog';
import PeeperLoader from '@/components/shared/Loader';


export default {
  name: 'peeper-admin-product-list',
  components: { PeeperCard, PeeperBackButton, PeeperDialog, PeeperLoader },
  created() {
    this.getProducts();
  },
  data() {
    return {
      search: '',
      currentProduct: '',
      headers: [
        {
          text: 'Nom',
          align: 'center',
          value: 'name',
          sortable: true,
        },
        {
          text: 'Prix',
          align: 'center',
          value: 'price',
          sortable: true,
        },
        {
          text: 'Année',
          align: 'center',
          value: 'year',
          sortable: true,
        },
        {
          text: 'Miniature',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Images',
          align: 'center',
          sortable: false,
        },
        {
          text: 'Stock',
          align: 'center',
          value: 'stock',
          sortable: true,
        },
        {
          text: 'Visible',
          align: 'center',
          value: 'visible',
          sortable: true,
        },
        {
          text: 'Actions',
          align: 'center',
          sortable: false,
        },

      ],
      dialogDelete: {
        title: 'Voulez-vous supprimer ce produit ?',
        show: false,
      },
    };
  },
  computed: {
    ...mapState('product', {
      isLoading: GET_PRODUCTS.keys.pending,
      data: GET_PRODUCTS.keys.data,
    }),
    products() {
      return this.data ? this.data : [];
    },
  },
  methods: {
    ...mapActions('product', {
      getProducts: GET_PRODUCTS.action,
    }),
    goTo(productId) {
      this.$router.push({ name: 'admin-product-update', params: { productId } });
    },
    deleteProduct(confirm) {
      if (confirm === true) {
        const productId = this.currentProduct._id;
        this.currentProduct = '';
        this.$router.push({ name: 'admin-product-delete', params: { productId } });
      } else {
        this.currentProduct = '';
      }
    },
  },
};
</script>

<style>
</style>
