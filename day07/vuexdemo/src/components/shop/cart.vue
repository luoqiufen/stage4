<template>
    <div>
        <h2>我的购物车</h2>
        <table border="1" cellspacing="0">
            <tr>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品数量</th>
                <th>金额</th>
                <th>操作</th>
            </tr>
            <tr v-for="(val,k) in cartPro" :key="k">
                <td>{{val.name}}</td>
                <td>{{val.price}}</td>
                <td>{{val.count}}</td>
                <td>{{val.price*val.count}}</td>
                <td>
                    <span @click="del(k)">删除</span>
                </td>
            </tr>
            <tr>
                <td colspan="2">合计</td>
                <td colspan="2">{{ total }} </td>
                <td @click="buy"><span>结算</span></td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters(['cartPro']),
        // cartPro(){return cartPro}
        total(){
            // 总金额
            let sum = 0;
            let cart = this.cartPro;
            for(let i=0;i<cart.length;i++){
                sum+=cart[i].price*cart[i].count
            }
            return sum;
        }
    },
    methods: {
        ...mapMutations(['removePro','removeAll']),
        del(i){
            this.removePro({
                idx:i
            })
        },
        buy(){
            this.removeAll();
        }
    },
}
</script>

<style scoped>
    table{
        margin: 0 auto;
        width: 600px;
        line-height: 30px;
    }
    span:hover{
        cursor: pointer;
        color: blue;
        text-decoration: underline;
    }
</style>