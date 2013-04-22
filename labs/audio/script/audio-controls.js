window.onload=function(){
	// get autio element
	var audio=document.getElementById("audio");
	// play()
	document.getElementById("play").onclick=function(){
		audio.play();
		console.log("play\n");
	};
	// pause()
	document.getElementById("pause").onclick=function(){
		audio.pause();
		console.log("pause\n");
	};
	// get paused
	document.getElementById("get_paused").onclick=function(){
		console.log("audio.paused: "+audio.paused+"\n");
	};
	// get ended
	document.getElementById("get_ended").onclick=function(){
		console.log("audio.ended: "+audio.ended+"\n");
	};

	// set volume-
	document.getElementById("volume_down").onclick=function(){
		audio.volume-=0.2;
		console.log("volume-0.2\n");
	};
	// set volume+
	document.getElementById("volume_up").onclick=function(){
		audio.volume+=0.2;
		console.log("volume+0.2\n");
	};
	// get volume
	document.getElementById("get_volume").onclick=function(){
		console.log("audio.volume: "+audio.volume+"\n");
	};

	// get src
	document.getElementById("get_src").onclick=function(){
		console.log("audio.src: "+audio.src+"\n");
	};
	// set src_music1
	document.getElementById("play_music1").onclick=function(){
		audio.src="./media/music1.mp3";
		console.log("play music1\n");
	};
	// set src_music2
	document.getElementById("play_music2").onclick=function(){
		audio.src="./media/music2.mp3";
		console.log("play music2\n");
	};
	// get currentSrc
	document.getElementById("get_current_src").onclick=function(){
		console.log("audio.currentSrc: "+audio.currentSrc+"\n");
	};

	// get initialTime
	document.getElementById("get_initial_time").onclick=function(){
		console.log("audio.initialTime: "+audio.initialTime+"\n");
	};
	// get duration
	document.getElementById("get_duration").onclick=function(){
		console.log("audio.duration: "+audio.duration+"\n");
	};
	// get seeking
	document.getElementById("get_seeking").onclick=function(){
		console.log("audio.seeking: "+audio.seeking+"\n");
	};
	// set currentTime
	document.getElementById("jump_to").onclick=function(){
		audio.currentTime=30;
		console.log("jumpTo 30s\n");
	};
	// get currentTime
	document.getElementById("get_current_time").onclick=function(){
		console.log("audio.currentTime: "+audio.currentTime+"\n");
	};
	// get played
	document.getElementById("get_played").onclick=function(){
		console.log("audio.played:\n");
		var ranges=audio.played;
		var n=ranges.length;
		for(var i=0;i<n;i++){
			console.log("("+ranges.start(i)+","+ranges.end(i)+")\n");
		}
	};

	// autoplay on
	document.getElementById("autoplay_on").onclick=function(){
		audio.autoplay=true;
		console.log("autoplay on\n");
	};
	// autoplay off
	document.getElementById("autoplay_off").onclick=function(){
		audio.autoplay=false;
		console.log("autoplay off\n");
	};
	// get autoplay
	document.getElementById("get_autoplay").onclick=function(){
		console.log("audio.autoplay: "+audio.autoplay+"\n");
	};

	// controls show
	document.getElementById("controls_show").onclick=function(){
		audio.controls=true;
		console.log("controls show\n");
	};
	// controls hide
	document.getElementById("controls_hide").onclick=function(){
		audio.controls=false;
		console.log("controls hide\n");
	};
	// get controls
	document.getElementById("get_controls").onclick=function(){
		console.log("audio.controls: "+audio.controls+"\n");
	};

	// loop on
	document.getElementById("loop_on").onclick=function(){
		audio.loop=true;
		console.log("loop on\n");
	};
	// loop off
	document.getElementById("loop_off").onclick=function(){
		audio.loop=false;
		console.log("loop off\n");
	};
	// get loop
	document.getElementById("get_loop").onclick=function(){
		console.log("audio.loop: "+audio.loop+"\n");
	};

	// preload metadata
	document.getElementById("preload_metadata").onclick=function(){
		audio.preload="metadata";
		console.log("preload metadata\n");
	};
	// get preload
	document.getElementById("get_preload").onclick=function(){
		console.log("audio.preload: "+audio.preload+"\n");
	};

	// get defaultMuted
	document.getElementById("get_default_muted").onclick=function(){
		console.log("audio.defaultMuted: "+audio.defaultMuted+"\n");
	};
	// mute
	document.getElementById("mute").onclick=function(){
		audio.muted=true;
		console.log("audio mute\n");
	};
	// unmute
	document.getElementById("unmute").onclick=function(){
		audio.muted=false;
		console.log("audio unmute\n");
	};
	// get muted
	document.getElementById("get_muted").onclick=function(){
		console.log("audio.muted: "+audio.muted+"\n");
	};

	// get defaultPlaybackRate
	document.getElementById("get_default_playback_rate").onclick=function(){
		console.log("audio.defaultPlaybackRate: "+audio.defaultPlaybackRate+"\n");
	};
	// set playbackRate-
	document.getElementById("playback_rate_down").onclick=function(){
		audio.playbackRate-=0.2;
		console.log("playbackRate-0.2\n");
	};
	// set playbackRate+
	document.getElementById("playback_rate_up").onclick=function(){
		audio.playbackRate+=0.2;
		console.log("playbackRate+0.2\n");
	};
	// get playbackRate
	document.getElementById("get_playback_rate").onclick=function(){
		console.log("audio.playbackRate: "+audio.playbackRate+"\n");
	};

	// get networkState
	document.getElementById("get_network_state").onclick=function(){
		console.log("audio.networkState: "+audio.networkState+"\n");
	};
	// get readyState
	document.getElementById("get_ready_state").onclick=function(){
		console.log("audio.readyState: "+audio.readyState+"\n");
	};
	// get buffered
	document.getElementById("get_buffered").onclick=function(){
		console.log("audio.buffered:\n");
		var ranges=audio.buffered;
		var n=ranges.length;
		for(var i=0;i<n;i++){
			console.log("("+ranges.start(i)+","+ranges.end(i)+")\n");
		}
	};
	// get seekable
	document.getElementById("get_seekable").onclick=function(){
		console.log("audio.seekable:\n");
		var ranges=audio.seekable;
		var n=ranges.length;
		for(var i=0;i<n;i++){
			console.log("("+ranges.start(i)+","+ranges.end(i)+")\n");
		}
	};
	
	// DOM events
	
	// abort
	audio.addEventListener("abort",function(){
		console.log("event:abort\n");
	});
	// canplay
	audio.addEventListener("canplay",function(){
		console.log("event:canplay\n");
	});
	// canplaythrough
	audio.addEventListener("canplaythrough",function(){
		console.log("event:canplaythrough\n");
	});
	// durationchange
	audio.addEventListener("durationchange",function(){
		console.log("event:durationchange\n");
	});
	// emptied
	audio.addEventListener("emptied",function(){
		console.log("event:emptied\n");
	});
	// ended
	audio.addEventListener("ended",function(){
		console.log("event:ended\n");
	});
	// loadeddata
	audio.addEventListener("loadeddata",function(){
		console.log("event:loadeddata\n");
	});
	// loadedmetadata
	audio.addEventListener("loadedmetadata",function(){
		console.log("event:loadedmetadata\n");
	});
	// loadstart
	audio.addEventListener("loadstart",function(){
		console.log("event:loadstart\n");
	});
	// pause
	audio.addEventListener("pause",function(){
		console.log("event:pause\n");
	});
	// play
	audio.addEventListener("play",function(){
		console.log("event:play\n");
	});
	// playing
	audio.addEventListener("playing",function(){
		console.log("event:playing\n");
	});
	// progress
	audio.addEventListener("progress",function(){
		console.log("event:progress\n");
	});
	// ratechange
	audio.addEventListener("ratechange",function(){
		console.log("event:ratechange\n");
	});
	// seeked
	audio.addEventListener("seeked",function(){
		console.log("event:seeked\n");
	});
	// seeking
	audio.addEventListener("seeking",function(){
		console.log("event:seeking\n");
	});
	// stalled
	audio.addEventListener("stalled",function(){
		console.log("event:stalled\n");
	});
	// suspend
	audio.addEventListener("suspend",function(){
		console.log("event:suspend\n");
	});
	// timeupdate
	audio.addEventListener("timeupdate",function(){
		console.log("event:timeupdate\n");
	});
	// volumechange
	audio.addEventListener("volumechange",function(){
		console.log("event:volumechange\n");
	});
	// waiting
	audio.addEventListener("waiting",function(){
		console.log("event:waiting\n");
	});
};
