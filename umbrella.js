class Umbrella {
    constructor(x,y){
        this.dustbinWidth=450;
        this.dustbinHeight=600;
        
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 10,options);       
        this.image=loadImage("boy.png");
        World.add(world, this.body);
    }

	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}    
}