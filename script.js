document.getElementById("door9").onmousedown = function() 
{   $("#door9").css('background-image', 'url("images/door9open.png")'); 
    var inmyzone = new Audio('definitelyin.mp3');
    inmyzone.play();
    setTimeout(function() {
    alert("Don't mess with Ye"); 
    alert("Play again?");
}, 100);
    setTimeout(function() {
   window.location.reload(1); }, 500);
};