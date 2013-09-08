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
var f=function(args){
	console.log(args);
	if(args.gallery){
		this._gallery=$(this).children(args.gallery)[0];
		//console.log(this._gallery);
	}else{
		return false;
	}
	this._pagination=(args.pagination) ? $(this).children(args.pagination)[0] : undefined;
	//console.log(this._pagination);
	this._prev=(args.prev) ? $(this).children(args.prev)[0] : undefined;
	this._next=(args.next) ? $(this).children(args.next)[0] : undefined;
	// init gallery
	return this;
	/*
	var x=init(this);
	this._current=x.c;
	this._length=x.l;
	console.log(this._current);
	console.log(this._length);
	*/
}

f.prototype.init=function(){
	console.log("init");
	var glis=this._gallery.children("li");
	var current=getCurrent(glis);
	console.log(glis.length);
	console.log(current);
	if(current==-1){
		setCurrent(glis,0);
		current=0;
	}
	if(this._pagination){
		var plis=this._pagination.children("li");
		console.log(plis.length);
		setActive(plis,current);
	}
	return {c: current,l: glis.length};
}

function getCurrent(lis){
	for(var i=0,len=lis.length;i<len;i++){
		if($(lis[i]).hasClass("current")){
			return i;
		}
		return -1;
	}
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
		"gallery": f
	});
}(jQuery));
