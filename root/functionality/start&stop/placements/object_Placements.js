var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//takes the object Class and places the objects 
function placeObjects(location,style){
       ctx.beginPath();//begins to draw ball on the canvas
       if (style !== undefined) {
        ctx.strokeStyle = style;
       }
       else if (style == undefined) {
        ctx.strokeStyle = "black";
       }
       
ctx.rect(location.x, location.y, 30, 30);

  ctx.stroke();


//ctx.drawImage(objectImage,location.x,location.y,width,height);
}
