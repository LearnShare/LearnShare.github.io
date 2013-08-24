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
	var menu=new BMap.ContextMenu();
	var menuItem={
		text:'以此为中心',
		callback: function(){
			mapDrawCircle(_point.x,_point.y,2000);
			mapDrawMark(_point.x,_point.y);
		}
	}
	menu.addItem(new BMap.MenuItem(menuItem.text,menuItem.callback,100));
	map.addContextMenu(menu);
	map.addEventListener("rightclick", mapGetClickedPoint);

	window._map=map;
}

function mapGetClickedPoint(e){
	window._point={
		x: e.point.lat,
		y: e.point.lng
	}
	console.log(_point.x+" "+_point.y);
}

function mapMoveTo(a,b){
	var center=new BMap.Point(b, a); 
	_map.centerAndZoom(center, 13);
}

function mapDrawCircle(a,b,r){
	var center=new BMap.Point(b, a);
	if(!window._circle){
		window._circle=new BMap.Circle(center,r);
	}else{
		window._circle.setCenter(center);
	}
	_map.addOverlay(window._circle);
}

function mapDrawMark(a,b){
	var center=new BMap.Point(b, a);
	if(!window._mark){
		window._mark=new BMap.Marker(center);
	}else{
		window._mark.setPosition(center);
	}
	_map.addOverlay(window._mark);
}

function getLocation(){
	navigator.geolocation.getCurrentPosition(function(position){
		var a=position.coords.latitude,
			b=position.coords.longitude;
		console.log(a+","+b);
		console.log("over");
		mapMoveTo(a,b);
		mapDrawCircle(a,b,2000);
			mapDrawMark(a,b);
	},
	function(){
		console.log("failed");
	});
}