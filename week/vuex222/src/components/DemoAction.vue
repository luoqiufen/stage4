<template>
    <div>
        <h1>action</h1>
        <h3>{{ $store.state.num }}</h3>
        <button @click="add">增加</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        // methods: mapActions(['increase])
        ...mapActions(['increase']),
        add(){
            // getters派发事件给mutation执行
            // 派发的是getters中定义的方法名
            // 在该方法中在提交给mutation
            // this.$store.dispatch('increase');
            this.increase();
        }
    },
}
</script>