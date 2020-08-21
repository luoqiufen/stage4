<template>
    <div>
        <h2>商品列表</h2>
        <table border="1" cellspacing="0">
            <tr>
                <th>商品编号</th>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>操作</th>
            </tr>
            <tr v-for="(p,i) in prods" :key="i">
                <td>{{p.id}}</td>
                <td>{{p.name}}</td>
                <td>{{p.price}}</td>
                <td>
                    <button @click="reduce(p)"> - </button>
                    <button @click="add(p)"> + </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex';

export default {
    data() {
        return {
            prods:[
                {id:1,name:'《海底两万里》',price:24,count:1},
                {id:2,name:'《十万个为什么》',price:22,count:1},
                {id:3,name:'《月亮与六便士》',price:30,count:1},
                {id:4,name:'《杀死一只知更鸟》',price:36,count:1},
                {id:5,name:'《白夜行》',price:35,count:1},
                {id:6,name:'《老人与海》',price:29,count:1},
            ]
        }
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters(['cartPro'])
    },
    methods: {
        ...mapMutations(['addPro','addCount','reduceCount']),
        add(p){
            let cart = this.cartPro;
            let f = false;//假设没有
            for(let i=0;i<cart.length;i++){
                if(p.name==cart[i].name){
                    f = true;
                    // 重复数量增加
                    // cart[i].count++;
                    this.addCount({
                        idx:i
                    })
                    break;
                }
            }
            if(!f){//没有,添加
                this.addPro({
                    pro:p
                })
            }
        },
        reduce(p){
            this.reduceCount({
               name:p.name 
            })
        }
    },
    
}
</script>

<style scoped>
    table{
        width: 500px;
        margin: 0 auto;
        line-height: 30px;
        border: darkblue 1px solid;
    
    }
    button{
        padding: 0 8px;
        margin: 0 5px;
    }
</style>