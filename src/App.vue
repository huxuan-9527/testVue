<template>
  <div>
    hello Vue
    <input type="text" ref="mytext">
    <button @click="Add()">Add</button>
    <ul>
      <li v-for="data in datalist" :key="data">{{data}}</li>
    </ul>
    <navbar>
      <button @click="isShow = !isShow">Navbar</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
   <!-- 路由容器 组件-->
    <router-view></router-view>
    <!-- tabbar 组件 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
//导入写入的新组件
import navbar from "./components/Navbar";
import sidebar from "./components/Sidebar";
import tabbar from "./components/Tabbar";
import axios from "axios";
//注册为全局组件
// Vue.component("navbar",navbar)
// Vue.component("sidebar",sidebar)
import Vue from "vue";
export default {
  data() {
    return {
      datalist: [],
      isShow: true
    };
  },
  methods: {
    Add() {
      console.log("我可以啦！");
      this.datalist.push(this.$refs.mytext.value);
    }
  },
  //局部组件
  components: {
    navbar: navbar,
    sidebar: sidebar,
    tabbar: tabbar
  },
  //在生命周期周请求数据  但是的下载axios插件
  // 但是此处是 跨域请求  需要反向代理  让服务器帮我们办事
  mounted(){
    axios.get("/ajax/movieOnInfoList?token=").then(res=>{
      console.log(res.data);
    })
  }
};
</script>
<style lang="scss" scoped>
//scoped  样式作用域   防止页面样式覆盖
ul {
  list-style: none;
  li {
    background: red;
  }
}
</style>

