var dog,happydog;
databse;
foodS,foodstock;

function preload()
{
	dog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  
  foodstock = database.ref("food");
  foodstock.on("value",readStock);

  var doghappy = loadImage("images/dogImg1.png")
  
}


function draw() {  
  background("46, 138, 87")

  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS);
    dog.addImage(dogHappy)
  }

  drawSprites();
  
  fill(green)
  textSize("20")
  Text("food = 0");

  Text("Note:PRESS UP ARROW KEY DO FEED THE DOG......./")


}



