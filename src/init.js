$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    
  
  });

  $('.addDancerButton2').on('click', function(event) {

  
    var dancerMakerFunctionName2 = $(this).data('dancer-maker-function-name2');
    var dancerMakerFunction2 = window[dancerMakerFunctionName2];

    var dancer2 = new dancerMakerFunction2(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer2.$node);

  });

  $('.addDancerButton3').on('click', function(event) {

  
    var dancerMakerFunctionName3 = $(this).data('dancer-maker-function-name3');
    var dancerMakerFunction3 = window[dancerMakerFunctionName3];

    var dancer3 = new dancerMakerFunction3(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer3.$node);

  });

});

