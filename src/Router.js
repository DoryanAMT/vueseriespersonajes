import {createRouter, createWebHistory} from "vue-router";
import HomeSeries from './components/HomeSeries.vue'
import DetailsSerie from './components/DetailsSerie.vue'
import PersonajesSerie from './components/PersonajesSerie.vue'
import CreatePersonaje from './components/CreatePersonaje.vue'
import ModificarPersonaje from './components/ModificarPersonaje.vue'

const myRoutes = [
    {
        path: "/", component: HomeSeries
    },
    {
        path: "/detailsserie/:id", component: DetailsSerie
    },
    {
        path: "/personajesserie/:id", component: PersonajesSerie
    },
    {
        path: "/createpersonaje", component: CreatePersonaje
    },
    {
        path: "/modificarpersonaje", component: ModificarPersonaje
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default router