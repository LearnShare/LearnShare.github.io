$(document).ready(function(){
	console.log("ready");
	$("#main .slider").gallery({
		gallery: ".gallery",
		pagination: ".pagination",
		prev: ".prev",
		next: ".next"
	});
	$("#travel").gallery({
		gallery: ".gallery",
		pagination: ".pagination",
		prev: ".prev",
		next: ".next"
	});
	$("#experience").gallery({
		gallery: ".gallery",
		pagination: ".pagination",
		prev: ".prev",
		next: ".next"
	});
	$("#picture").gallery({
		gallery: ".gallery",
		pagination: ".pagination",
		prev: ".prev",
		next: ".next"
	});
});