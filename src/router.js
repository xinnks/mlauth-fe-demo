import { createRouter, createWebHistory } from "vue-router"

const routes = [{
	path: "/",
	name: "home",
	component: () => import("./pages/home.vue")
},
{
	path: "/auth",
	name: "authentication",
	component: () => import("./pages/auth.vue")
}]

export const router = createRouter({
	history: createWebHistory(),
	routes
})