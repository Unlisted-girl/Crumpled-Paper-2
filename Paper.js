class Paper{
    constructor (x,y,radius){
        var options={
            isStatic: false,
            restitution:0.3,
            friction: 0.5,
            density: 0.7
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.image = loadImage("Images/paperBall.png");
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       // var posY = this.body.position.y;
       // var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        //rotate(angle);
       //angleMode(RADIANS);
        imageMode(CENTER);
        fill("white");
        image(this.image,0,0, this.radius);
        pop();
    }
}