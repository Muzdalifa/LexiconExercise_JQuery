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
// Create a jQuery script that hides an element (text element or an image, for
// instance) when it is clicked, and reveals it again when another element is clicked.
// Required Features:
// • An element that hides itself when clicked.
// • An element that can be clicked to bring the other element back.
// • A button that can be clicked to toggle the visibility of an element (click
// once to hide, and again to  hide, and so on).
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

// Exercise 3 – Show / Hide
// Create a jQuery script that changes the styling rules for an element
// when a button is pressed. At least three different buttons should be used.
// Required Features:
// • An element whose CSS rules can be manipulated (a text element etc.).
// • At least three elements or buttons that changes the styling of the first element.
// o One that can add styles to the element.
// o One that can remove styles that already exist on the element.
// o One that can toggle style rules for the element.
// Code Requirements:
// • Use jQuery’s methods to change the styling rules.
// Subjects:
// • Changing CSS styling rules through jQuery.

$(document).ready(function(){
  $("#btnRedEx3").click(function()
  {
    changeColor();
  });
  $("#btnTurnEx3").click(function(){
    rotateText();
  });
  $("#btnRemoveEx3").click(function(){
    $("#ex3").removeAttr("style");
  });
});

function changeColor(){

  if (document.getElementById("btnRedEx3").innerHTML === "Change to red") {
    $("#ex3").css({"color":"red", "font-size":"30px"});
    document.getElementById("btnRedEx3").innerHTML = "Change to Blue";
  }
  else{
    document.getElementById("btnRedEx3").innerHTML ="Change to red";
    $("#ex3").css({"color":"blue", "font-size":"30px"});
  }
}

function rotateText(){
  if (document.getElementById("btnTurnEx3").innerHTML === "Turn paragragh"){
    $("#ex3").css({"transform": "rotateX(180deg)", transition: "2s"})
    document.getElementById("btnTurnEx3").innerHTML = "Return back";
  }  
  else{    
    $("#ex3").css({"transform": "rotateX(0deg)", transition: "5s"});
    (document.getElementById("btnTurnEx3").innerHTML === "Turn paragragh")
  }  
}

// Exercise 4 – Key Press Listener
// Create a jQuery script that listens for a key press on the keyboard, and prints
// to an element on the page, which key(s) is being held down, or was pressed. 
// Required Features:
// • An element that displays which keys are being pressed, and which one was last pressed 
// when none are held down.
// • The normal functionality of the key should be suppressed – if you press the down key, for 
// instance, the page should not scroll down, even if able to do so. 
// Code Requirements:
// • Use jQuery to create the event listener and handle the output.
// Subjects:
// • Key Listeners through jQuery
$(document).ready(function(){

  $(window).on("keydown", function(e) {
    writePressedKey(e);
  });
  })

function writePressedKey(e){
  e.preventDefault();
  $("#ex4").html("You press key : " + e.keyCode);
}