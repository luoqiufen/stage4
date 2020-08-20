import Vue from 'vue'
import Vuex from 'vuex'
import { ADD, REDUCE } from './event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    num: 7,
    stus:[
      {id:1001, name:'apple'},
      {id:1002, name:'banana'},
      {id:1003, name:'orange'}
    ]
  },
  getters: {
    cartPro(state){
      let arr = [];
      state.products.forEach((val)=>{
        let name = val.name;
        let price = val.price;
        let count = 0;
        arr.push({
          name,price,count
        })
      })
      return arr;
    },
    getStuById(state){
      return id=>state.stus.filter(val=>val.id == id);
      /* return function(id){
        return state.stus.filter(val=>val.id == id)
      } */
    },
    getStuNames(state){
      return state.stus.filter(stu=>stu.name.indexOf('n') !=-1);
      /* let names = [];
      for(let i=0;i<state.stus.length;i++){
        names.push(state.stus[i].name);
      }
      return names; */
    }
  },
  mutations: {
    addPro(state,payload){
      state.products.push(payload.pro);
    },
    increase(state){
      console.log('mutation---increase');
      state.num ++;
    },
    // 有载荷的事件
    inc2(state,payload){
      state.num += payload.a;
    },
    [ADD](state){
      state.num++;
    },
    [REDUCE](state){
      state.num--;
    },
    testAsync(state){
      setTimeout(()=>{
        state.num++;
      },2000)
    }
  },
  actions: {
    // 参数不是state,因为actions不能修改state
    actAdd(context){
      console.log('action---actAdd')
      // action提交事件给mutation
      // 提交一个increase事件给mutation
      // context.commit('increase');

      // 异步事件
      setTimeout(()=>{
        context.commit('increase')
      },2000)
    }
  }
})
