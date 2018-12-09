import Layout from '@/page/Layout';
import LoginPage from '@/page/admin/auth/LoginPage';
import HomePage from '@/page/admin/HomePage';
import ProductList from '@/components/admin/product/List';
import ProductUpdate from '@/components/admin/product/Update';
import ProductCreate from '@/components/admin/product/Create';
import ProductDelete from '@/components/admin/product/Delete';
import { IS_AUTHENTICATED, IS_NOT_AUTHENTICATED } from '../guardsTypes';

export default {
  name: 'admin',
  path: '/admin',
  component: Layout,
  redirect: '/admin/login',
  children: [
    {
      name: 'admin-login',
      path: 'login',
      component: LoginPage,
      meta: {
        guard: IS_NOT_AUTHENTICATED,
      },
    },
    {
      name: 'admin-home',
      path: 'home',
      component: HomePage,
      meta: {
        guard: IS_AUTHENTICATED,
      },
    },
    {
      name: 'admin-products',
      path: 'products',
      component: ProductList,
      meta: {
        guard: IS_AUTHENTICATED,
      },
    },
    {
      name: 'admin-product-update',
      path: 'products/:productId/update',
      component: ProductUpdate,
      props: true,
      meta: {
        guard: IS_AUTHENTICATED,
      },
    },
    {
      name: 'admin-product-delete',
      path: 'products/:productId/delete',
      component: ProductDelete,
      props: true,
      meta: {
        guard: IS_AUTHENTICATED,
      },
    },
    {
      name: 'admin-product-create',
      path: 'product/create',
      component: ProductCreate,
      meta: {
        guard: IS_AUTHENTICATED,
      },
    },
  ],
};

