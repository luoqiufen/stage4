<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3> computed aa:{{getA}}</h3>
    <h3> created aa:{{$route.query.aaa}}
      bb:{{$route.query.bb}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      str:'apple'
    }
  },
  computed: {
    getA(){
      return this.$route.query.aaa;
    }
  },
  created() {
    // console.log(this.$route.query.aaa);
    // console.log(this.$route.query.bb);
    // console.log('$route',this.$route);
    // console.log('$router',this.$router);
  },
}
</script>

<style scoped>
  .about{
    width: 100%;
    height: 400px;
    background-color:red;
  }
</style>
