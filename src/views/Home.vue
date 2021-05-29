<template>
  <div>
    <div class="top">
      <div class="title1">实验一：计算First集</div>
      <div class="title2">
        实验要求:输入：任何一个上下文无关文法输出：该上下文无关文法的一切非终结符的First集合
      </div>
    </div>
    <div class="context">
      <el-select
        v-model="select"
        slot="prepend"
        placeholder="请选择"
        class="select"
      >
        <el-option
          v-for="(item, index) in flag"
          :label="item"
          :value="item"
          :key="index"
        ></el-option>
      </el-select>
      <el-input
        placeholder="文法"
        v-model="wenfa"
        show-word-limit
        class="dataInput"
      >
        <el-button slot="prepend" icon="el-icon-right"></el-button
      ></el-input>
      <el-button type="primary" @click="submit">提交</el-button>
      <el-input
        v-model="addinfo"
        placeholder="添加文法"
        class="right"
      ></el-input>
      <el-button type="primary" @click="addwenfa">添加</el-button>
      <el-button type="primary" @click="first">Forst集合</el-button>
      <el-button type="primary" @click="drawer = true">显示核心代码</el-button>
      <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <span>我来啦!</span>
      </el-drawer>
    </div>
    <div class="show">
      <div v-for="(item, index) in arrinfo" :key="index">
        <div>{{ item.wf }}</div>
        <div>-></div>
        <div>{{ item.wenfa }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { gramar } from "@/domain/gramar.js";
import {first} from "@/util/ischarCap"
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      drawer: false,
      addinfo: "",
      select: "",
      wenfa: "",
      info: {
        wf: "",
        wenfa: "",
      },
      arrinfo: [{wf:"S",wenfa:'a|AB'},{wf:"S",wenfa:'b|B'},{wf:"G",wenfa:"g"}],
      flag: ["S","G"],
      target:[]
    };
  },
  methods: {
    submit: function () {
      let info = new gramar(this.select, this.wenfa);
      // console.log(info);
      if (
        this.arrinfo.findIndex(
          (item) => item.wf === info.wf && item.wenfa === info.wenfa
        ) !== -1
      ) {
        this.warn("该文法已存在");
      } else {
        // console.log("添加");
        this.arrinfo.push(info);
        this.success();
      }
      // console.log(this.arrinfo);
    },
    addwenfa: function () {
      if (this.addinfo === "") {
        this.warn("不可为空");
        return;
      }
      // console.log(this.addinfo);
      if (this.flag.findIndex((item) => item === this.addinfo) === -1) {
        this.flag.push(this.addinfo);
        this.success();
      } else {
        this.warn("已有相同的文法无需重复提交");
      }
    },
    first(){
      this.target = first(this.arrinfo,this.flag);
    },
    success(msg = "添加成功") {
      this.$notify({
        title: "成功",
        message: msg,
        type: "sucess",
      });
    },
    warn(msg = "该文法已存在，可直接提交") {
      this.$notify({
        title: "警告",
        message: msg,
        type: "warning",
      });
    },
  },
};
</script>
<style scoped>
.top {
  margin: 5px;
  border: 1px solid #eee;
}
.title1 {
  padding: 20px 20px;
  font-family: "Helvetica Neue";
  text-align: left;
  color: #a1a1a1;
}
.title2 {
  padding-left: 20px;
  padding-bottom: 20px;
  font-family: "Helvetica Neue";
  text-align: left;
  color: #a1a1a1;
}
.context {
  display: flex;
  margin-top: 20px;
  padding-left: 20px;
  width: 100%;
}
.dataInput {
  width: 300px;
  margin-right: 5px;
}
.select {
  width: 100px;
}
.right {
  margin-left: 40px;
  width: 100px;
  margin-right: 5px;
}
.show {
  margin-top: 50px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  color: #a1a1a1;
}
.show div {
  margin-top: 5px;
  display: flex;
}
</style>
