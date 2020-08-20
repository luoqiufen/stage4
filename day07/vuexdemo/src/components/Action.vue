<template>
    <div>
        <h3>{{ num }}</h3>
        <button @click="ac1">action1</button>
    </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['num','stus']),
        ...mapGetters(['geyStuNames','getStuById']),
    },
    methods: {
        ...mapActions(['actAdd']),
        ac1(){
            // 派发action事件:actAdd
            // this.$store.dispatch('actAdd');
            this.actAdd();
        }
    },
}
</script>