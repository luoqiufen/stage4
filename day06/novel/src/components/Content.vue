<template>
    <div class="con">
        <h5>{{ $route.params.title }}</h5>
        <div class="close" @click="close">x</div>
        <div v-html="con" class="text">{{ con }}</div>
    </div>
</template>

<script>

import util from '../api/getData.js';

export default {
    data(){
        return {
            con:''
        }
    },
    methods: {
        _getContent(url){
            util.getContent(url).then(data => {
                this.con = data;
            })
        },
        close() {
            // this.$router.go(-1)
            this.$router.back();
        },
    },
    created() {
        let url = this.$route.params.url;
        this._getContent(url)
    },
}
</script>

<style scoped>
    .con{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        width: 810px;
        height: 660px;
        margin: 0 auto;
        background: #efefef;
        
    }
    .con>h5{
        line-height: 50px;
    }
    .con>.text{
        font-size: 14px;
        line-height: 24px;
        text-align-last: left;
        overflow: scroll;
        height: 580px;
        margin: 5px 10px;
    }
    .close {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 20px;
        right: 25px;
        z-index: 1;
        cursor: pointer;
    }
</style>