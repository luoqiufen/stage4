<template>
    <div>
        <h1>Element-ui</h1>
        <div>
            <el-button type="primary" @click="show">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="success" icon="el-icon-plus" circle></el-button>
            <el-button type="success" icon="el-icon-circle-plus-outline" circle></el-button>
        </div>
        <h2>select</h2>
        <div>
            <el-select v-model="num">
                <el-option v-for="(v,i) in arr" :key="i" :value="v">
                    {{ v }}
                </el-option>

            </el-select>
        </div>
        <h3>消息框</h3>
        <el-button @click="msg">弹出消息框</el-button>

    </div>
    
</template>

<script>
export default {
    data(){
        return {
            num:1,
            arr:[1,2,3,4,5,6,7,8,9,0]
        }
    },
    methods: {
        msg(){
            this.$alert('消息内容', '标题', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                    });
                }
            });
        },
        show(){alert('show')}
    },
}
</script>