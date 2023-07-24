import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../views/Todos.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            name: 'home',
            component: Todos
        },
        {
            path: '/about',
            name: "about",
            component: () =>
                import ('../views/AboutVue.vue')
        }
    ]
})

export default router