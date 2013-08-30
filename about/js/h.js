
/**
* 元素列表处理
* elmts 目标元素列表
* callback(elmt) 元素处理函数
*/

function each(elmts,callback){
	if(elmts.length){
		for(var i=0,len=elmts.length;i<len;i++){
			callback(elmts[i]);
		}
	}else{
		callback(elmts);
	}
}

/**
* 获取目标子节点/子节点列表
* parent 目标节点
* [withTextNode] 是否包含文本节点，默认为 false
* [n] 获取指定子节点
*/

// childs(parent) 获取 parent 的所有子节点（不含文本节点）
// childs(parent,true) 获取 parent 的所有子节点（包含文本节点）
// childs(parent,false,2) 获取 parent 的第三个非文本子节点

function childs(parent,withTextNode,n){
	withTextNode=(withTextNode || false);
	//console.log("withTextNode:"+withTextNode);
	if(parent.hasChildNodes()){
		var childs=parent.childNodes;
		//console.log(childs.length);
		if(withTextNode){
			//console.log("childs");
			result=childs;
		}else{
			var result=new Array();
			for(var i=0,len=childs.length;i<len;i++){
				if(childs[i].nodeType!==3){
					result.push(childs[i]);
				}
			}
		}
		//console.log("n:"+n);
		if(n){
			return result[n];
		}else{
			return result;
		}
	}else{
		return null;
	}
}

// attr(elmt,"type") 获取 elmt 的 type 属性值（elmt 需为单个元素）
// attr(elmts,"type","value") 设置 elmts 的 type 属性值（elmts 可为元素列表）

function attr(elmts,attr,value){
	if(value!=undefined){
		each(elmts,function(elmt){
			elmt.setAttribute(attr,value);
		});
	}else{
		return elmts.getAttribute(attr);
	}
}

function hasClass(elmt,value){
	//console.log("--"+elmt.className.search(" "+value));
	//console.log(elmt.className.length-value.length-1);
	if(elmt.className==value || elmt.className.search(value+" ")==0 || elmt.className.search(" "+value)==(elmt.className.length-value.length-1) || elmt.className.search(" "+value+" ")>0){
		return true;
	}else{
		return false;
	}
}

function addClass(elmts,value){
	each(elmts,function(elmt){
		if(!hasClass(elmt,value)){
			elmt.className+=" "+value;
		}
	});
}

function removeClass(elmts,value){
	each(elmts,function(elmt){
		if(hasClass(elmt,value)){
			//elmt.className=elmt.className.replace(value,"");
			//elmt.className=listArrangement(elmt.className);
			var list=elmt.className.split(" ");
			var index=list.indexOf(value);
			list.splice(index,1);
			elmt.className=list.join(" ");
		}
	});
}

function toggleClass(elmts,value1,value2){
	each(elmts,function(elmt){
		if(hasClass(elmt,value1)){
			removeClass(elmt,value1);
			addClass(elmt,value2);
			console.log("v1");
		}else if(hasClass(elmt,value2)){
			removeClass(elmt,value2);
			addClass(elmt,value1);
			console.log("v2");
		}else{
			addClass(elmt,value1);
			console.log("v0");
		}
	});
}

// addChild(parent,child) 将 child 作为 parent 的最后一个子节点插入
// addChild(parent,child,n) 将 child 作为 parent 的第 n（n>=0 整数第 n 个；n<=-1 倒数第 n 个）个子节点插入
// addChild(parent,child,old) 将 child 插入到 parent 的 old 子节点之前
// addChild(parent,child,old,true/1) 将 child 插入到 parent 的 old 子节点之后

function addChild(parent,child,n,after){
	//
}

// rmChild(parent,child) 移除 parent 的 child 子节点
// rmChild(parent,n) 移除 parent 的第 n 个子节点
// rmChild(parent,child,n) 移除 parent 从 child 开始的 n 个子节点
// rmChild(parent,m,n) 移除 parent 从 m 开始的 n 个子节点

function rmChild(parent,child,n){
	//
}

function hasChild(parent,child){
	//
}

function rpChild(parend,old,child){
	//
}

function listArrangement(list){
	console.log(list);
	list=list.trim();
	console.log(list);
	list=list.replace("  "," ");
	console.log(list);
	return list;
}
