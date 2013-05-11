window.onload=function(){
	var input_url=document.getElementById("url");
	var input_location=document.getElementById("location");

	document.getElementById("encode").onclick=function(){
		input_location.value=xEncode(input_url.value);
	};
	document.getElementById("decode").onclick=function(){
		input_url.value=xDecode(input_location.value);
	};
};

function xEncode(url){
	// random number
	var a=Math.floor(Math.random()*6+4);
	// matrix and it's transpose matrix
	var b=new Array();
	var t=new Array();
	// the return value
	var result="";

	// if URL not encoded, encode it
	if(url.indexOf("%")==-1){
		url=encodeURI(url);
	}
	// replace all 0 width ^
	url=url.replace(/0/g,"^");
	// encodeComponent the URL
	var urlec=encodeURIComponent(url);
	// it's length
	var elen=urlec.length;
	// matrix height or height-1
	var ex=Math.floor(elen/a);
	// letter number of matrix's last line
	var ey=elen%a;

	// get matrix
	for(var i=0;i<elen;i+=a){
		b[i/a]=urlec.slice(i,i+a);
	}

	// transpose the matrix
	result+=a; // add the random number to result
	for(var i=0;i<a;i++){
		// line's length
		var max=(i<ey) ? ex+1 : ex
		t[i]="";
		for(var j=0;j<max;j++){
			t[i]+=b[j][i];
		}
		result+=t[i]; // add new line to result
	}
	return result;
}

function xDecode(location){
	return location;
}