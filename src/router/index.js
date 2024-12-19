import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'maps-view',
            component: () => import('../views/MyView.vue'),
        },
        {
            path: '/three',
            name: 'three-view',
            component: () => import('../views/MyThreeView.vue'),
        },
        {
            path: '/:notFound',
            component: () => import('../views/NotFound.vue')
        }
    ],
})

export default router