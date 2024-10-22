import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "./views/HomeView.vue";
import FakeQueryView from "./views/FakeQueryView.vue";

const routes = [
    { path: '/rickroll-query/', component: HomeView },
    { path: '/rickroll-query/query/:params', component: FakeQueryView, props: true, displayName: "查询系统" },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router