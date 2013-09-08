/*
* file: jquery.gallery.js
* require: jquery.js
* author: learnshare
* version: 0.1
* update: 2013-09-07 10:32
*/
/* args
{
	gallery: ".gallery", // ul
	pagination: ".pagination", // ul
	prev: ".prev", // a/
	next: ".next" // a/*
}
*/
function plugin(args){
	console.log(args);
	if(args.gallery){
		this._gallery=$(this).find(args.gallery)[0];
		//console.log(this._gallery);
	}else{
		return false;
	}
	this._pagination=(args.pagination) ? $(this).find(args.pagination)[0] : undefined;
	//console.log(this._pagination);
	this._prev=(args.prev) ? $(this).find(args.prev)[0] : undefined;
	this._next=(args.next) ? $(this).find(args.next)[0] : undefined;
	// init gallery
	console.log("g:"+this._gallery+"\np:"+this._pagination+"\nprev:"+this._prev+"\nnext:"+this._next);
	init(this);
}

function init(g){
	var glis=$(g._gallery).children("li");
	g._length=glis.length;
	g._current=getCurrent(glis);
	console.log(g._length);
	console.log(g._current);
	if(g._current==-1){
		setCurrent(glis,0);
		g._current=0;
	}
	if(g._pagination){
		var plis=$(g._pagination).children("li");
		console.log(plis.length);
		setActive(plis,g._current);
		$(plis).bind("click",function(e){
			var index=getIndex(plis,this);
			console.log(index);
			g._current=index;
			setCurrent(glis,index);
			setActive(plis,index);
		});
	}
	if(g._prev){
		$(g._prev).bind("click",function(e){
			e.preventDefault();
			var index=(g._current-1<0) ? g._length-1 : (g._current-1);
			console.log(index);
			g._current=index;
			setCurrent(glis,index);
			setActive(plis,index);
		});
	}
	if(g._next){
		$(g._next).bind("click",function(e){
			e.preventDefault();
			var index=(g._current+1>=g._length) ? 0 : (g._current+1);
			console.log(index);
			g._current=index;
			setCurrent(glis,index);
			setActive(plis,index);
		});
	}
}

function getCurrent(lis){
	for(var i=0,len=lis.length;i<len;i++){
		if($(lis[i]).hasClass("current")){
			return i;
		}
	}
	return -1;
}

function getIndex(lis,elmt){
	for(var i=0,len=lis.length;i<len;i++){
		if(lis[i]==elmt){
			return i;
		}
	}
	return -1;
}

function setCurrent(lis,n){
	$(lis).each(function(){
		$(this).removeClass("current");
	});
	$(lis[n]).addClass("current");
}

function setActive(lis,n){
	$(lis).each(function(){
		$(this).removeClass("active");
	});
	$(lis[n]).addClass("active");
}


(function($){
	$.fn.extend({
		"gallery": plugin
	});
}(jQuery));
