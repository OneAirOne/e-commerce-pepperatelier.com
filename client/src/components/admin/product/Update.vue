<template>
  <div>
    <v-form v-if="!isLoadingUpdateProduct">
      <peeper-card
        title="Modifier"
      >
        <template slot="toolbar">
          <v-btn outline color="secondary" @click="onSubmit">modifier</v-btn>
        </template>

        <template slot="content">
          <v-container grid-list-md>

            <v-layout>
              <v-flex xs2 mr-3>
                <v-text-field box label="Nom" v-model="name"></v-text-field>
              </v-flex>
              <v-flex>
                <label for="thumbnail-upload" class="eye-custom-file-upload">Modifier la miniature</label>
                <input id="thumbnail-upload" type="file" @change="previewthumbnail" accept="image/*">
              </v-flex>
            </v-layout>
            <v-layout row justify-space-between fill-height>

              <v-flex xs7>
                <v-layout column>

                  <v-flex>
                    <v-layout row align-center>
                      <v-flex xs4>
                        <v-select
                          v-model="year"
                          :items="yearList"
                          label="Year"
                        ></v-select>
                      </v-flex>
                      <v-flex xs5>
                        <v-select
                          v-model="category"
                          :items="categoryList"
                          label="Catégorie"
                        ></v-select>
                      </v-flex>
                      <v-flex xs2 mb-3>
                        <v-switch
                          label="Visible"
                          v-model="visible"
                        ></v-switch>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex>
                    <v-select
                      v-model="boardStyle"
                      :items="boardStyleList"
                      chips
                      label="Board style"
                      multiple
                    ></v-select>
                  </v-flex>

                  <v-flex>
                    <v-select
                      v-model="stones"
                      :items="stonesList"
                      chips
                      label="Noyau"
                      multiple
                    ></v-select>
                  </v-flex>

                  <v-flex>
                    <v-select
                      v-model="plating"
                      :items="platingList"
                      chips
                      label="Plaquage"
                      multiple
                    ></v-select>
                  </v-flex>

                  <v-flex>
                    <v-layout row justify-space-between>
                      <v-flex>
                        <v-text-field box label="Prix" v-model="price"></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field box label="Stock" v-model="stock"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex>
                    <v-layout row justify-space-between>
                      <v-flex>
                        <v-select
                          v-model="rayonne"
                          :items="rayonneList"
                          label="Rayon"
                        ></v-select>
                      </v-flex>
                      <v-flex>
                        <v-text-field box label="Hauteur" v-model="height"></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field box label="Poids" v-model="weight"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex>
                    <v-layout row justify-space-between>
                      <v-flex>
                        <v-text-field box label="Largeur Nose" v-model="widthNose"></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field box label="Largeur Patin" v-model="widthPatin"></v-text-field>
                      </v-flex>
                      <v-flex>
                        <v-text-field box label="Largeur Tail" v-model="widthTail"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex>
                    <v-slider
                      label="Flex"
                      v-model="flex"
                      thumb-label="always"
                      max="10"
                    ></v-slider>
                  </v-flex>
                </v-layout>

                <v-textarea box label="Description" v-model="description"></v-textarea>
              </v-flex>

              <v-flex ma-3>
                <v-divider vertical></v-divider>
              </v-flex>

              <v-flex xs5 >
                <label for="image-upload" class="eye-custom-file-upload">Ajouter des photos</label>
                <input id="image-upload" type="file" multiple @change="previewImages" accept="image/*">
                <v-container grid-list-sm fluid>
                  <v-layout row wrap>
                    <v-flex
                    v-for="(image, index) of imagesData"
                    :key=index
                    xs4
                    d-flex
                    >
                      <v-card flat tile class="d-flex">
                        <v-flex pa-2 ma-1 class="eye-picture-wrapper">
                          <v-btn small icon absolute
                            class="eye-delete-file-upload"
                            @click="deletePicture(index, image.id)"
                          ><v-icon>clear</v-icon></v-btn>
                          <v-img
                            class="eye-picture"
                            alt="picture"
                            :src="image.data"
                            contain
                            max-height="200"
                          ></v-img>
                        </v-flex>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>

              <v-flex ma-3>
                <v-divider vertical></v-divider>
              </v-flex>

              <v-flex xs2>
                <v-container>
                  <v-img v-if="thumbnailData.length > 0" :src="thumbnailData" alt="thumbnail" contain max-height="200"></v-img>
                </v-container>
              </v-flex>
            </v-layout>

          </v-container>
        </template>
      </peeper-card>
    </v-form>
    <peeper-loader v-if="isLoadingUpdateProduct"></peeper-loader>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import { GET_PRODUCT, UPDATE_PRODUCT } from '@/store/modules/product/transactions';
import PeeperCard from '@/components/shared/Card';
import PeeperLoader from '@/components/shared/Loader';
import PeeperBackButton from '@/components/shared/BackButton';
import { stonesList, platingList, boardStyleList, categoryList, yearList, rayonneList } from './config';

export default {
  name: 'peeper-admin-product-update',
  components: { PeeperCard, PeeperBackButton, PeeperLoader },
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    name: '',
    price: 0,
    description: '',
    stock: 0,
    weight: 0,
    stones: [],
    plating: [],
    boardStyle: [],
    height: 0,
    widthNose: 0,
    widthPatin: 0,
    widthTail: 0,
    category: '',
    thumbnailData: '',
    imagesData: [],
    deletedImages: [],
    selectedThumbnail: null,
    selectedImages: [],
    stonesList,
    platingList,
    boardStyleList,
    categoryList,
    yearList,
    visible: false,
    year: '',
    rayonne: '',
    rayonneList,
    flex: 0,
  }),
  computed: {
    ...mapGetters('product', ['product']),
    ...mapState('product', {
      isLoadingGetProduct: GET_PRODUCT.keys.pending,
      isLoadingUpdateProduct: UPDATE_PRODUCT.keys.pending,
    }),
  },
  async mounted() {
    try {
      await this.getProductById({ productId: this.productId });
      this.name = this.product.name;
      this.price = this.product.price;
      this.description = this.product.description;
      this.stock = this.product.stock;
      this.weight = this.product.weight;
      this.stones = this.product.stones;
      this.plating = this.product.plating;
      this.boardStyle = this.product.boardStyle;
      this.height = this.product.height;
      this.widthNose = this.product.widthNose;
      this.widthPatin = this.product.widthPatin;
      this.widthTail = this.product.widthTail;
      this.category = this.product.category;
      this.visible = this.product.visible;
      this.year = this.product.year;
      this.rayonne = this.product.rayonne;
      this.flex = this.product.flex;
      if (this.product.thumbnail) {
        this.thumbnailData = this.product.thumbnail.path;
      }
      if (this.product.images.length > 0) {
        this.product.images.forEach(async (element) => {
          this.imagesData.push({ data: element.file.src, id: element.id, name: element.file.filename });
        });
      }
    } catch (error) {
      console.log('error update product: ', error);
    }
  },
  methods: {
    ...mapActions('product', {
      getProductById: GET_PRODUCT.action,
    }),
    ...mapActions('product', {
      updateProduct: UPDATE_PRODUCT.action,
    }),
    async onSubmit() {
      try {
        const fd = new FormData();
        fd.append('name', this.name);
        fd.append('category', this.category);
        fd.append('price', this.price);
        fd.append('stock', this.stock);
        fd.append('weight', this.weight);
        // fd.append('thickness', this.thickness);
        fd.append('height', this.height);
        fd.append('widthNose', this.widthNose);
        fd.append('widthPatin', this.widthPatin);
        fd.append('widthTail', this.widthTail);
        fd.append('description', this.description);
        fd.append('visible', this.visible);
        fd.append('year', this.year);
        fd.append('rayonne', this.rayonne);
        fd.append('flex', this.flex);
        // this.deletedImages.forEach((element) => {
        //   fd.append('deletedImages', element);
        // });
        if (this.deletedImages.length > 0) {
          for (let i = 0; i < this.deletedImages.length; i++) {
            fd.append('deletedImages', this.deletedImages[i]);
          }
        }
        this.stones.forEach((element) => {
          fd.append('stones', element);
        });
        this.plating.forEach((element) => {
          fd.append('plating', element);
        });
        this.boardStyle.forEach((element) => {
          fd.append('boardStyle', element);
        });
        if (this.selectedImages.length > 0) {
          for (let i = 0; i < this.selectedImages.length; i++) {
            fd.append('images', this.selectedImages[i]);
          }
        }
        if (this.selectedThumbnail) {
          fd.append('thumbnail', this.selectedThumbnail[0]);
        }
        await this.updateProduct({ productId: this.productId, payload: fd });
        this.$router.push({ name: 'admin-products' });
      } catch (error) {
        console.log('Error: ', error);
      }
    },
    previewthumbnail(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        this.selectedThumbnail = input.files;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.thumbnailData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewImages(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        for (let i = 0; i < input.files.length; i++) {
          this.selectedImages.push(input.files[i]);
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagesData.push({ data: e.target.result });
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    },
    deletePicture(index, id) {
      if (id) {
        this.deletedImages.push(id);
      }
      this.selectedImages.splice(index, 1);
      this.imagesData.splice(index, 1);
    },
  },
};
</script>

<style scoped>
  input[type="file"] {
    display: none;
  }
  .eye-picture-wrapper {
    border: dotted black 1px;
  }
  .eye-custom-file-upload {
    border: 1px solid black;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
  .eye-delete-file-upload {
    z-index: 20;
    right: -9px;
    top: -10px;
  }
</style>
