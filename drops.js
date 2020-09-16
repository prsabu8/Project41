class Drops {
    constructor(x,y){
        var options ={
            restitution:0.4,
            friction:0.1
        }
      
        this.rain = Bodies.circle(x, y, 10,options);       
        World.add(world, this.rain);
    } 

    update(){
        if (this.rain.position.y > height){
             Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){

        var pos = this.rain.position;
        var angle = this.rain.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, 10,10);
        pop();
    }    
}