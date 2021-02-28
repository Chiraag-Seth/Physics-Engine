class Wall{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,300,15,600,options);
        this.width = 15;
        this.height = 600;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };