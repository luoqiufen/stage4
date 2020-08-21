<template>
  <div class="container">
    <div class="row" v-for="(emp,i) in emps" :key="i">
      <div class="col-sm-1">{{emp.empId}}</div>
      <div class="col-sm-1">{{emp.empName}}</div>
      <div class="col-sm-1">{{emp.gender=='M'?'男':'女'}}</div>
      <div class="col-sm-1">{{emp.age}}</div>
      <div class="col-sm-1">{{emp.position}}</div>
      <div class="col-sm-2">{{emp.telephone}}</div>
      <div class="col-sm-2">{{emp.address}}</div>
      <div class="col-sm-2">{{emp.edu}}</div>
      <div class="col-sm-1">
        <span>管理</span>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../api";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["emps"]),
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
        vm._getAllEmps();
    });
  },
  methods: {
    ...mapMutations(["setAllEmps"]),
    _getAllEmps() {
      util.getAllEmps().then((res) => {
        this.setAllEmps({
          emps: res,
        });
      });
    },
  },
};
</script>


<style scoped>
.row > div {
  border: 1px solid rgb(235, 34, 68);
  line-height: 35px;
}
span {
  color: #333;
  text-decoration: underline;
}
span:hover {
  cursor: pointer;
  color: blue;
}
</style>
