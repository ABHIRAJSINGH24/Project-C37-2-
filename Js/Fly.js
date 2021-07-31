class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:0.04
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world,this.fly);
    }
    display(){
        var posA = this.fly.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}