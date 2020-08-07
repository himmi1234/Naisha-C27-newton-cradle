class bob {
    constructor(x,y){
        var options= {
            isStatic: false,
            restitution: 1.2,//
            friction: 0.2,//
            density:4,//
            //isStatic:true
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 60;//the radius of the circle is 30, then why did you take 120 here??

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill('aquamarine');
        ellipse(pos.x,pos.y,this.radius,this.radius);//check documentation for ellipse
        //3rd argument is width = 2*radius

    }
}