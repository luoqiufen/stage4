<template>
    <div class="modify" ref="modify">
        <h1>modify</h1>
        <div class="close" @click="back">x</div>
        <div v-if="emp==null">数据加载中</div>
        <div v-else class="container" ref="container">
            <div class="row">
                <div class="col-sm-5">empId:</div>
                <div class="col-sm-5">
                    <input type="text" :value="emp.empId" class="form-control" readonly="readonly" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">empName:</div>
                <div class="col-sm-5 center">
                    <input type="text" v-model="empName" class="form-control" :placeholder="emp.empName" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">gender:</div>
                <div class="col-sm-5">
                    <select v-model="gender" class="form-control">
                        <option value="M">男</option>
                        <option value="F">女</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">age:</div>
                <div class="col-sm-5">
                    <input type="text" v-model="age" class="form-control"  :placeholder="emp.age" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">position:</div>
                <div class="col-sm-5">
                <select v-model="position" class="form-control">
                    <option value="销售">销售</option>
                    <option value="人事">人事</option>
                    <option value="技术">技术</option>
                    <option value="财务">财务</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">telephone:</div>
                <div class="col-sm-5">
                    <input type="text" v-model="telephone" class="form-control"  :placeholder="emp.telephone" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">address:</div>
                <div class="col-sm-5">
                    <input type="text" v-model="address" class="form-control"  :placeholder="emp.telephone" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">edu:</div>
                <div class="col-sm-5">
                    <select v-model="edu" class="form-control">
                        <option value="高中">高中</option>
                        <option value="本科">本科</option>
                        <option value="大专">大专</option>
                        <option value="研究生">研究生</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5">status:</div>
                <div class="col-sm-5">
                    <select v-model="status" class="form-control">
                        <option value="false">在职</option>
                        <option value="true">离职</option>
                    </select>
                </div>
            </div>
            <div>
                <div class="add col-sm-10">
                    <button class="btn btn-danger" @click="mod">修改</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from '../api/index.js'
import $ from 'jquery'
import { mapMutations } from 'vuex'

export default {
    data(){
        return {
            emp:null,
            empId: null,
            empName: "",
            gender: "M",
            age: null,
            position: "技术",
            telephone: "",
            address: "",
            edu: "高中以下",
            status:'false'
        }
    },
    beforeRouteEnter (to, from, next) {
        // 根据路由参数获取某个员工数据
        console.log('to:',to);
        let {empId,empName} = to.query;
        next(vm=>{
            vm._getEmpInfo(empId,empName);
        });
        
    },
    updated() {
        // let $con = $(this.$refs.container);
        let $mod = $(this.$refs.modify);
        // let con_h = parseInt($con.css('height'));
        let mod_h = parseInt($mod.css('height'));
        if(600 > mod_h){
            $mod.css('height','600px')
        }
    },
    methods: {
        ...mapMutations(['modifyEmp']),
        _getEmpInfo(empId,empName){
            // 获取某个员工的数据
            util.getEmpInfo(empId,empName).then(data => {
                this.emp = data;
                // 给每一个属性重新赋值
                this.empId = this.emp.empId
                this.empName = this.emp.empName
                this.gender = this.emp.gender
                this.age = this.emp.age
                this.position = this.emp.position
                this.telephone = this.emp.telephone
                this.address = this.emp.address
                this.edu = this.emp.edu
                this.status = this.emp.status
            }).catch(err => {
                console.log(err);
            })
        },
        back(){
            this.$router.back(1);
        },
        mod(){
            // 提交修改
            // 修改的条件
            let filter = {empId:this.empId}
            let data = {
                ...filter,
                empName: this.empName,
                gender: this.gender,
                age: this.age,
                position: this.position,
                telephone: this.telephone,
                address: this.address,
                edu: this.edu,
                status: this.status
            }
            util.modify(filter,data).then(res => {
                alert(res);
                // 修改状态管理里面的数据
                this.modifyEmp({
                    filter,
                    data
                })
            }).catch(err => {
                alert(err);
            }).finally(() => {
                this.$router.push('/');
            })
        }
    },
}
</script>

<style scoped>
    .modify{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: rgb(138, 240, 231);
    }
    .row{
    margin-top: 15px;
    }
    .col-sm-5{
        text-align: right;
    }
    .center{
        text-align: center;
    }
    .add{
        margin-top: 15px;
        float: left;
    }
    .add button{
        float: right;
    }
    .close{
        position: absolute;
        top: 20px;
        right: 50px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    
</style>