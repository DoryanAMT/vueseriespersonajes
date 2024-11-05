import {createRouter, createWebHistory} from "vue-router";
import HomeSeries from './components/HomeSeries.vue'
import DetailsSerie from './components/DetailsSerie.vue'

const myRoutes = [
    {
        path: "/", component: HomeSeries
    },
    {
        path: "/detailsserie/:id", component: DetailsSerie
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default router