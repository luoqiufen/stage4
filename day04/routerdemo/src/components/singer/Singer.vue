<template>
    <div>
        <h1>歌手列表</h1>
        <ul>
            <li v-for="(s,k) in singers" :key="k" @click="choose(s.url)">{{s.name}}</li>
        </ul>
        <!-- 渲染出口 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            singers:[
                {name:'张惠妹',url:'zhm'},
                {name:'华晨宇',url:'hcy'},
                {name:'张雨生',url:'zys'},
                {name:'张宇',url:'zy'},
            ]
        }
    },
    methods: {
        choose(url){
            // 使用编程式导航进行路由的切换
            // this.$router.push(url)
            this.$router.push('/singer/'+url)
        }
    },
    

}
</script>

<style scoped>
    div{
        width: 60%;
        margin: 0 auto;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
    }

    li{
        color: darkblue;
    }
    li:hover{
        cursor: pointer;
        color: orangered;
        text-decoration: underline;
    }
</style>