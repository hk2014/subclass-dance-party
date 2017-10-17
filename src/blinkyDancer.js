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

var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this.blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.step();
  //var oldStep = Dancer.step;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
//NOTE EXPLAIN SETTIMEOUT HERE
BlinkyDancer.prototype.step = function() {
  var context = this;
  console.log('context: ', context);
  setTimeout(function(){
    context.step();
  }, this.timeBetweenSteps);
  this.$node.fadeToggle();
};

// BlinkyDancer.prototype.toggle = function() {

// };