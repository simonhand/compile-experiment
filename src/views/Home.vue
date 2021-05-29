<template>
  <div>
    <div class="top">
      <div class="title1">实验一：计算First集</div>
      <div class="title2">
        实验要求:输入：任何一个上下文无关文法输出：该上下文无关文法的一切非终结符的First集合
      </div>
    </div>
    <div class="context">
      <el-select v-model="select" slot="prepend" placeholder="请选择" class="select">
          <el-option  v-for='(item,index) in flag' :label="item" :value="item" :key="index"></el-option>
        </el-select>
      <el-input
        placeholder="文法"
        v-model="data.wenfa"
        show-word-limit
        class="dataInput"
      >
        
        <el-button slot="prepend" icon="el-icon-right"></el-button
      ></el-input>
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      select:'',
      data: {
        name:'S',
        wenfa:'aB'
      },
      info:{
        wf:'',
        wenfa:[]
      },
      flag:['S','G',"L","R"]
    };
  },
  methods: {
    submit:function(){
      console.log(this.select);
    }
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
  width: 800px;
}
.dataInput {
  width: 300px;
}
.select{
  width: 100px;
}
</style>
