<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{num}}</p>
    <button @click="add">增加num</button> 
    <button @click="add2">有载荷的增加</button>
    <button @click="add3">减少</button>
    <p><button @click="test">异步</button></p>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex';
import { ADD, REDUCE } from '../store/event.js'

export default {
  computed: {
    ...mapGetters(['getStuNames','getStuById']),
    ...mapState(['num','stus'])
  },
  methods: {
    ...mapMutations(['increase','inc2',ADD,REDUCE,'testAsync']),
    add(){
      // this.$store.state.num++;//无法改变state的值
      // 提交increase事件(定义在mutation中的方法)
      // this.$store.commit('increase');
      this.increase();
      // this[ADD]();
    },
    add2(){
      // 提交事件,mutation自动调用对应的事件函数
      // this.$store.commit('inc2',{a:5});
      /* this.$store.commit({
        type:'inc2',
        a:5
      }); */
      this.inc2({a:5})
    },
    add3(){
      this[REDUCE]();
    },
    test(){
      this.testAsync();
    }
  }
}
</script>