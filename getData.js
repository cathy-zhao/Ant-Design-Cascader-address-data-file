var execReg=/<span lang="EN-US">(.*?)<span>&nbsp;&nbsp;&nbsp;&nbsp; <\/span><\/span><span style="font-family: 宋体">(.*?)<\/span>/;
var resArr=[];
var sign=null;
var docClass=document.getElementsByClassName("MsoNormal");
for(var i=0,len=docClass.length;i<len;i++){
  var data=docClass[i].innerHTML;
  var result=execReg.exec(data);
  if(len==0){
    sign=result[1].slice(0,2);
    resArr.push({value: result[2].slice(1),label: result[2].slice(1)})
  }else{
    if(result[1].slice(0,2)!==sign){
      sign=result[1].slice(0,2);
      resArr.push({value: result[2].slice(1),label: result[2].slice(1)})
    }else{
      if(result[2].match(/\s/ig).length==2){
          var arr=resArr[resArr.length-1].children||[];
          arr.push({value: result[2].slice(2),label: result[2].slice(2)});
          resArr[resArr.length-1].children=arr;
      }else{
          var arr1=resArr[resArr.length-1].children||[];
          var l=arr1.length?arr1.length:1;
          var arr=resArr[resArr.length-1].children[l-1].children||[];
          arr.push({value: result[2].slice(3),label: result[2].slice(3)})
          resArr[resArr.length-1].children[l-1].children=arr;
          resArr=resArr

      }

    }

}}
console.log(JSON.stringify(resArr))
