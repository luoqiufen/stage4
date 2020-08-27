<template>
    <div class="slide-show">
        <div class="slide-img">
            <el-carousel :interval="5000" arrow="always" height="506px">
                <el-carousel-item v-for="(item,i) in imgs" :key="i" :label="item.title">
                    <img :src="item.src" alt="这是幻灯片组件" :title="item.title">
                    <h4>{{item.title}}</h4>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:"按时吃药",
            }
        },
        props:{
            imgs:{
                type:Array,
                default(){
                    return [];
                }
            }
        }
    }   
</script>
<style scoped>
    .slide-show {
    position: relative;
    margin: 15px 15px 15px 0;
    width: 900px;
    height: 500px;
    overflow: hidden;
    }
    .slide-show h2 {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #000;
    opacity: .5;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
    }
    .slide-img {
    width: 100%;
    }
    .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
    }
    .slide-pages {
    position: absolute;
    bottom: 10px;
    right: 15px;
    }

    
</style>