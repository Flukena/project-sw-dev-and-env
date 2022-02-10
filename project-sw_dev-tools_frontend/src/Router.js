import Vue from 'vue'
import Router from 'vue-router'
import Task from './views/Task.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/tasks'
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Task
        },
        {
            path: '/tasks/new',
            name: 'new-task',
            component: New
        },
        {
            path: '/tasks/:id',
            name: 'show',
            component: Show
        },
        {
            path: '/tasks/:id/edit',
            name: 'edit',
            component: Edit
        }
    ]
})