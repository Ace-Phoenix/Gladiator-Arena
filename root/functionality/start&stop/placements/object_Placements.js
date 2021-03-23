var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//takes the object Class and places the objects 
function placeObjects(location,width,height){
       ctx.beginPath();//begins to place objects based on location width and height
ctx.rect(location.x, location.y, 30, 30);
  ctx.stroke();


//ctx.drawImage(objectImage,location.x,location.y,width,height);
}
