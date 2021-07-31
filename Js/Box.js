class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            density:1
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        Body.setMass(this.body,2);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}