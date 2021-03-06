class Square{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
        }
        this.body = Bodies.rectangle(200,400,25,25, options);
        this.height = 25;
        this.width = 25;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        fill("brown");
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}