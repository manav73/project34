class Hero {
  constructor(x,y,r) {
    var options = {
      
      'friction':1.0,
      'density':1.0
    }
    this.x = x;
    this.y = y;
    this.r = r
    this.body = Bodies.circle(this.x,this.y,this.r/2  ,options);
    this.image = loadImage("images/Superhero-01.png")
   
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push ()
    translate (pos.x,pos.y-100)
    rotate (this.body.angle)
    imageMode(CENTER);
    fill("yellow");
    image(this.image,0, 0, this.r+150, this.r);
    pop ()
  }
};
