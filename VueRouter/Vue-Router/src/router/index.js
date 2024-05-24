//1.定义路由表
import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    // { path: '/hello', component: Hello },
    { path: '/hello', component: () => import("../views/Hello.vue") },
    { path: '/sayHi', component: () => import("../views/SayHi.vue") },
    { path: '/pathParameter/:id', component: () => import("../views/PathParameter.vue") },
    {
        path: '/welcome/:id',
        component: () => import("../views/email/Welcome.vue"),
        children: [
            {
                path: 'profile',
                component: () => import("../views/email/UserProfile.vue")
            },
            {
                path: 'posts',
                component: () => import("../views/email/UserPosts.vue")
            },
        ]
    },


]


//2.创建路由器

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

//3.导出路由器
export default router;


//4.vue实例创建