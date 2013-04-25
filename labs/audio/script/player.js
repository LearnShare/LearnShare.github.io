window.onload=function(){
	var audio=document.getElementById("audio");

	var current_time=document.getElementById("current-time");
	var duration=document.getElementById("duration");

	var progress_bar=document.getElementById("progress");
	var progress_length=650;
	var buffered=document.getElementById("buffered");
	var progress=document.getElementById("progress");
	var btn_volume=document.getElementById("btn-volume");

	// display downloading progress
	audio.addEventListener("progress",function(){
		//console.log("event:progress");
		if(audio.buffered.length>0){
			buffered.style.width=audio.buffered.end(0)/audio.duration*progress_length+"px";
		}
	});

	// display media duration
	audio.addEventListener("durationchange",function(){
		//console.log("event:durationchange");
		duration.innerHTML=timeConvert(audio.duration);
	});

	// display current time
	audio.addEventListener("timeupdate",function(){
		progress.style.width=audio.currentTime/audio.duration*progress_length+"px";
		current_time.innerHTML=timeConvert(audio.currentTime);
	});

	// play/pause
	document.getElementById("btn-play").onclick=function(){
		//console.log(audio.paused);
		if(audio.paused){
			audio.play();
			this.innerHTML="||";
		}else{
			audio.pause();
			this.innerHTML=">";
		}
	};

	// loop Y/N
	document.getElementById("btn-loop").onclick=function(){
		//console.log(audio.loop);
		if(audio.loop){
			audio.loop=false;
			this.innerHTML="loop:N";
		}else{
			audio.loop=true;
			this.innerHTML="loop:Y";
		}
	};

	// muted Y/N
	btn_volume.onclick=function(){
		//console.log(audio.muted);
		if(audio.muted){
			audio.muted=false;
			this.innerHTML=Math.floor(audio.volume*100);
		}else{
			audio.muted=true;
			this.innerHTML="muted";
		}
	};

	// volume-
	document.getElementById("btn-volume-down").onclick=function(){
		//console.log(audio.muted);
		if(btn_volume.innerHTML!="0"){
			audio.volume-=0.2;
		}
		btn_volume.innerHTML=Math.floor(audio.volume*100);
	};

	// volume+
	document.getElementById("btn-volume-up").onclick=function(){
		//console.log(audio.muted);
		if(btn_volume.innerHTML!="100"){
			audio.volume+=0.2;
		}
		btn_volume.innerHTML=Math.floor(audio.volume*100);
	};

	// update music info when first load
	if(audio.buffered.length>0){
		buffered.style.width=audio.buffered.end(0)/audio.duration*progress_length+"px";
	}
	duration.innerHTML=timeConvert(audio.duration);
};
function timeConvert(t){
	return Math.floor(t/60)+":"+Math.floor(t%60);
}