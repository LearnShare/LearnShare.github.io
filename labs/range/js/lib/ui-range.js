var UIRange = (function() {
  function UIRange(config) {
    var self = this;

    if(!config
        || !config.target) {
      return;
    }

    self.config = {
      target: config.target,
      onChange: (config.onChange
          && typeof config.onChange == 'function')
          ? config.onChange
          : null
    };

    var startProportion = config.start
        || 0;
    var endProportion = config.end
        || 0;

    self.seekerLeft = self.config.target
        .getElementsByClassName('seeker')[0];
    self.seekerRight = self.config.target
        .getElementsByClassName('seeker')[1];
    self.range = self.config.target
        .getElementsByClassName('range')[0];

    new Dragable({
      target: self.seekerLeft,
      direction: 'x',
      inRect: true,
      onMove: function(d) {
        self.left = d.x;

        self.seekerMoved();
      }
    });
    new Dragable({
      target: self.seekerRight,
      direction: 'x',
      inRect: true,
      onMove: function(d) {
        self.right = d.x;

        self.seekerMoved();
      }
    });
    new Dragable({
      target: self.range,
      direction: 'x',
      inRect: true,
      onMove: function(d) {
        self.start += d.dx;
        self.end += d.dx;


        self.updatePropotrion();

        self.rangeMoved();
      }
    });

    self.targetRect = self.config.target.getBoundingClientRect();

    self.setProportion(startProportion, endProportion);

    window.addEventListener('resize', function() {
      self.targetRect = self.config.target.getBoundingClientRect();

      self.start = self.targetRect.width
          * self.startProportion;
      self.end = self.targetRect.width
          * self.endProportion;

      self.moveRange();

      self.rangeMoved();
    });
  }

  UIRange.prototype.setProportion = function(start, end) {
    var self = this;

    self.startProportion = start
        || 0;
    self.endProportion = end
        || 0;
    
    var startX = self.targetRect.width
        * self.startProportion;
    var endX = self.targetRect.width
        * self.endProportion;

    self.setRange(startX, endX);
  };

  UIRange.prototype.setRange = function(start, end) {
    var self = this;

    self.start = start
        || 0;
    self.end = end
        || 0;
    self.left = self.start;
    self.right = self.end;

    self.rangeMoved();
    self.moveRange();
  };

  UIRange.prototype.updatePropotrion = function() {
    var self = this;

    self.startProportion = self.start / self.targetRect.width;
    self.endProportion = self.end / self.targetRect.width;

    if(self.config.onChange) {
      self.config.onChange({
        start: self.startProportion,
        end: self.endProportion
      });
    }
  };

  UIRange.prototype.seekerMoved = function() {
    var self = this;

    var min = self.left;
    if(min > self.right) {
      min = self.right;
    }
    var max = self.right;
    if(max < self.left) {
      max = self.left;
    }

    self.start = min;
    self.end = max;

    self.updatePropotrion();

    self.moveRange();
  };
  UIRange.prototype.moveRange = function() {
    var self = this;

    self.range.style.left = self.start + 'px';
    self.range.style.width = (self.end - self.start) + 'px';
  };

  UIRange.prototype.rangeMoved = function() {
    var self = this;

    if(self.left > self.right) {
      self.left = self.end;
      self.right = self.start;
    }else {
      self.left = self.start;
      self.right = self.end;
    }

    self.moveSeekerLeft();
    self.moveSeekerRight();
  };
  UIRange.prototype.moveSeekerLeft = function() {
    var self = this;

    self.seekerLeft.style.left = self.left + 'px';
  };
  UIRange.prototype.moveSeekerRight = function() {
    var self = this;

    self.seekerRight.style.left = self.right + 'px';
  };

  return UIRange;
})();
