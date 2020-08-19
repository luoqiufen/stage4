<template>
    <div class="show">
        <ul>
            <li v-for="(item,k) in lists" :key="k">
                <div class="left" @click="choose(item)">
                    <img :src="item.img" :alt="item.name">
                </div>
                <div class="right">
                    <h3 class="title" @click="choose(item)">{{item.name}}</h3>
                    <p>{{item.author}}</p>
                    <div>{{item.desc}}</div>
                </div>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import util from '../api/getData.js';

export default {
    data(){
        return {
            lists:[]
        }
    },
    created() {
        // 获取id
        let id = this.$route.params.id;
        this._getNovelList(id);
    },
    beforeRouteUpdate (to,from,next) {
        this._getNovelList(to.params.id);
        next();
    },
    methods: {
        _getNovelList(id){
            util.getNovelList(id).then(data => {
                this.lists = data;
            }).catch(err => {
                console.log(err);
            })
        },
        choose(item){
            // 切换路由到某小说列表组件
            // 使用编程式导航切换路由
            this.$router.push({
                name:`chapter`,
                params:{
                    url:item.path,
                    name:item.name
                }
            })
        }
    },
}
</script>


<style scoped>
    .show{
        position: relative;
    }
     ul{
        width: 820px;
        list-style: none;
        display: flex;
        border:2px solid rgba(251, 172, 2, 0.5);
        flex-flow: row wrap;
        justify-content: space-around;
        margin: 0 auto;
        padding-left: 0;
    }
    ul li{
        width:380px;
        margin: 10px;
        background: rgb(189, 235, 208);
        
     }
    ul li .left{
        float: left;
    }
    ul li .left img{
        padding: 10px;
        width: 150px;
        height: 200px;
    }
    ul li .right{
        width: 230px;
        float: right;
        padding: 10px;
        margin-top: 5px;
    }
    ul li .right .title{
        font-size: 16px;
        font-weight: bold;
        float: left;
        color: darkblue;
    }
    ul li .right .title:hover{
        color: rgb(218, 10, 10);
        cursor: pointer;
        text-decoration: underline;
    }
    ul li .right p{
        float: right;
        font-size: 14px;
        color: #333;
    }
    ul li .right div{
        clear: both;
        line-height: 25px;
        font-size: 14px;
        height: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: grey;
    }
</style>