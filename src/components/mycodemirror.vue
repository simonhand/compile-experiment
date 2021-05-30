<template>
	<div id="interfaceCorrection" >
		<codemirror :value="code" :options="cmOptions" class="code"> </codemirror>
	</div>
</template>

<script>
import {fisrtcode} from '@/assets/string.js'
// 引入组件
import { codemirror } from "vue-codemirror";
// 引入高亮样式
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
// 引入语言
import "codemirror/mode/vue/vue.js";
export default {
  // 设置组件
  components: {
    codemirror,
  },
  data() {
  	return {
  		code:fisrtcode,
    	cmOptions: {
        	mode: "text/javascript",
        	theme: "base16-dark",
          lineWrapping:true,
          lineNumbers:true,
          
     	},
 	 }
  }
}

</script>
<style lang="scss">
  #interfaceCorrection {
    .CodeMirror {
      overscroll-y: scroll !important;
      height: auto !important;
    }
  }
</style>
