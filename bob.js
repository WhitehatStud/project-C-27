class Bob {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0,
          'density':7.8
      }

      this.body = Bodies.circle(x, y, 25, options);
      World.add(world, this.body);

      console.log(this.body)
    }
    display(){
      Push();
      ellipseMode(CENTER);
      fill("pink");
      ellipse(this.body.position.x, this.body.position.y, 25,25);
      Pop();
    }
  };
  