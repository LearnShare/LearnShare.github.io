window.onload=function(){
	//console.log("ready");
	var open=document.querySelector("#open");
	open.addEventListener("click",function(){
		//console.log("click");
		coverOpen();
		pushHistory("home",1);
	});
	window.addEventListener("popstate",listenerPopState);
	window.addEventListener("scroll",listenerScroll);
	var navs=document.querySelectorAll("nav a");
	each(navs,function(elmt){
		elmt.addEventListener("click",listenerNavClick);
	});
}

function listenerPopState(){
	var hash=location.hash;
	//console.log(hash);
	if(hash){
		coverOpen();
		//console.log("#"+hash.substr(2));
		scrollToTarget("#"+hash.substr(2),500,1500);
	}
}

function listenerNavClick(e){
	e.preventDefault();
	var link=this.href;
	var index=link.lastIndexOf("#");
	//console.log(this.href+" "+index);
	var hash=link.substr(index+1);
	//console.log("hash:"+hash+" "+hashList[hash]);
	//pushHistory(hash,hashList[hash]);
	scrollToTarget("#"+hash,500,200);
}

function listenerScroll(){
	if(coverOpend()){
		var hashList=[
			"#home",
			"#skill",
			"#about",
			"#works",
			"#contact"
		];
		var py=window.pageYOffset;
		var currentPageHash=hashList[Math.floor((py+200)/700)];
		//console.log("current page:"+currentPageHash);
		if(currentPageHash){ // 末尾页可能无法获取到 hash
			setCurrentNavItem(currentPageHash);
			var sectionSkill=document.querySelector("section#skill");
			if(currentPageHash=="#skill"){
				addClass(sectionSkill,"open");
			}else{
				removeClass(sectionSkill,"open");
			}
		}
	}
}

function setCurrentNavItem(hash){
	if(!window._currentNav || window._currentNav!=hash){
		var hashList={
			home: 1,
			skill: 2,
			about: 3,
			works: 4,
			contact: 5
		}
		var current=document.querySelector("nav a[href='"+hash+"']");
		var list=document.querySelectorAll("nav a");
		removeClass(list,"current");
		addClass(current,"current");
		window._currentNav=hash;
		hash=hash.substr(1);
		pushHistory(hash,hashList.hash);
		//console.log("page change");
	}
}

function pushHistory(hash,id){
	history.pushState({
		url: "index.html#!"+hash,
		id: id
	},
	null,
	"index.html#!"+hash);
}

function coverOpend(){
	var body=document.querySelector("body");
	return hasClass(body,"open");
}

function coverOpen(){
	//console.log("cover:"+coverOpend());
	if(!coverOpend()){
		var body=document.querySelector("body");
		addClass(body,"open");
	}
}

function scrollToTarget(elmt,duration,deley){
	var f=20;
	duration=(duration || 500);
	deley=(deley || 0);
	if(duration=="slow"){
		duration=1000;
	}else if(duration=="normal"){
		duration=500;
	}else if(duration=="fast"){
		duration=200;
	}
	var target=document.querySelector(elmt);
	var tx=target.offsetLeft,
		ty=target.offsetTop,
		px=window.pageXOffset,
		py=window.pageYOffset;
	//console.log("t:"+tx+" "+ty);
	//console.log("p:"+px+" "+py);
	//console.log(duration+" "+deley);
	var up=false,
		left=false;
	if(tx<px){
		left=true;
	}
	if(ty<py){
		up=true;
	}
	if(duration==0){
		window.scrollTo(tx,ty);
		return true;
	}else{
		var n=duration/f;
		//console.log("n:"+n);
		var stepx=Math.ceil((tx-px)/n),
			stepy=Math.ceil((ty-py)/n);
		//console.log("step:"+stepx+" "+stepy);
		window._scrollArgs={
			sx: stepx,
			sy: stepy,
			tx: tx,
			ty: ty,
			d: n,
			u: up,
			l: left
		}
		if(deley>0){
			//console.log("deley0:"+new Date());
			window._scrollDeley=window.setTimeout("_scroll()",deley);
			//console.log("deley1:"+new Date());
		}else{
			//console.log("deley3");
			_scroll();
		}
	}
}

function _scroll(){
	window.clearTimeout(window._scrollDeley);
	//console.log("deley2:"+new Date());
	var px,
		py;
	window._scrollInterval=window.setInterval(function(){
		window.scrollBy(_scrollArgs.sx,_scrollArgs.sy);
		px=window.pageXOffset;
		py=window.pageYOffset;
		//console.log("direction:"+(_scrollArgs.l ? "left" : "right")+" "+(_scrollArgs.u ? "up" : "down"));
		//console.log("page:"+px+" "+py);
		//console.log("target:"+_scrollArgs.tx+" "+_scrollArgs.ty);
		if(px==_scrollArgs.tx && py==_scrollArgs.ty){
			return _scrollStop();
		}
		if(_scrollArgs.l){
			if(px<_scrollArgs.tx || px==0){
				return _scrollStop();
			}
		}else if(px>_scrollArgs.tx){
				return _scrollStop();
		}
		if(_scrollArgs.u){
			if(py<_scrollArgs.ty || py==0){
				return _scrollStop();
			}
		}else if(py>_scrollArgs.ty){
				return _scrollStop();
		}
	},_scrollArgs.d);
	//console.log(window._scrollInterval);
}

function _scrollStop(){
	window.scrollTo(_scrollArgs.tx,_scrollArgs.ty);
	window.clearInterval(window._scrollInterval);
	//console.log("_scrollStop");
	return true;
}