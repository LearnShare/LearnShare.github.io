var exports={};

var txt="",
	token_list=new Array(),
	//words=require("./token.js")
	tokens=tokens,
	types=types,
	search_reg=/\/\*([^*]|[\n]|(\*+([^*\/]|[\n])))*\*+\/|\/\/[^(\n)].*\n|['"][^'"]*['"]|([$_a-zA-Z]\w{0})+|\d+|\s+|[^$_'"\w\s]+/g,
	reg_list=[
				/\/\*([^*]|[\n]|(\*+([^*\/]|[\n])))*\*+\//, // 块注释
				/\/\/[^(\n)].*\n/, //行注释
				/['"][^'"]*['"]/, // 字符串
				/([$_a-zA-Z]\w{0})+/, // 标识符/关键字
				/\d+/, // 数字（包括 - 号）
				/\s+/, // 空白符
				/[^$_'"\w\s]+/ // 标点/操作符
			],
	len=0;

exports.get=function(content){
	txt=content;
	len=txt.length;
	token_list=[];
};

exports.length=function(){
	return len;
};

exports.parse=function(){
	while((token=search_reg.exec(txt))!=null){
		//console.log(token[0]);
		var type=newToken(token[0]);
		if(type==0 || type==1){ // 块注释/行注释
			token_list.push({ // 标点
				"value":token[0],
				"type":types.comment
			});
		}else if(type==2){ // 字符串
			token_list.push({ // 标点
				"value":token[0][0],
				"type":types.punctuation
			});
			token_list.push({ // 字符串
				"value":token[0].slice(1,-1),
				"type":types.string
			});
			token_list.push({ // 标点
				"value":token[0][0],
				"type":types.punctuation
			});
		}else if(type==3){ // 标识符/关键字
			var t;
			if((t=getTokenType(token[0]))==types.error){ // 关键字
				t=types.identifier; // 标识符
			}
			token_list.push({
				"value":token[0],
				"type":t
			});
		}else if(type==4){ // 数字
			token_list.push({
				"value":token[0],
				"type":types.number
			});
		}else if(type==5){ // 空白符
			var list=token[0].split("");
			var list_len=list.length;
			//console.log(list);
			for(var i=0;i<list_len;i++){
				token_list.push({
					"value":list[i],
					"type":types.whitespace
				});
			}
		}else if(type==6){ // 标点/操作符
			var flag=0,
				token_len=token[0].length;
			if(token_len>1){
				var last_char=token[0][token_len-1];
				if(last_char=="+" || last_char=="-"){ // 检测末尾的 + -	 号
					flag=1;
					//console.log(token[0]);
					token[0]=token[0].slice(0,token_len-1);
					//console.log(token[0]);
				}
			}
			var index=findBracket(token[0]); // 检测括号位置
			//console.log(token[0]+":"+index);
			while(index!=-1){
				//console.log("index:"+index);
				if(index>0){
					token_list.push({
						"value":token[0].slice(0,index),
						"type":getTokenType(token[0].slice(0,index))
					});
					//console.log(token[0].slice(0,index));
				}
				token_list.push({
					"value":token[0].charAt(index),
					"type":getTokenType(token[0].charAt(index))
				});
				token[0]=token[0].slice(index+1);
				index=findBracket(token[0]);
			}
			if(token[0]!=""){
				token_list.push({
					"value":token[0],
					"type":getTokenType(token[0])
				});
			}
			if(flag){
				token_list.push({
					"value":last_char,
					"type":getTokenType(last_char)
				});
			}
		}
		//token_list.push({"value":token[0],"type":type});
	}
	//var reg=/\/\*[^]*\*\//g;
	//var reg=/\/\*[^(\*\/)]*\*\//g;
	//var reg=/\/\*.*[(\/\*)]*.*\*\//g;
	//var reg=/\/\*[^]*\*\/|\/\/[^(\r\n)]*\r\n/g;
	//var reg=/\/\*.*\*\//gm;
	//var reg=/\/\*(.|[\r\n])*\*\//gm;
	//var reg=/\/\*([^*]|[\r\n])*\*\//gm
	//var reg=/\/\*([^*]|[\r\n]|(\*([^\/]|[\r\n])))*\*\//gm;
	//var reg=/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/|\/\/[^(\r\n)]*\r\n/gm;
	//var reg=/\/[^(\/\/)].*\/[g|m|i]{0,3}/g;
	//var reg=/\/\/[^(\r\n)].*\r\n|\/.*[^(\/\/)(\s+)].*\/[g|m|i]{0,3}/g;
	//var reg=/-?\d+/g;
	//token_list=txt.match(reg);
	return token_list;
};

function newToken(tk){
	var reg_list_len=reg_list.length;
	//console.log(reg_list_len);
	for(var i=0;i<reg_list_len;i++){
		if(tk.search(reg_list[i])!=-1){
			//console.log("i:"+i);
			return i;
		}
	}
	return 0;
}

function getTokenType(tk){
	return (tokens[tk]!=undefined) ? tokens[tk] : types.error;
}

function findBracket(tk){
	var index=-1;
	if((index=tk.indexOf("("))!=-1){ // (
		return index;
	}else if((index=tk.indexOf(")"))!=-1){ // )
		return index;
	}else if((index=tk.indexOf("["))!=-1){ // [
		return index;
	}else if((index=tk.indexOf("]"))!=-1){ // ]
		return index;
	}else if((index=tk.indexOf("{"))!=-1){ // {
		return index;
	}else if((index=tk.indexOf("}"))!=-1){ // }
		return index;
	}else{
		return index;
	}
}