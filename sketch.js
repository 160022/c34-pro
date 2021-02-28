var
dog,dogImg,dogImg1;

var database;
var foodS,foodStock;
function preload(){
dogImg=loadImage(&quot;Images/Dog.png&quot;);
dogImg1=loadImage(&quot;Images/happy dog.png&quot;);
}
//Function to set initial environment
function setup() {
database=firebase.database();
createCanvas(500,500);
dog=createSprite(250,300,150,150);
dog.addImage(dogImg);
dog.scale=0.15;
foodStock=database.ref(&#39;Food&#39;);
foodStock.on(&quot;value&quot;,readStock);
textSize(20);
}
// function to display UI
function draw() {
background(46,139,87);
if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(dogImg1);
}
drawSprites();
fill(255,255,254);
stroke(&quot;black&quot;);
text(&quot;Food remaining : &quot;+foodS,170,200);
textSize(13);
text(&quot;Note: Press UP_ARROW Key To Feed Drago
Milk!&quot;,130,10,300,20);
}
//Function to read values from DB
function readStock(data){
foodS=data.val();
}
//Function to write values in DB
function writeStock(x){
if(x&lt;=0){
x=0;
}
else{
x=x-1;
}
database.ref(39, 39)
update({
Food:x
})
}