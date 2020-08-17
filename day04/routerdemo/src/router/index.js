import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Hello from '../components/Hello.vue'
import Hello1 from '../components/Hello1.vue'
import Hello2 from '../components/Hello2.vue'
import Father from '../components/child/Father.vue'
import Son1 from '../components/child/Son1.vue'
import Son2 from '../components/child/Son2.vue'
import Photo from '../components/photo/Photo.vue'
import Mkdir from '../components/photo/Mkdir.vue'
import Upload from '../components/photo/Upload.vue'
import Show from '../components/photo/Show.vue'

Vue.use(VueRouter)

// 配置路由 创建路由对象并导出
export default new VueRouter({
  routes:[//配置路由的匹配规则
    {
      path:'/',//路由路径(这里表示根路由)
      name:'home',//路由名称
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/hello',
      components:{
        default:Hello,
        a:Hello1,
        b:Hello2
      }
    },
    // 路由的嵌套
    {
      path:'/father',
      component:Father,
      // 配置子路由n
      children:[
        {
          path:'son1',
          component:Son1,
        },
        {
          path:'son2',
          component:Son2,
        }
      ]
    },
    // photo练习
    {
      path:'/photo',
      component:Photo,
      redirect:'/photo/show',
      children:[
        ---
        {
          path:'show',
          component:Show
        },
        {
          path:'mkdir',
          component:Mkdir
        },
        {
          path:'upload',
          component:Upload
        }
      ]
    }
  ]
})
