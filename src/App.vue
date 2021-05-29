<template>
  <div id="app">
    <el-header class="header">
        <div>安徽工业大学</div>
        <div>编译原理实验</div>
        <div>189074335张乐</div>
      </el-header>
    <el-container class="container">
      
      <el-aside class="aside">
        <el-menu default-active="" :default-openeds="['1']">
          <el-submenu index="1" :default-openeds="['0']">
            <template slot="title"
              ><i class="el-icon-setting"></i>选择实验</template
            >
            <el-menu-item index="1" @click="experiment1">实验一</el-menu-item>
            <el-menu-item index="2">实验二</el-menu-item>
            <el-menu-item index="3">实验三</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    experiment1: function () {
      console.log("ahahh");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #eee;
}
.header {
  position: relative;
  top: -10px;
  display: flex;
  line-height: 60px;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #409eff;
  box-shadow: 0 10px 0.8px rgba(0,0,0,0.1);
}
.header :nth-child(1) {
  padding-left: 60px;
  font-size: 28px;
  color: #eee;
}
.header :nth-child(2) {
  font-size: 28px;
  color: #eee;
}
.header :nth-child(3) {
  font-size: 18px;
  color: #eee;
  padding-right: 20px;
}
.aside {
  width: 200px;
  height: 650px;
  background-color: rgb(238, 241, 246);
}
.main {
  background-color: black;
}
</style>
