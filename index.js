// Exercise 1 – Change Listener
// Write a jQuery script to append a text paragraph with a text message to an
// element, when an input field on the page is changed. 
// Required Features:
// • An input field, of any type.
// • An empty element where the message will be placed. 
// Code Requirements:
// • A listener should be created for the input field that triggers the creation
//   of the paragraph.
// • The paragraph containing the message should not exist until the event is triggered.
// • The code must make use of jQuery’s event handling commands
// • The code must use jQuery’s selectors rather than the normal JavaScript ones.
// Subjects:
// • Change Listeners using jQuery
$(document).ready(
  function() {
  $("#inputValue1").keyup(function(){
    $("#ex1").text($(this).val());
  });
  }
);

// Exercise 2 – Show / Hide
// Create a jQuery script that hides an element (text element or an image, for instance) when it is clicked, 
// and reveals it again when another element is clicked.
// Required Features:
// • An element that hides itself when clicked.
// • An element that can be clicked to bring the other element back.
// • A button that can be clicked to toggle the visibility of an element (click once to hide, and again to 
// hide, and so on).
// Code Requirements:
// • Use jQuery’s methods to show and hide the elements.
// Subjects:
// • Showing and hiding elements using jQuery
$(document).ready(
  function () {
    $("#btnHideEx2").click(function() {
      $("#ex2").hide(1000);
    });
    $("#btnShowEx2").click(function(){
      $("#ex2").show(1000);
    })
  }
);

