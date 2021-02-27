class Rubber {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 40, [options], [40]);
      this.radius = 40;
       
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("black");
      strokeWeight(4);
      fill("darkBlue");
      ellipse(0, 0,40 , 40);
      pop();
    }
  };
  