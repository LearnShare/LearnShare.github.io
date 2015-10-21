var Dragable = (function() {
  function Dragable(config) {
    var self = this;

    if(!config
        || !config.target) {
      return;
    }

    self.config = {
      target: config.target,
      parent: config.parent
          || config.target.parentNode,
      direction: config.direction
          || '',
      inRect: config.inRect
          || false,
      onMove: (config.onMove
          && typeof config.onMove == 'function')
          ? config.onMove
          : null
    };

    self.mousedown = false;
    self.point = {
      x: 0,
      y: 0
    };

    self.addEventListeners();
  }

  Dragable.prototype.addEventListeners = function() {
    var self = this;

    // mousedown
    self.config.target.addEventListener('mousedown', function(e) {
      self.mousedown = true;
      self.point = {
        x: e.screenX,
        y: e.screenY
      };
    }, false);
    // mousemove
    window.addEventListener('mousemove', function(e) {
      if(self.mousedown) {
        var dx = e.screenX - self.point.x,
            dy = e.screenY - self.point.y;

        self.move(dx, dy);
        // self.move(e.movementX, e.movementY);

        self.point = {
          x: e.screenX,
          y: e.screenY
        };
      }
    }, false);
    // mouseup
    window.addEventListener('mouseup', function(e) {
      self.mousedown = false;
    }, false);
    // mouseout
    self.config.target.addEventListener('mouseout', function(e) {
      // self.mousedown = false;
    }, false);
  };

  Dragable.prototype.move = function(dx, dy) {
    var self = this;

    self.targetRect = self.config.target.getBoundingClientRect();
    self.parentRect = self.config.parent.getBoundingClientRect();

    var x = dx,
        y = dy;

    if(self.config.direction == 'x') {
      y = 0;
    }else if(self.config.direction == 'y') {
      x = 0;
    }

    var left = self.config.target.offsetLeft
        || 0,
        top = self.config.target.offsetTop
        || 0;

    var leftBack = parseInt(left),
        topBack = parseInt(top);

    left = left + x;
    top = top + y;

    // rect check
    if(self.config.inRect) {
      // left
      if(self.targetRect.width
          + left
          > self.parentRect.width) {
        left = self.parentRect.width
            - self.targetRect.width;
      }
      if(left < 0) {
        left = 0;
      }
      // top
      if(self.targetRect.height
          + top
          > self.parentRect.height) {
        top = self.parentRect.height
            - self.targetRect.height;
      }
      if(top < 0) {
        top = 0;
      }
    }

    self.config.target.style.left = left + 'px';
    self.config.target.style.top = top + 'px';

    var xMove = left - leftBack,
        yMove = top - topBack;
        
    if(self.config.onMove
        && (xMove
          || yMove)) {
      self.config.onMove({
        x: left,
        maxX: self.parentRect.width
            - self.targetRect.width,
        dx: xMove,
        y: top,
        maxY: self.parentRect.height
            - self.targetRect.height,
        dy: yMove
      });
    }
  };

  return Dragable;
})();
