
var child , ground 
var childImage
var childJumping
var childRunning
var level = 0 
var FactoryImage


function preload()
{
	childImage = loadImage("Child.png")
	// childJumping = loadAnimation("childJumping.png", "child.png")
	childRunning = loadAnimation("ChildWalking2.png" , "ChildWalking1.png")
	backgroundImage = loadImage("yes.jpg")
	// groundImage = loadImage("ground.png")
	boxImage = loadImage("box.png")
	FactoryImage = loadImage("factory.jpg")
}

function setup() {
	createCanvas(1100 , 800);

	

  
	//Create the Bodies Here.
    



// child = createSprite(200,200)
// ground = createSprite(1000,680,1500,20)
// ground.velocityX = -3
// ground.addImage(groundImage)

invisGround = createSprite(1000,700,1800,20)
invisGround.visible = false


child = createSprite(310,680,20,40)
child.addImage(childImage)
child.scale = .2
child.debug = true


 
shovel = createSprite(700,660,10,10)
shovel.addImage(boxImage)
shovel.scale = .4
shovel.debug  = true
shovel.setCollider("rectangle", 0,0, 200,200)


wall = createSprite(0950,490,20,400)
roof = createSprite(1230,70,580,20)
slab = createSprite(950,290,50,20)


// slab1

	

	
  
}


function draw() {
	background(backgroundImage);
	rectMode(CENTER);

// if(ground.x<1000){
//   ground.x = ground.width/2
// }





	if(keyWentDown("RIGHT_ARROW")){
		child.velocityX = 10
		child.addAnimation("Running", childRunning)
		 child.changeAnimation("Running")

	}
	if(keyWentDown("LEFT_ARROW")){
		child.velocityX = -7
		child.addAnimation("Running", childRunning)
		 child.changeAnimation("Running")
	}



    if(keyWentUp("RIGHT_ARROW")){
      child.velocityX = 0
	  child.addImage = childImage 
	}
	if(keyDown("SPACE")&&child.y>550){
		child.velocityY = -2.8
		// child.addAnimation("jumping", childJumping)
		// child.changeAnimation("jumping")
	}


	// if(child.isTouching(shovel)&&level === 0 ){



		
if(shovel.x-child.x<child.width/4+shovel.width/4){

	textSize(39);
text('System : Press X to Continue',750 , 300);
fill(0, 102, 153);

if(keyDown("x")){
shovel.velocityX = 1
}
else{
	shovel.velocityX = 0 

}}

console.log(child.x)
console.log(shovel.x)
console.log(child.width)
console.log(shovel.width)



// if(child.isTouching(shovel)&&(keyDown("X"))){
	// shovel.velocityX = 1

// }
// else{
	// shovel.velocityX = 0 
// }









if(child.x>1100){
	shovel.destroy()
	wall.destroy()
	slab.destroy()
	roof.destroy()
	child.x = 3100
    level = 1

	if(child.x>1100){
		shovel.destroy()
	wall.destroy()
	slab.destroy()
	roof.destroy()
	child.x = 3100
	}


    button = createSprite(800,680,40,40)
	if(child.isTouching(button)&&keyDown(74)){
		hole = createSprite(600,680,60,60)
		

	}

	
	// if(child.isTouching(button)){
		// textSize(39);
// text('I wonder what happenes with this lever ',750 , 300);
// fill(0, 102, 153);
	// }
}


	
	
   











	child.velocityY +=.1
    child.collide(invisGround)
	child.collide(wall)
	child.collide(slab)
	child.collide(shovel)
	


    















	
	
	
	
	

  
	
	drawSprites ();
  }
  
  


