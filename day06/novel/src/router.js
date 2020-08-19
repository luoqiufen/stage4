import Vue from 'vue'
import VueRouter from 'vue-router'
import Show from './components/Show.vue'
import ChapterList from './components/ChapterList.vue'
import Content from './components/Content.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/1'
    },
    {
      path:'/:id',
      component:Show,
      children:[
        {
          path:':name',
          name:'chapter',
          component:ChapterList,
          children:[
            {
              path:':title',
              name:'con',
              component:Content
            }
          ]
        }
      ]
    }
  ]
})

export default router
