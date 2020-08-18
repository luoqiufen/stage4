<template>
    <div>
        <h1>这是Hello组件</h1>
        <h3>{{num}}</h3>
        <button @click="add">增加</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:1
        }
    },
    methods: {
        add(){
            this.num++;
        }
    },
    beforeRouteEnter (to, from, next) {
        // console.log('---------Enter------------');
        next();
    },
    beforeRouteUpdate(to, from, next) {
        // console.log('---------Update------------');
        next();
    },
    beforeRouteLeave (to, from, next) {
        // console.log('---------Leave------------');
        next();
    }
}
</script>

<style scoped>
    h1{
        color: red;
    }
</style>