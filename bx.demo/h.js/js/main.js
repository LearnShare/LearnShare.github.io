window.onload=function(){
	// bind
	var btn=new H("#btn");
	btn.bind("click",function(){
		log("click on #btn");
	});
	// bind
	var btn1=new H(".btn1");
	btn1.bind("click",function(){
		log("click on .btn1");
	});
	// unbind
	var btn2=new H("#btn2");
	btn2.bind("click",listener2);
	btn2.unbind("click",listener2);
	// fire
	var btn3=new H("#btn3");
	btn3.bind("click",function(){
		log("click on #btn3");
		btn.fire("click");
	});
	// fire
	var btn4=new H("#btn4");

	btn.bind("fire",function(){
		log("fire on #btn");
	});

	btn4.bind("click",function(){
		log("click on #btn4");
		btn.fire("fire");
	});
}

function listener2(){
	log("click on #btn2");
}