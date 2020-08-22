<template>
    <div>
        <h1>Getters</h1>
        <h2>使用$store</h2>
        <h3>{{$store.getters.square}}</h3>
        <h3>{{$store.getters.getPs}}</h3>
        <h3>{{$store.getters.getNames}}</h3>
        <h3>使用mapGetters</h3>
        {{square}}==={{getPs}}==={{getNames}}===平方： {{pingfang}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    // 简洁但不灵活
    // computed: mapGetters(['square','getPs','getNames'])
    // computed:mapGetters({
    //     pingfang: 'square'
    // }),
    computed: {
    ...mapGetters(["square",'getPs','getNames']),
    ...mapGetters({
      pingfang: 'square'
    }),
  },
    
}
</script>