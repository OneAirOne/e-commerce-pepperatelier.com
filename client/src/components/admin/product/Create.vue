<template>
  <div>
    <v-form v-if="!isLoading">
      <peeper-card
        title="Nouveau produit"
      >
        <template slot="toolbar">
          <v-btn outline color="secondary" @click="onSubmit">Créer</v-btn>
        </template>

        <template slot="content">
          <v-container grid-list-md>

            <v-layout>
              <v-flex xs2 mr-3>
                <v-text-field box label="Nom" v-model="name"></v-text-field>
              </v-flex>
              <v-flex>
                <label for="thumbnail-upload" class="eye-custom-file-upload">Ajouter une miniature</label>
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
                    v-for="(picture, index) of imagesData"
                    :key=index
                    xs4
                    d-flex
                    >
                      <v-card flat tile class="d-flex">
                        <v-flex pa-2 ma-1 class="eye-picture-wrapper">
                          <v-btn small icon absolute
                            class="eye-delete-file-upload"
                            @click="deletePicture(index)"
                          ><v-icon>clear</v-icon></v-btn>
                          <v-img
                            class="eye-picture"
                            :src="picture"
                            contain
                            max-height="200"
                            alt="picture"
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
                  <v-img v-if="thumbnailData.length > 0" :src="thumbnailData" contain max-height="200"></v-img>
                </v-container>
              </v-flex>
            </v-layout>

          </v-container>
        </template>
      </peeper-card>
    </v-form>
    <peeper-loader v-if="isLoading"></peeper-loader>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { CREATE_PRODUCT } from '@/store/modules/product/transactions';
import PeeperCard from '@/components/shared/Card';
import PeeperLoader from '@/components/shared/Loader';
import PeeperBackButton from '@/components/shared/BackButton';
import { stonesList, platingList, boardStyleList, categoryList, yearList, rayonneList } from './config';

export default {
  name: 'admin-product-create',
  components: { PeeperCard, PeeperBackButton, PeeperLoader },
  data: () => ({
    name: 'test',
    price: '900',
    description: '',
    stock: '0',
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
    selectedThumbnail: null,
    selectedImages: [],
    stonesList,
    platingList,
    boardStyleList,
    yearList,
    categoryList,
    visible: false,
    year: '',
    rayonne: '',
    rayonneList,
    flex: 0,
  }),
  computed: {
    ...mapState('product', {
      isLoading: CREATE_PRODUCT.keys.pending,
      error: CREATE_PRODUCT.keys.error,
    }),
  },
  methods: {
    ...mapActions('product', {
      createProduct: CREATE_PRODUCT.action,
    }),
    async onSubmit() {
      try {
        const fd = new FormData();
        fd.append('name', this.name);
        fd.append('category', this.category);
        fd.append('price', this.price);
        fd.append('stock', this.stock);
        fd.append('weight', this.weight);
        fd.append('height', this.height);
        fd.append('widthNose', this.widthNose);
        fd.append('widthPatin', this.widthPatin);
        fd.append('widthTail', this.widthTail);
        fd.append('description', this.description);
        fd.append('visible', this.visible);
        fd.append('year', this.year);
        fd.append('rayonne', this.rayonne);
        fd.append('flex', this.flex);
        this.stones.forEach((element) => {
          fd.append('stones', element);
        });
        this.plating.forEach((element) => {
          fd.append('plating', element);
        });
        this.boardStyle.forEach((element) => {
          fd.append('boardStyle', element);
        });
        if (this.selectedImages) {
          for (let i = 0; i < this.selectedImages.length; i++) {
            fd.append('images', this.selectedImages[i]);
          }
        }
        if (this.selectedThumbnail) {
          fd.append('thumbnail', this.selectedThumbnail[0]);
        }
        await this.createProduct(fd);
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
            this.imagesData.push(e.target.result);
          };
          reader.readAsDataURL(input.files[i]);
        }
      }
    },
    deletePicture(index) {
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
