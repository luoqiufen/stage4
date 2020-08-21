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
        let count = val.count || 1;
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
    addCount(state,payload){
      state.products[payload.idx].count++
    },
    reduceCount(state,payload){
      let pros = state.products;
      let name = payload.name;
      for(let i=0;i<pros.length;i++){
        if(name==pros[i].name){
          // 找到相同名称
          if(state.products[i].count>1){
            state.products[i].count--;
          }
          break;
        }
      }
      
    },
    removeAll(state){
      state.products = [];
    },
    removePro(state,payload){
      console.log(this.getters.cartPro);
      state.products.splice(payload.idx,1);
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
