//Classes for the map mainly for objects

var objects = [];
//@class Object : class to form objects
//@Constructor
////@param location [object] {Restricted : {x:#,y:#}} : location of the top left corner of the object
class Object{
    constructor(location, width,height){
        this.location = location;
        this.width = width;
        this.height = height;
    }
}


//@function formObject : makes a new object
//@param location [object] {restricted : {x:#,y:#}} : location of the object
//@param width/height [integer] : Width/height of the object 
function formObject(location, width, height) {
    var newObject = new Object(location,width,height);//makes a new one
    objects.push(newObject);//object push to be able to catelog them 
    return newObject;//return so that it logs 
}
//Mainly if we end up needing this