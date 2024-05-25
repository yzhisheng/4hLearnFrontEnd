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
        path: '/welcome/:id/:name/:age',
        component: () => import("../views/Welcome.vue"),
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
    {
        path: '/paramTest/:id/:name/:age',
        component: () => import("../views/ParamTest.vue"),
        children: [

            {
                path: 'param',
                name: 'Param',
                component: () => import("../views/routerParams/RouterParams-param.vue")
            },
            {
                path: 'query',
                name: 'Query',
                component: () => import("../views/routerParams/RouterParams-query.vue")
            },
        ]
    },


]


//2.创建路由器

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})



//设置路由守卫
// router.beforeEach((to, from) => {
//     console.log('to', to)
//     console.log('from', from)
//     //1.return false 取消导航
//     //2.return true 或不返回  继续导航
//     //3.return '路径' 跳转指定路径
//     return true;
// })


router.beforeEach(async (to, from) => {
    console.log('to', to)
    console.log('from', from)

    //请求服务器获取数据
    //await
    if (to.path === '/hello') {
        console.log('无权访问!')
        return '/'
    }

    //1.return false 取消导航
    //2.return true 或不返回  继续导航
    //3.return '路径' 跳转指定路径
})



//3.导出路由器
export default router;


//4.vue实例创建