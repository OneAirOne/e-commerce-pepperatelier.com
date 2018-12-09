import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './home';
import Admin from './admin';
import Guards from './guards';

Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',
  routes: [
    Admin,
    Home,
    {
      path: '*',
      redirect: '/home',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
Router.beforeEach((to, from, next) => {
  if (to.meta) {
    if (to.meta.guard) {
      if (Guards[to.meta.guard]) {
        Guards[to.meta.guard](to, from, next);
      }
    }
    // add title to the page
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    // add meta tag to the page to improve the seo
    if (to.meta.tags) {
      to.meta.tags.forEach((element) => {
        const tag = document.createElement('meta');
        tag.setAttribute('name', element.name);
        tag.setAttribute('content', element.content);
        document.head.appendChild(tag);
      });
    }
  }
  return next();
});

export default Router;
