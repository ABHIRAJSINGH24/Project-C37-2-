class Monster{
    constructor(x,y,radius){
        var options={
            restitution:0,
            density:3
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Image/Monster-01.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius)/2.7,options);
        Body.setMass(this.body,2);
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