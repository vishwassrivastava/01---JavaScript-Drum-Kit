# 01---JavaScript-Drum-Kit
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My drummer kit</title>
    <link rel="stylesheet" href="C:\Users\Vishwas Srivastava\Downloads\01 - JavaScript Drum Kit\style.css">

  </head>
  <body>


      <button  class="a drum" type="button" ><h2 class="white">a</h2>
     </button>

      <button   class="s drum" type="button" name="button" class="white"><h2 class="white">s</h2>
    </button>
      <button  class="d drum" type="button" name="button"><h2 class="white">d</h2>
        </button>
      <button  class="f drum" type="button" name="button"><h2 class="white">f</h2>
       </button>
      <button  class="g drum" type="button" name="button"><h2 class="white">g</h2>
    </button>
      <button  class="h drum" type="button" name="button"><h2 class="white">h</h2>
      </button>
      <button class="j drum"  type="button" name="button">  <h2 class="white">j</h2>
        </button>
      <button  class="k drum"  type="button" name="button"><h2 class="white">k</h2>
    </button>
      <button  class="l drum" type="button" name="button"><h2 class="white">l</h2>
    </button>
<script src="index.js" charset="utf-8"></script>
  </body>
</html>
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
body
{
  background-image:url("background.jpg");

}
.a
{
  text-align:center;
  position: absolute;
  top: 50%;
  left :5rem;
  width: 8rem;
  background-color: black;

  color: yellow;
border-color: black;
}
.s
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:15rem;
  width: 8rem;
  background-color: black;
  color: yellow;
border-color: black;
}
.d
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:25rem;
      width: 8rem;
      background-color: black;

      color: yellow;
border-color: black;
}
.f
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:35rem;
      width: 8rem;
      background-color: black;

      color: yellow;
border-color: black;
}
.g
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:45rem;
    width: 8rem;
    background-color: black;

    color: yellow;
border-color: black;
}
.h
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:55rem;
  width: 8rem;
  background-color: black;

  color: yellow;
border-color: black;
}
.j
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:65rem;
  width: 8rem;
  background-color: black;

  color: yellow;
border-color: black;
}
.k
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:75rem;
  width: 8rem;
  background-color: black;

  color: yellow;
border-color:black ;


}
.l
{
  text-align:center;
  position: absolute;
  top: 50%;
  left:85rem;
  width: 8rem;
  background-color: black;

  color: yellow;
border-color: black;
}
.white
{
  color: white;
}
.a:hover,.s:hover,.d:hover,.f:hover,.g:hover,.h:hover,.k:hover,.l:hover,.j:hover{
  border-color: red;
  color: red;
}
