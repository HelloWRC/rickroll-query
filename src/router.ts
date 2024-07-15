import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "./views/HomeView.vue";
import FakeQueryView from "./views/FakeQueryView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/query/:params', component: FakeQueryView, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router