<template>
  <div>
    <h1>State</h1>
    <div>
      <h3>直接使用 $store.state.num </h3>
      {{ $store.state.num }}
      <h3>在脚本中使用this.$store</h3>
      {{ showNum }}
      <h2>{{ $store.state.arr }}</h2>
      <h3>showNum1: {{showNum1}}</h3>
      <h3>showNum2: {{showNum2}}</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    // mapState方法的返回值就是一个对象
    // 1.自动生成的key,与state属性相同的key
    // computed: mapState(['num'])
    // 2.使用自定义的key
    // computed: mapState({
    //   showNum: state=>state.num
    // }),

    computed: {
    //   // 使用辅助函数mapState
    ...mapState(['num']),
    ...mapState({
      showNum:state=>state.num,
      showNum2:state=>state.num
    })

    //   // 在computed中使用$store对象
    //   showNum(){
    //     return this.$store.state.num
    //   }
    },
}
</script>