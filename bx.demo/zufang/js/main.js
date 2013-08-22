window.onload=function(){
	initMap();
	var btn=document.getElementById("current-local");
	btn.addEventListener("click",getLocation);
}

function initMap(){
	var map=new BMap.Map("bmap");
	map.centerAndZoom(new BMap.Point(121.235, 31.352), 11);
	map.addControl(new BMap.NavigationControl());
	map.addControl(new BMap.ScaleControl());
	map.addControl(new BMap.OverviewMapControl());
	map.enableScrollWheelZoom();
	map.setCurrentCity("上海");
}

function getLocation(){
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position.coords.latitude+","+position.coords.longitude);
	});
}