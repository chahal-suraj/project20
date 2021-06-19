var tom,tomImg;
var jerry,jerryImg;
var garden,gardenImg;

function preload() {
  tomImg=loadImage("cat1.png");
  jerryImg=loadImage("mouse1.png");
  gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
   tom=createSprite(50,40);
   tom.addImg(tomImg)
   jerry=createSprite(20,10);
   jerry.addImg(jerryImg);
   garden=createSprite(1000,800)
   garden.addImage(gardenImg)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
	tom.addAnimation("cat2.png",tomImg);
	tom.changAnimation("cat2.png");
}
    drawSprites();

tom.display();
jerry.display();
garden.display();
}


function keyPressed(){
if(keydown("space")){
	tom.x=tom.x+20
	tom=changAnimation("cat2.png",tomImg);
	tom.frameDelay=25
}
  


}
