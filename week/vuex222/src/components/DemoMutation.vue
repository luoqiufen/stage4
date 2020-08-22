<template>
    <div>
        <h1>Mutation</h1>
        <h3>{{ $store.state.num }}</h3>
        <button @click="add">数字增加</button>
        <p><input type="text" v-model="fruit">
        <button @click="buyFruit">添加水果</button></p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            fruit:''
        }
    },
    // methods: mapMutations(['addNum'])
    // methods: mapMutations({
    //   add: 'addNum'
    // })
    methods: {
        ...mapMutations(['addNum','addFruit']),
        add(){
            // 修改状态,通过mutation提交事件
            // this.$store.commit('addNum');
            // 调用辅助函数中的方法
            this.addNum();
        },
        buyFruit(){
            this.addFruit({
                fruit:this.fruit
            })
            this.fruit='';
        }
    },
    
}
</script>