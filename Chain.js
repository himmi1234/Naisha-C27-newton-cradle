class rope{
    constructor(body1, body2,offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : body1,
            bodyB : body2,
            //length : 200,
            //stiffness : 0.2,
           // damping : 0,//
            stiffness :0.05,//0.2 is very high stiffness value,check documentation
            length :300,//
            pointB : {x : this.offsetX, y : this.offsetY}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);
        stroke('silver');

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

        
    }
}