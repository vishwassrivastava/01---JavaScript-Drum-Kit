var numberofbuttons=document.querySelectorAll(".drum" ).length;
for(var i=0;i<numberofbuttons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
    var buttonInnerHtml= this.innerHtml;

   makesound(buttonInnerHtml);


  });
}
//press key
document.addEventListener("keypress",function(event)
{
makesound(event.key);
});

function makesound(key)
{
switch (key) {
  case "a":
  var clap= new Audio("sounds/clap.wav");
  clap.play();
    break;

    case "s":
    var snare=new Audio("sounds/hihat.wav");
    snare.play();
      break;

    case "d":
    var kick=new Audio("sounds/kick.wav");
    kick.play();
      break;

    case "f":
    var openhat=new Audio("sounds/openhat.wav");
    openhat.play();
      break;

    case "g":
    var boom=new Audio("sounds/boom.wav");
    boom.play();
      break;

    case "h":
    var ride=new Audio("sounds/ride.wav");
    ride.play();
      break;

    case "j":
    var snare=new Audio("sounds/snare.wav");
    snare.play();
      break;

    case "k":
    var tom=new Audio("sounds/tom.wav");
    tom.play();
      break;

    case "l":
    var tink=new Audio("sounds/tink.wav");
    tink.play();
      break;

    default:console.log("rr");
}
};
