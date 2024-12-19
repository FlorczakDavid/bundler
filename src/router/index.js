import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'maps-view',
            component: () => import('../../entry-view.js'),
        },
        {
            path: '/three',
            name: 'three-view',
            component: () => import('../../entry-cube.js'),
        },
        {
            path: '/:notFound',
            component: () => import('../views/NotFound.vue')
        }
    ],
})

export default router