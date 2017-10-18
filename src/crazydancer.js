// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = Dancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var CrazyDancer = function(top, left, timeBetweenSteps){
  // this.blinkyDancer = Dancer(top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer3"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
  // this.step();
  //var oldStep = Dancer.step;
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;
//NOTE EXPLAIN SETTIMEOUT HERE
CrazyDancer.prototype.step = function() {
  var context = this;

  //console.log(this.timeBetweenSteps);  

  setTimeout(function() {
    context.step();
  }, this.timeBetweenSteps);
   
  this.$node.animate({ opacity: 0.25, left: "+=800"}, 5000, function(){});
};

// SlidingDancer.prototype.toggle = function() {

// };