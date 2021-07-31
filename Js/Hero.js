class Hero{
    constructor(x,y,radius){
        var options={
            density:1,
            frictionAir:1
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Image/Superhero-02.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius-10)/2,options);
        Body.setMass(this.body,3);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}