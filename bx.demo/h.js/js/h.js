/**
* h.js
*/
function H(selectors){
	//log("selectors:"+typeof selectors);
	if(!selectors){
		return this;
	}
	if(typeof selectors=="string"){
		if(document.querySelectorAll){ // modern broswer
			this.elmts=document.querySelectorAll(selectors);
		}else{
			if(selectors[0]=="#"){ // id
				this.elmts=document.getElementById(selectors.substr(1));
			}else if(selectors[0]=="."){ // class
				this.elmts=document.getElementsByClassName(selectors.substr(1));
			}else{ // tag
				this.elmts=document.getElementsByTagName(selectors);
			}
		}
	}else if(typeof selectors=="object"){
		this.elmts=selectors;
	}
	//log(this.elmts);
	return this;
}

/**
* h.each()
* 元素列表处理
* callback(elmt) 元素处理函数
*/
H.prototype.each=function(callback){
	var elmts=this.elmts;
	//log("elmts:"+elmts);
	if(elmts.length){ // 元素列表
		for(var i=0,len=elmts.length;i<len;i++){
			callback(elmts[i]);
		}
	}else{ // 单个元素
		callback(elmts);
	}
}

/**
* h.bind()
* 事件绑定
* "event" 事件名称
* callback(emlt) 事件处理函数
*/
H.prototype.bind=function(e,callback){
	this.each(function(elmt){
		if(elmt.addEventListener){
			elmt.addEventListener(e,callback);
		}else{
			elmt.attachEvent("on"+e,callback);
		}
	});
}

/**
* h.unblid()
* 解除事件绑定
* "event" 事件名称
* callback(emlt) 事件处理函数
*/
H.prototype.unbind=function(e,callback){
	this.each(function(elmt){
		if(elmt.removeEventListener){
			elmt.removeEventListener(e,callback);
		}else{
			elmt.detachEvent("on"+e,callback);
		}
	});
}

/**
* h.fire()
* 触发事件（包括自定义事件）
* "event" 事件名称
* canBubble 是否冒泡
* cancelable 是否可取消
*/
H.prototype.fire=function(e,bubble,cancel){
	// 初始化/读取参数
	bubble=(bubble || true);
	cancel=(cancel || true);
	// 初始化自定义事件
	var ent;
	if(document.createEvent){
		ent=document.createEvent("Event");
		ent.initEvent(e,bubble,cancel);
	}else if(document.createEventObject){
		ent=document.createEventObject();
		ent.cancelBubble=bubble;
		ent.cancelable=cancel;
		//log("create event");
	}

	this.each(function(elmt){
		if(elmt==document){
			elmt=document.documentElement;
		}
		//log(elmt+"fireEvent");
		if(elmt.dispatchEvent){
			elmt.dispatchEvent(ent);
		}else if(elmt.fireEvent){
			elmt.fireEvent("on"+e,ent);
			//log("fire event");
		}
	});
	return true;
}

function log(msg){
	if(window.console){
		console.log(msg);
	}else{
		//alert(msg);
		var l=document.getElementById("log");
		if(l){
			l.innerHTML+="<br />"+msg;
		}
	}
}