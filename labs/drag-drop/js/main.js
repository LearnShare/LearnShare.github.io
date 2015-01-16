$(document).ready(function(){
	new DragDrop("#list");
});

function DragDrop(target){
	return this.init(target);
}

DragDrop.prototype = {
	// init
	init: function(target){
		var self = this;

		self.target = target;

		self.moveItem = 0;

		var drags = document.querySelectorAll(self.target + " li a[dragable]");
		var parent = document.querySelectorAll(self.target)[0];

		for(var i = 0, len = drags.length; i < len; i++){
			drags[i].addEventListener("dragstart", function(e){
				self.moveItem = e.target.getAttribute("data-index");
			});
		}

		self.insertBefore = 0;

		parent.addEventListener("dragover", function(e){
			e.preventDefault();
			var pt = parent.offsetTop,
				ey = e.pageY;

			self.insertBefore = parseInt((ey - pt) / 34);
		});
		parent.addEventListener("dragleave", function(e){
			e.preventDefault();
		});
		parent.addEventListener("drop", function(e){
			console.log("move "
				+ self.moveItem
				+ " before "
				+ self.insertBefore);
		});
	}
};