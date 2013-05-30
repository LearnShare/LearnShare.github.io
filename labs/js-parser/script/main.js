var tps=[
	"error", // 错误
	"punctuation", // 标点
	"operator", // 运算符
	"comment", // 注释
	"whitespace", // 空白符
	"statement", // 过程控制
	"value", // 特殊值
	"object_operator", // 对象操作
	"object_test", // 对象检测
	"obj", // 对象
	"identifier", // 标识符
	"string", // 字符串
	"number" // 数字
];

window.onload=function(){
	var btn=document.getElementById("parse");
	var code=document.getElementById("code");
	var div=document.getElementById("div");

	btn.onclick=function(){
		div.innerHTML="";
		var txt=code.value;
		var list=new Array();
		exports.get(txt);
		list=exports.parse();
		var list_len=list.length;
		//console.log(list_len);
		var str="";
		for(var i=0;i<list_len;i++){
			str+="<span class="+tps[list[i].type]+" title="+tps[list[i].type]+">"+list[i].value+"</span>";
			//console.log(list[i].value);
		}
		div.innerHTML=str;
		str="";
	};
};