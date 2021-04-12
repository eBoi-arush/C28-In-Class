class Slingshot{
  constructor(body1, point2){
    var slingshotOptions = {
      bodyA: body1,
      pointB: point2,
      length: 10,
      stiffness: 0.01
    }
    this.sling = Constraint.create(slingshotOptions);

    World.add(world, this.sling);
  }

  display(){
    if(this.sling.bodyA != null){
      strokeWeight(5);
      line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y)
    }    
  }

  fly(){
    this.sling.bodyA = null;
  }
}