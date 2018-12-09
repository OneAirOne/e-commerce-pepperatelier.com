const Layout = () => import('@/page/Layout');
const HomePage = () => import('@/page/home/landing/HomePage');
const ProductsPage = () => import('@/page/home/ProductsPage');
const ProductPage = () => import('@/page/home/ProductPage');
const WorkshopPage = () => import('@/page/home/WorkshopPage');
const TechnologyPage = () => import('@/page/home/TechnologyPage');
const ShopPage = () => import('@/page/home/ShopPage');
const OrderPage = () => import('@/page/home/OrderPage');

export default {
  name: 'home-layout',
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [
    {
      name: 'home',
      path: 'home',
      component: HomePage,
      meta: {
        title: 'Pepper Atelier | Artisan shaper',
        tags: [
          {
            name: 'description',
            content: 'Fabrication artisanale de snowboards en bois par un ébéniste français. Freerides, Freestyle, trouvez la planche à vos pieds',
          },
        ],
      },
    },
    {
      name: 'workshop',
      path: 'workshop',
      component: WorkshopPage,
      meta: {
        title: 'Pepper Atelier | L\'Atelier',
        tags: [
          {
            name: 'description',
            content: 'Un atelier de fabrication artisanale de snowboards en bois',
          },
        ],
      },
    },
    {
      name: 'technology',
      path: 'technology',
      component: TechnologyPage,
      meta: {
        title: 'Pepper Atelier | Technologie - Frabication artisanale de snowboard en bois',
        tags: [
          {
            name: 'description',
            content: 'Explication du procédé de fabrication des snowboards en bois',
          },
        ],
      },
    },
    {
      name: 'shop',
      path: 'shop',
      component: ShopPage,
      meta: {
        title: 'Pepper Atelier | Points de vente',
        tags: [
          {
            name: 'description',
            content: 'Trouvez un point vente de snowboards en bois Peeper',
          },
        ],
      },
    },
    {
      name: 'order',
      path: 'order',
      component: OrderPage,
      meta: {
        title: 'Commander un snowboard Pepper',
        tags: [
          {
            name: 'description',
            content: 'Commandez un snowboard en bois Peeper',
          },
        ],
      },
    },
    {
      name: 'products',
      path: 'snowboards',
      component: ProductsPage,
      meta: {
        title: 'Pepper Atelier | Snowboards',
        tags: [
          {
            name: 'description',
            content: 'Commandez un snowboards en bois, réalisé par un ébéniste français',
          },
        ],
      },
    },
    {
      name: 'products-details',
      path: 'snowboards/:productId',
      props: true,
      component: ProductPage,
      meta: {
        title: 'Pepper Atelier | Snowboards détails',
        tags: [
          {
            name: 'description',
            content: 'Commandez un snowboards en bois, réalisé par un ébéniste français',
          },
        ],
      },
    },
  ],
};
