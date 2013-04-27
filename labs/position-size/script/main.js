window.onload=function(){
	var div=document.getElementById("div");

	document.getElementById("get-style-pos").onclick=function(){
		console.log("div.style.width:"+div.style.width);
		console.log("div.style.height:"+div.style.height);
	};

	document.getElementById("get-client-pos").onclick=function(){
		console.log("div.clientLeft:"+div.clientLeft);
		console.log("div.clientTop:"+div.clientTop);
		console.log("div.clientWidth:"+div.clientWidth);
		console.log("div.clientHeight:"+div.clientHeight);
	};

	document.getElementById("get-offset-pos").onclick=function(){
		console.log("div.offsetLeft:"+div.offsetLeft);
		console.log("div.offsetTop:"+div.offsetTop);
		console.log("div.offsetWidth:"+div.offsetWidth);
		console.log("div.offsetHeight:"+div.offsetHeight);
	};

	document.getElementById("get-scroll-pos").onclick=function(){
		console.log("div.scrollLeft:"+div.scrollLeft);
		console.log("div.scrollTop:"+div.scrollTop);
		console.log("div.scrollWidth:"+div.scrollWidth);
		console.log("div.scrollHeight:"+div.scrollHeight);
	};

	div.addEventListener("click",function(e){
		console.log("event.clientX:"+e.clientX);
		console.log("event.clientY:"+e.clientY);
		console.log("event.offsetX:"+e.offsetX);
		console.log("event.offsetY:"+e.offsetY);
		console.log("event.screenX:"+e.screenX);
		console.log("event.screenY:"+e.screenY);
	});

	document.getElementById("get-inner-size").onclick=function(){
		console.log("window.innerWidth:"+window.innerWidth);
		console.log("window.innerHeight:"+window.innerHeight);
	};

	document.getElementById("get-outer-size").onclick=function(){
		console.log("window.outerWidth:"+window.outerWidth);
		console.log("window.outerHeight:"+window.outerHeight);
	};

	document.getElementById("get-page-offset-pos").onclick=function(){
		console.log("window.pageXOffset:"+window.pageXOffset);
		console.log("window.pageYOffset:"+window.pageYOffset);
	};

	document.getElementById("get-screen-pos").onclick=function(){
		console.log("window.screenLeft:"+window.screenLeft);
		console.log("window.screenTop:"+window.screenTop);
		console.log("window.screenX:"+window.screenX);
		console.log("window.screenY:"+window.screenY);
	};

	document.getElementById("get-screen-size").onclick=function(){
		console.log("screen.width:"+screen.width);
		console.log("screen.height:"+screen.height);
	};

	document.getElementById("get-avail-size").onclick=function(){
		console.log("screen.availWidth:"+screen.availWidth);
		console.log("screen.availHeight:"+screen.availHeight);
	};

	document.getElementById("get-device-dpi").onclick=function(){
		console.log("screen.deviceXDPI:"+screen.deviceXDPI);
		console.log("screen.deviceYDPI:"+screen.deviceYDPI);
	};

	document.getElementById("get-logical-dpi").onclick=function(){
		console.log("screen.logicalXDPI:"+screen.logicalXDPI);
		console.log("screen.logicalYDPI:"+screen.logicalYDPI);
	};
};