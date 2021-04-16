var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//@function placeObjects() [Function:Placements:Objects] : places the objects
//@param location [object] {restricted : Must follow {x:#,y:#}} : location at which the object will be placed
//@param style [string] {restricted: colors} : color of said object
function placeObjects(location,style){
       ctx.beginPath();//begins to draw ball on the canvas
       if (style !== undefined) {//style exists
        ctx.strokeStyle = style;//set to style color
       }
       else if (style == undefined) {//style does not exist
        ctx.strokeStyle = "black";//default black
       }
       
ctx.rect(location.x, location.y, 60, 60);//draw the box

  ctx.stroke();//end draw
//ctx.drawImage(objectImage,location.x,location.y,width,height);//this will be used soon
}
