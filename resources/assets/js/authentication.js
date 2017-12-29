import VueRouter from 'vue-router';
import routes from './user/routes'

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (window.loggedUser) {
      next()
    } else {
      const windowLocation = window.location;
      windowLocation.href = windowLocation.origin + '/login';
    }
  }
  next()
});