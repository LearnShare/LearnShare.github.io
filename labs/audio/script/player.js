window.onload=function(){
	var audio=document.getElementById("audio");

	var current_time=document.getElementById("current-time");
	var duration=document.getElementById("duration");

	var progress_bar=document.getElementById("progress");
	var progress_length=650;
	var buffered=document.getElementById("buffered");
	var progress=document.getElementById("progress");
	
	audio.addEventListener("progress",function(){
		console.log("event:progress");
		buffered.style.width=audio.buffered.end(0)/audio.duration*progress_length+"px";
	});

	audio.addEventListener("durationchange",function(){
		//console.log("event:durationchange");
		duration.innerHTML=timeConvert(audio.duration);
	});

	audio.addEventListener("timeupdate",function(){
		progress.style.width=audio.currentTime/audio.duration*progress_length+"px";
		current_time.innerHTML=timeConvert(audio.currentTime);
	});

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

	buffered.style.width=audio.buffered.end(0)/audio.duration*progress_length+"px";
	duration.innerHTML=timeConvert(audio.duration);
};
function timeConvert(t){
	return Math.floor(t/60)+":"+Math.floor(t%60);
}