export const fisrtcode = `
import {gramars,keyitem} from '@/domain/gramar.js'
const ischarCap = function(char){
  let reg = /^[A-Z]$/;
  return reg.test(char);
}

const ischarWri = function(char){
  let reg = /^[a-z]$/;
  return reg.test(char);
}

var target = []
const findFirst = function(str,arr){
  console.log(arr);
  console.log(str);
  let arrstr = []
  for(let o of arr){
    console.log(o);
    if(o.wf === str){
      arrstr = o.wenfas
    }
  }
  // (item => {item.wf === str;return item})[0].wenfas;
  console.log(arrstr);
  if(arrstr){
  let arrstritem = []
  let arrstritemflag = []
  console.log(arrstr);
  for(let i of arrstr)
  {
    if(i.includes('|')){
    //  let a = i.split("|");
    arrstritem.push(...i.split('|'));
    let num = arrstr.findIndex(item => item === i);
    arrstritemflag.push(num)
    }
  }
  for(let i of arrstritemflag){
    arrstr.splice(0,i+1);
  }
  arrstr.push(...arrstritem);
  arrstr = Array.from(new Set(arrstr));
  console.log(arrstr);
  for(let i of arrstr){
    // console.log(i);
    if(ischarWri(i.charAt(0))){
      console.log(i.charAt(0));
      target.push(i.charAt(0));
      continue;
    }
    if(ischarCap(i.charAt(0))){
      // console.log(i.charAt(0));
      findFirst(i.charAt(0),arr);
    }
  }
}
else{
  return;
}
}

export const first  = function(datainfo,flag){
  console.log(datainfo);
  let arr = [];
  //[{"str","str"}] -> [{"str", ["str"]}]
  for(let item of datainfo){
    if(arr.findIndex(i => i.wf === item.wf) === -1){
     let j = new gramars(item.wf,item.wenfa);
     arr.push(j);
    }
    else{
      arr[arr.findIndex(i => i.wf === item.wf)].wenfas.push(item.wenfa);
    }
  }
  const key = []
  // console.log(flag);
  for(let r of flag){
    target = [];
    findFirst(r,arr,target);
    let k = new keyitem(r,target);
    key.push(k);
  }
  console.log(key);
   return key;
}
`