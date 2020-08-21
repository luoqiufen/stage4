<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">empId:</div>
      <div class="col-sm-5">
        <input type="text" v-model="empId" class="form-control" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">empName:</div>
      <div class="col-sm-5">
        <input type="text" v-model="empName" class="form-control" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">gender:</div>
      <div class="col-sm-5 center">
        <input type="radio" v-model="gender" value="M" name="a" /> 男
        <input type="radio" v-model="gender" value="F" name="a" /> 女
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">age:</div>
      <div class="col-sm-5">
        <input type="text" v-model="age" class="form-control" />
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
        <input type="text" v-model="telephone" class="form-control" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">address:</div>
      <div class="col-sm-5">
        <input type="text" v-model="address" class="form-control" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">edu:</div>
      <div class="col-sm-5">
        <select v-model="edu" class="form-control">
          <option value="高中以下">高中以下</option>
          <option value="本科">本科</option>
          <option value="大专">大专</option>
          <option value="研究生以上">研究生以上</option>
        </select>
      </div>
    </div>
    <div>
        <div class="add col-sm-10">
            <button class="btn btn-info" @click="add">添加</button>
        </div>
    </div>
    
    
  </div>
</template>

<script>
import Emp from '../entity/Emp.js'
import util from '../api'

export default {
  data() {
    return {
      empId: null,
      empName: "",
      gender: "M",
      age: null,
      position: "技术",
      telephone: "",
      address: "",
      edu: "高中以下",
    };
  },
  methods: {
      add(){
          let emp = new Emp(
            this.empId,
            this.empName,
            this.gender,
            this.age,
            this.position,
            this.telephone,
            this.address,
            this.edu
          );
        util.addEmp(emp).then(data=>{
            console.log(data);
            this.$router.push('/')
        })
      }
  },
};
</script>


<style scoped>
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
</style>