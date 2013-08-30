window.onload=function(){
	resetContainer();
	window.addEventListener("resize",resetContainer);
	// links
	var links=document.querySelectorAll("#table > li a[dragable]");
	each(links,function(elmt){
		addDragListener(elmt);
	});
	// list
	var list=document.querySelectorAll("#table > li");
	each(list,function(elmt){
		addDropListener(elmt);
	});
	// edit
	var edit=document.querySelectorAll("#table > li > ul > li > a");
	//console.log(edit.length);
	each(edit,function(elmt){
		addEditListener(elmt);
	});
	// toolbarDel
	var toolbarDel=document.querySelector("#toolbar li#del");
	toolbarDel.addEventListener("dragover",function(e){
		e.preventDefault();
		addClass(this,"active");
	});
	toolbarDel.addEventListener("dragleave",function(e){
		e.preventDefault();
		removeClass(this,"active");
	});
	toolbarDel.addEventListener("drop",function(e){
		e.preventDefault();
		removeClass(this,"active");
		deleteElmt(window._dragElmt.parentNode);
		var toolbar=document.getElementById("toolbar");
		removeClass(toolbar,"standby");
		removeClass(toolbar,"active");
	});
	// toolbarEdit
	var toolbarEdit=document.querySelector("#toolbar li#edit");
	toolbarEdit.addEventListener("dragover",function(e){
		e.preventDefault();
		addClass(this,"active");
	});
	toolbarEdit.addEventListener("dragleave",function(e){
		e.preventDefault();
		removeClass(this,"active");
	});
	toolbarEdit.addEventListener("drop",function(e){
		e.preventDefault();
		//deleteElmt(window._dragElmt.parentNode);
		//console.log("edit");
		removeClass(this,"active");
		editElmt();
	});
	// add
	var add=document.querySelector("#table #add a");
	add.addEventListener("click",function(e){
		e.preventDefault();
		var fragment=document.getElementById("fragment");
		var newItem=fragment.cloneNode(true);
		newItem.removeAttribute("id");
		console.log(newItem);
		var target=newItem.querySelector("a[dragable]");
		console.log(target);
		editElmt(target,true);
	});
}

function addDragListener(target){
	target.addEventListener("dragstart",listenerLinkDragstart);
}

function addDropListener(target){
	target.addEventListener("dragover",listenerLiDragover);
	target.addEventListener("dragleave",listenerLiDragleave);
	target.addEventListener("drop",listenerLiDrop);
}

function addEditListener(target){
	target.addEventListener("click",listenerEditClick);
}

function resetContainer(){
	var size={
		maxw: 960,
		minw: 480,
		maxh: 540,
		minh: 270,
		x: 16/9
	}
	var pw=window.innerWidth,
		ph=window.innerHeight,
		cw=0,
		ch=0,
		container=document.getElementById("container");
	if(pw/ph<=size.x){
		if(pw>=size.maxw){
			cw=size.maxw;
			ch=size.maxh;
		}else if(pw<size.maxw && pw>size.minw){
			cw=pw;
			ch=pw/size.x;
		}else if(pw<=size.minw){
			cw=size.minw;
			ch=size.minh;
		}
	}else{
		if(ph>=size.maxh){
			ch=size.maxh;
			cw=size.maxw;
		}else if(ph<size.maxh && ph>size.minh){
			ch=ph;
			cw=ph*size.x;
		}else if(ph<=size.minh){
			ch=size.minh;
			cw=size.minw;
		}
	}
	container.style.width=cw-40+"px";
	container.style.height=ch-40+"px";
	container.style.marginLeft=-cw/2+15+"px";
	container.style.marginTop=-ch/2+15+"px";

	//console.log("w:"+pw+" "+ph);
	//console.log("c:"+cw+" "+ch);
}

function listenerLinkDragstart(e){
	//console.log("source:"+e.target);
	window._dragElmt=e.target;
	var toolbar=document.getElementById("toolbar");
	addClass(toolbar,"active standby");
}

function listenerLiDragover(e){
	e.preventDefault();
	var target=e.target.parentNode;
	if(!target.isEqualNode(window._dragElmt.parentNode)){ // 非当前位置
		var pw=target.offsetWidth,
			ph=target.offsetHeight,
			ex=e.offsetX,
			ey=e.offsetY;
		//console.log("p:"+pw+" "+ph);
		//console.log("e:"+ex+" "+ey);
		if(ex/pw<=0.1){
			//console.log("insert before");
			addClass(target,"before");
		}else if(ex/pw>=0.9){
			//console.log("insert after");
			addClass(target,"after");
		}else{
			//console.log("replace");
			removeClass(target,"before");
			removeClass(target,"after");
		}
	}
}

function listenerLiDragleave(e){
	e.preventDefault();
	var target=(e.target.nodeName=="LI") ? e.target : e.target.parentNode;
	removeClass(target,"before");
	removeClass(target,"after");
}

function listenerLiDrop(e){
	e.preventDefault();
	var target=(e.target.nodeName=="LI") ? e.target : e.target.parentNode;
	removeClass(target,"before");
	removeClass(target,"after");
	var toolbar=document.getElementById("toolbar");
	removeClass(toolbar,"standby");
	removeClass(toolbar,"active");
	if(!target.isEqualNode(window._dragElmt.parentNode)){ // 非当前位置
		var pw=target.offsetWidth,
			ph=target.offsetHeight,
			ex=e.offsetX,
			ey=e.offsetY;
		//console.log("p:"+pw+" "+ph);
		//console.log("e:"+ex+" "+ey);
		if(ex/pw<=0.1){
			insert(target);
			//console.log("insert before");
		}else if(ex/pw>=0.9){
			insert(target.nextSibling.nextSibling);
			//console.log("insert after");
		}else{
			replace(target);
			//console.log("replace");
		}
		window._dragElmt=undefined;
	}
}

function listenerEditClick(e){
	e.preventDefault();
	var target=e.target;
	var action=attr(target,"data-action");
	if(action=="delete"){
		deleteElmt(target.parentNode.parentNode.parentNode);
	}else if(action=="edit"){
		editElmt(target.parentNode.parentNode.parentNode.querySelector("a[dragable]"));
	}
}

function replace(target){
	var a=window._dragElmt,
		ap=a.parentNode,
		thisLink=target.querySelector("a[dragable]");
	//console.log("ap:"+ap);
	//console.log("target:"+target);
	//console.log("thislink:"+thisLink);
	if(thisLink){
		ap.appendChild(thisLink);
		target.appendChild(a);
	}
}

function insert(target){
	var p=document.getElementById("table");
	p.insertBefore(window._dragElmt.parentNode,target);
}

function deleteElmt(target){
	var p=document.getElementById("table");
	p.removeChild(target);
}

function editElmt(target,add){
	freezeDragable();
	var target=(target || window._dragElmt);
	add=(add || false);
	console.log("target:"+target);
	setCurrentElmt(target.parentNode);
	var toolbar=document.getElementById("toolbar");
	removeClass(toolbar,"standby");
	addClass(toolbar,"active edit");
	var inputUrl=document.querySelector("#toolbar #form #url");
	var inputName=document.querySelector("#toolbar #form #name");
	var span=target.querySelector("span");
	inputUrl.value=target.href;
	inputName.value=span.innerHTML;
	// btnConfirm
	var btnConfirm=document.querySelector("#toolbar #form #confirm");
	btnConfirm.addEventListener("click",function(){
		target.href=inputUrl.value;
		span.innerHTML=inputName.value;
		if(add){ // add new item
			addDragListener(target);
			addDropListener(target.parentNode);
			var edit=target.parentNode.querySelectorAll("ul > li > a");
			each(edit,function(elmt){
				addEditListener(elmt);
			});
			var table=document.getElementById("table");
			table.insertBefore(target.parentNode,table.querySelector("div#add"));
			target=undefined;
		}
		removeClass(toolbar,"edit");
		removeClass(toolbar,"active");
		clearCurrentElmt();
		unFreezeDragable();
	});
	// btnCancel
	var btnCancel=document.querySelector("#toolbar #form #cancel");
	btnCancel.addEventListener("click",function(){
		removeClass(toolbar,"edit");
		removeClass(toolbar,"active");
		clearCurrentElmt();
		unFreezeDragable();
	});
}

function clearCurrentElmt(){
	var list=document.querySelectorAll("#table > li");
	each(list,function(elmt){
		removeClass(elmt,"current");
	});
}

function setCurrentElmt(target){
	clearCurrentElmt();
	addClass(target,"current");
}

function freezeDragable(){
	var links=document.querySelectorAll("#table > li a[dragable]");
	each(links,function(elmt){
		elmt.removeAttribute("dragable");
	});
}

function unFreezeDragable(){
	var links=document.querySelectorAll("#table > li > a");
	attr(links,"dragable",true);
}