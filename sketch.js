var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var drops =[];
  var umbrella;
  var maxDrops=100;
  var thunder_img;

function preload(){
    thunder_img = loadImage("thunder.png");
}

function setup(){
    createCanvas(650, 750);    
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(width/2,height,width,20);

    for (var i = 0; i <=maxDrops; i++) {
        drops.push(new Drops(random(0,400), random(0,400)));
      }
   
}

function draw(){
    background("black");
    Engine.update(engine);

    umbrella.display();

    for (var i = 0; i <=maxDrops; i++) {
        drops[i].display();
      }

      drops.update();

      if (frameCount % 10 === 0) {
        var thunder = createSprite(600,120,40,10);
        thunder.addImage(thunder_img);
        thunder.scale = 0.5;
      }
} 