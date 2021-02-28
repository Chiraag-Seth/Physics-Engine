class Floor{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400,y,800,15,options);
        this.width = 800;
        this.height = 15;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };