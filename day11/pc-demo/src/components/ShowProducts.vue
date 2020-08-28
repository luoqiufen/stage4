<template>
    <div>
        <div class="index-board-list">
            <div class="index-board-item" v-for="(item,idx) in products" :key="idx">
                <div :class="`index-board-${idx}`">
                    <div class='index-board-item-inner'>
                        <h2>{{ item .title }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="index-board-button">
                        <el-button type="primary"  size="mini" :disabled='item.saleout' @click="buy(item)">点击购买</el-button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        products:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods: {
        buy(item){
            // 派发事件给父组件
            this.$emit('buyOne',item.title)
        }
    },
}
</script>