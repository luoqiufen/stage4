import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    num:2,
    arr:['apple','orange','banana','strawberry','peach'],
    stus:[
      {id:1,name:'A',age:20},
      {id:2,name:'B',age:21},
      {id:3,name:'C',age:22},
      {id:4,name:'D',age:23},
      {id:5,name:'E',age:24},
      {id:6,name:'F',age:25},
      {id:7,name:'G',age:26},
    ]
  },
  getters:{
    // 过滤数据
    square(state){
      return Math.pow(state.num,2);
    },
    // 获取带p的水果
    getPs(state){
      let arr=[]
      state.arr.forEach(val => {
        if(val.indexOf('p')!=-1){
          arr.push(val)
        }
      })
      return arr;
    },
    // 获取名字
    getNames(state){
      return state.stus.map(val => {
        return val.name;
      })
    }
  },
  mutations: {
    addNum(state){
      state.num++;
    },
    addFruit(state,payload){
      state.arr.push(payload.fruit);
    }
  },
  actions: {
    increase(context){
      // 提交事件给mutation
      context.commit('addNum')
    }
  }
})