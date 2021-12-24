var seed,germination,sprout,seedling,plant,plantwithfruit,fruitwithseeds
var c=0

function preload(){

}
function setup(){
createCanvas(600,600)
seed=createSprite(random(50,550),random(200,400),20,40)
germination=createSprite(random(50,550),random(200,400),20,20)
sprout=createSprite(random(50,550),random(200,400),20,20)
seedling=createSprite(random(50,550),random(200,400),20,20)
plant=createSprite(random(50,550),random(200,400),20,20)
plantwithfruit=createSprite(random(50,550),random(200,400),20,20)
fruitwithseeds=createSprite(random(50,550),random(200,400),20,20)

}
function draw(){
background('black')
drawSprites()
if(seed.x===germination.x||seed.x===sprout.x||seed.x===seedling.x||seed.x===plant.x
||seed.x===plantwithfruit.x||seed.x===fruitwithseeds.x||
seed.y===germination.y||seed.y===sprout.y||seed.y===seedling.y||seed.y===plant.y
||seed.y===plantwithfruit.y||seed.y===fruitwithseeds.y
||germination.x===sprout.x||germination.x===seedling.x||germination.x===plant.x||germination.x===plantwithfruit.x||germination.x===fruitwithseeds.x||
germination.y===sprout.y||germination.y===seedling.y||germination.y===plant.y||germination.y===plantwithfruit.y||germination.y===fruitwithseeds.y||
sprout.x===seedling.x||sprout.x===plant.x||sprout.x===plantwithfruit.x||sprout.x===fruitwithseeds.x||sprout.y===seedling.y||sprout.y===plant.y||sprout.y===plantwithfruit.y||
sprout.y===fruitwithseeds.y||seedling.x===plant.x||seedling.x===plantwithfruit.x||seedling.x===fruitwithseeds.x||seedling.y===plant.y||seedling.y===plantwithfruit.y||
seedling.y===fruitwithseeds.y||plant.x===plantwithfruit.x||plant.x===fruitwithseeds.x||plant.y===plant.y||plant.y===plantwithfruit.y||plant.y===fruitwithseeds.y||
plantwithfruit.x===fruitwithseeds.x||plantwithfruit.y===fruitwithseeds.y) {
seed.x=random(50,550)
seed.y=random(200,400)
germination.x=random(50,550)
germination.y=random(200,400)
sprout.x=random(50,550)
sprout.y=random(200,400)
seedling.x=random(50,550)
seedling.y=random(200,400)
plant.x=random(50,550)
plant.y=random(200,400)
plantwithfruit.x=random(50,550)
plantwithfruit.y=random(200,400)
fruitwithseeds.x=random(50,550)
fruitwithseeds.y=random(200,400)
}
/*if(mousePressedOver(seed)){
    c=1
    fill("pink")
    text("you got it",300,300)
    
}
else{
    fill("white")
    text("oh no",300,300)
}*/
}
