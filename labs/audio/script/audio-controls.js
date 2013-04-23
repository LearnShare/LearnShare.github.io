window.onload=function(){
	// get autio element
	var audio=document.getElementById("audio");
	// play()
	document.getElementById("play").onclick=function(){
		audio.play();
		console.log("play");
	};
	// pause()
	document.getElementById("pause").onclick=function(){
		audio.pause();
		console.log("pause");
	};
	// get paused
	document.getElementById("get_paused").onclick=function(){
		console.log("audio.paused: "+audio.paused);
	};
	// get ended
	document.getElementById("get_ended").onclick=function(){
		console.log("audio.ended: "+audio.ended);
	};

	// set volume-
	document.getElementById("volume_down").onclick=function(){
		audio.volume-=0.2;
		console.log("volume-0.2");
	};
	// set volume+
	document.getElementById("volume_up").onclick=function(){
		audio.volume+=0.2;
		console.log("volume+0.2");
	};
	// get volume
	document.getElementById("get_volume").onclick=function(){
		console.log("audio.volume: "+audio.volume);
	};

	// get src
	document.getElementById("get_src").onclick=function(){
		console.log("audio.src: "+audio.src);
	};
	// set src_music1
	document.getElementById("play_music1").onclick=function(){
		audio.src="./media/music1.mp3";
		updateSrc();
		updateCurrentSrc();
		console.log("play music1");
	};
	// set src_music2
	document.getElementById("play_music2").onclick=function(){
		audio.src="./media/music2.mp3";
		updateSrc();
		updateCurrentSrc();
		console.log("play music2");
	};
	// set remove_music
	document.getElementById("remove_music").onclick=function(){
		audio.src="";
		console.log("remove music");
	};
	// get currentSrc
	document.getElementById("get_current_src").onclick=function(){
		console.log("audio.currentSrc: "+audio.currentSrc);
	};

	// get initialTime
	document.getElementById("get_initial_time").onclick=function(){
		console.log("audio.initialTime: "+audio.initialTime);
	};
	// get duration
	document.getElementById("get_duration").onclick=function(){
		console.log("audio.duration: "+audio.duration);
	};
	// get seeking
	document.getElementById("get_seeking").onclick=function(){
		console.log("audio.seeking: "+audio.seeking);
	};
	// set currentTime
	document.getElementById("jump_to").onclick=function(){
		audio.currentTime=30;
		console.log("jumpTo 30s");
	};
	// get currentTime
	document.getElementById("get_current_time").onclick=function(){
		console.log("audio.currentTime: "+audio.currentTime);
	};
	// get played
	document.getElementById("get_played").onclick=function(){
		console.log("audio.played:");
		var ranges=audio.played;
		var n=ranges.length;
		for(var i=0;i<n;i++){
			console.log("("+ranges.start(i)+","+ranges.end(i)+")");
		}
	};

	// autoplay on
	document.getElementById("autoplay_on").onclick=function(){
		audio.autoplay=true;
		updateAutoplay();
		console.log("autoplay on");
	};
	// autoplay off
	document.getElementById("autoplay_off").onclick=function(){
		audio.autoplay=false;
		updateAutoplay();
		console.log("autoplay off");
	};
	// get autoplay
	document.getElementById("get_autoplay").onclick=function(){
		console.log("audio.autoplay: "+audio.autoplay);
	};

	// controls show
	document.getElementById("controls_show").onclick=function(){
		audio.controls=true;
		updateControls();
		console.log("controls show");
	};
	// controls hide
	document.getElementById("controls_hide").onclick=function(){
		audio.controls=false;
		updateControls();
		console.log("controls hide");
	};
	// get controls
	document.getElementById("get_controls").onclick=function(){
		console.log("audio.controls: "+audio.controls);
	};

	// loop on
	document.getElementById("loop_on").onclick=function(){
		audio.loop=true;
		updateLoop();
		console.log("loop on");
	};
	// loop off
	document.getElementById("loop_off").onclick=function(){
		audio.loop=false;
		updateLoop();
		console.log("loop off");
	};
	// get loop
	document.getElementById("get_loop").onclick=function(){
		console.log("audio.loop: "+audio.loop);
	};

	// preload metadata
	document.getElementById("preload_metadata").onclick=function(){
		audio.preload="metadata";
		updatePreload();
		console.log("preload metadata");
	};
	// get preload
	document.getElementById("get_preload").onclick=function(){
		console.log("audio.preload: "+audio.preload);
	};

	// get defaultMuted
	document.getElementById("get_default_muted").onclick=function(){
		console.log("audio.defaultMuted: "+audio.defaultMuted);
	};
	// mute
	document.getElementById("mute").onclick=function(){
		audio.muted=true;
		updateMuted();
		console.log("audio mute");
	};
	// unmute
	document.getElementById("unmute").onclick=function(){
		audio.muted=false;
		updateMuted();
		console.log("audio unmute");
	};
	// get muted
	document.getElementById("get_muted").onclick=function(){
		console.log("audio.muted: "+audio.muted);
	};

	// get defaultPlaybackRate
	document.getElementById("get_default_playback_rate").onclick=function(){
		console.log("audio.defaultPlaybackRate: "+audio.defaultPlaybackRate);
	};
	// set playbackRate-
	document.getElementById("playback_rate_down").onclick=function(){
		audio.playbackRate-=0.2;
		console.log("playbackRate-0.2");
	};
	// set playbackRate+
	document.getElementById("playback_rate_up").onclick=function(){
		audio.playbackRate+=0.2;
		console.log("playbackRate+0.2");
	};
	// get playbackRate
	document.getElementById("get_playback_rate").onclick=function(){
		console.log("audio.playbackRate: "+audio.playbackRate);
	};

	// get networkState
	document.getElementById("get_network_state").onclick=function(){
		console.log("audio.networkState: "+audio.networkState);
	};
	// get readyState
	document.getElementById("get_ready_state").onclick=function(){
		console.log("audio.readyState: "+audio.readyState);
	};
	// get buffered
	document.getElementById("get_buffered").onclick=function(){
		console.log("audio.buffered:");
		var ranges=audio.buffered;
		var n=ranges.length;
		for(var i=0;i<n;i++){
			console.log("("+ranges.start(i)+","+ranges.end(i)+")");
		}
	};
	// get seekable
	document.getElementById("get_seekable").onclick=function(){
		console.log("audio.seekable:");
		var ranges=audio.seekable;
		var n=ranges.length;
		for(var i=0;i<n;i++){
			console.log("("+ranges.start(i)+","+ranges.end(i)+")");
		}
	};
	
	// DOM events
	
	// abort
	audio.addEventListener("abort",function(){
		console.log("event:abort");
	});
	// canplay
	audio.addEventListener("canplay",function(){
		console.log("event:canplay");
	});
	// canplaythrough
	audio.addEventListener("canplaythrough",function(){
		console.log("event:canplaythrough");
	});
	// durationchange
	audio.addEventListener("durationchange",function(){
		updateDuration();
		console.log("event:durationchange");
	});
	// emptied
	audio.addEventListener("emptied",function(){
		updateSrc();
		updateCurrentSrc();
		updateDuration();
		updatePaused();
		updateNetworkState();
		updateReadyState();
		updateBuffered();
		updateSeekable();
		updatePlayed();
		console.log("event:emptied");
	});
	// ended
	audio.addEventListener("ended",function(){
		updateEnded();
		console.log("event:ended");
	});
	// loadeddata
	audio.addEventListener("loadeddata",function(){
		updateNetworkState();
		updateReadyState();
		updateBuffered();
		updateSeekable();
		console.log("event:loadeddata");
	});
	// loadedmetadata
	audio.addEventListener("loadedmetadata",function(){
		console.log("event:loadedmetadata");
	});
	// loadstart
	audio.addEventListener("loadstart",function(){
		console.log("event:loadstart");
	});
	// pause
	audio.addEventListener("pause",function(){
		updatePaused();
		console.log("event:pause");
	});
	// play
	audio.addEventListener("play",function(){
		updatePaused();
		console.log("event:play");
	});
	// playing
	audio.addEventListener("playing",function(){
		console.log("event:playing");
	});
	// progress
	audio.addEventListener("progress",function(){
		updateNetworkState();
		updateReadyState();
		updateBuffered();
		updateSeekable();
		console.log("event:progress");
	});
	// ratechange
	audio.addEventListener("ratechange",function(){
		updatePlaybackRate();
		console.log("event:ratechange");
	});
	// seeked
	audio.addEventListener("seeked",function(){
		console.log("event:seeked");
	});
	// seeking
	audio.addEventListener("seeking",function(){
		console.log("event:seeking");
	});
	// stalled
	audio.addEventListener("stalled",function(){
		console.log("event:stalled");
	});
	// suspend
	audio.addEventListener("suspend",function(){
		console.log("event:suspend");
	});
	// timeupdate
	audio.addEventListener("timeupdate",function(){
		updateCurrentTime();
		updateEnded();
		updatePlayed();
		console.log("event:timeupdate");
	});
	// volumechange
	audio.addEventListener("volumechange",function(){
		updateVolume();
		console.log("event:volumechange");
	});
	// waiting
	audio.addEventListener("waiting",function(){
		console.log("event:waiting");
	});

	updateAutoplay();
	updateControls();
	updateDefaultMuted();
	updateDefaultPlaybackRate();
	updateLoop();
	updatePreload();

	updateSrc();
	updateCurrentSrc();
	updateDuration();
	updateCurrentTime();
	updateVolume();
	updatePaused();
	updateMuted();
	updateEnded();
	updatePlaybackRate();

	updateNetworkState();
	updateReadyState();
	updateBuffered();
	updateSeekable();
	updatePlayed();
	updateError();
};
// functions to update info table
// autoplay
function updateAutoplay(){
	document.getElementById("autoplay").innerHTML=audio.autoplay;
}
// controls
function updateControls(){
	document.getElementById("controls").innerHTML=audio.controls;
}
// defaultMuted
function updateDefaultMuted(){
	document.getElementById("default_muted").innerHTML=audio.defaultMuted;
}
// defaultPlaybackRate
function updateDefaultPlaybackRate(){
	document.getElementById("default_playback_rate").innerHTML=audio.defaultPlaybackRate;
}
// loop
function updateLoop(){
	document.getElementById("loop").innerHTML=audio.loop;
}
// preload
function updatePreload(){
	document.getElementById("preload").innerHTML=audio.preload;
}

// src
function updateSrc(){
	document.getElementById("src").innerHTML=audio.src;
}
// currentSrc
function updateCurrentSrc(){
	document.getElementById("current_src").innerHTML=audio.currentSrc;
}
// duration
function updateDuration(){
	document.getElementById("duration").innerHTML=audio.duration;
}
// currentTime
function updateCurrentTime(){
	document.getElementById("current_time").innerHTML=audio.currentTime;
}
// ended
function updateEnded(){
	document.getElementById("ended").innerHTML=audio.ended;
}
// paused
function updatePaused(){
	document.getElementById("paused").innerHTML=audio.paused;
}
// muted
function updateMuted(){
	document.getElementById("muted").innerHTML=audio.muted;
}
// volume
function updateVolume(){
	document.getElementById("volume").innerHTML=audio.volume;
}
// playbackRate
function updatePlaybackRate(){
	document.getElementById("playback_rate").innerHTML=audio.playbackRate;
}

// networkState
function updateNetworkState(){
	document.getElementById("network_state").innerHTML=audio.networkState;
}
// readyState
function updateReadyState(){
	document.getElementById("ready_state").innerHTML=audio.readyState;
}
// buffered
function updateBuffered(){
	var ranges=audio.buffered;
	var str="";
	var n=ranges.length;
	for(var i=0;i<n;i++){
		str+="("+ranges.start(i)+","+ranges.end(i)+")";
		if(i!=n-1){
			str+="<br />";
		}
	}
	document.getElementById("buffered").innerHTML=str;
}
// seekable
function updateSeekable(){
	var ranges=audio.seekable;
	var str="";
	var n=ranges.length;
	for(var i=0;i<n;i++){
		str+="("+ranges.start(i)+","+ranges.end(i)+")";
		if(i!=n-1){
			str+="<br />";
		}
	}
	document.getElementById("seekable").innerHTML=str;
}
// played
function updatePlayed(){
	var ranges=audio.played;
	var str="";
	var n=ranges.length;
	for(var i=0;i<n;i++){
		str+="("+ranges.start(i)+","+ranges.end(i)+")";
		if(i!=n-1){
			str+="<br />";
		}
	}
	document.getElementById("played").innerHTML=str;
}
// error
function updateError(){
	document.getElementById("error").innerHTML=audio.error;
}