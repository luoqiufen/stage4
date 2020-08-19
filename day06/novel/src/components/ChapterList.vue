<template>
  <div class="chapter">
    <h3>{{ $route.params.name }}</h3>
    <div class="close" @click="close">x</div>
	<div class="row">
		<div v-for="(c,i) in chapters" :key="i" class="title" @click="choose(c)">{{ c.title }}</div>
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
import util from "../api/getData.js";

export default {
  data() {
    return {
      chapters: [],
    };
  },
  methods: {
    _getChapter() {
      let url = this.$route.params.url;
      util.getChapter(url).then((data) => {
        this.chapters = data;
      });
    },
    close() {
      // this.$router.go(-1)
      this.$router.back();
    },
    choose(chapter) {
      // 切换路由到某个章节组件
      // console.log(chapter);
      this.$router.push({
        name: `con`,
        params: {
          url: chapter.url,
          title: chapter.title,
        },
      });
    },
  },
  created() {
    this._getChapter();
  },
};
</script>

<style scoped>
.chapter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 820px;
  height: 665px;
  margin: 0 auto;
  padding-left: 20px;
  background: #efefef;
  border: 2px solid rgba(104, 146, 236, 0.5);
  line-height: 40px;
}
.chapter h3 {
  margin-top: 5px;
  width: 100%;
  line-height: 80px;
}
.chapter .row{
	width: 810px;
	height: 550px;
	overflow: scroll;
	display: flex;
	flex-flow: row wrap;
}
.chapter .row .title {
  width: 350px;
  height: 40px;
  border-bottom: 1px dashed #333;
  margin: 0 20px;
  text-align: left;
  color: lightslategray;
  overflow: hidden;
}
.chapter .title:hover {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
.close {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 25px;
  z-index: 1;
  cursor: pointer;
}
</style>