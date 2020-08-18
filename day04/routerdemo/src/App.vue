<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about?aaa=1&bb=2">About</router-link> | 
      <router-link to="/hello">Hello</router-link> | 
      <router-link :to="{name:'father',params:{num:123}}">Father</router-link> | 
      <router-link to="/photo">在线相册</router-link> | 
      <router-link to="/singer">歌手列表</router-link>
    </div>

    <transition name="slide-fade">
      <router-view />
    </transition>

    <router-view name="a"/>
    <router-view name="b"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
 {
  transform: translateX(10px);
  opacity: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
