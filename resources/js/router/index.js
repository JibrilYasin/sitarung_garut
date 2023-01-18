import { createWebHistory, createRouter } from 'vue-router'
import general from './general'
import auth from './auth'
import authcms from './cms/auth'
import generalcms from './cms/general'

const routes = [
  ...general,
  ...auth,
  ...authcms,
  ...generalcms
]
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})
export default router
