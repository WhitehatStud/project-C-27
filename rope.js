class roof {
    constructor(body1, body2,OffsetX,OffsetY) {
    var options={
        bodyA=body1,
        bodyB=body2,
        pointB={x:this.OffsetX,y:this.OffsetY}
    }
      this.rope = matter.constraint.create(options);
      
      
      World.add(world, this.body);
    }
    display(){
     var point1=this.rope.bodyA.position;
     var point2=this.rope.bodyB.position;

     strokeWeight(2);

     var Anchor1X=point1.x;
     var Anchor1Y=point1.y;

     var Anchor2X=point2.x+this.OffsetX;
     var Anchor2Y=point1.y+this.OffsetY;

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
  };
  