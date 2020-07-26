 class paper
 {
     constructor()
     {
         var options={
             'isStatic':false,
             "restitution":0.3,
             'friction':0.5,
             'density':1.2
         }
    this.image=loadImage("sprites/paper.png");
    this.body=Bodies.circle(100,600,70,options);
    World.add(world, this.body);
     }
     display()
     {
         var pos=this.body.position;
         ellipseMode(RADIUS);
         ellipse(pos.x,pos.y,this.radius);
         imageMode(CENTER);
         this.image(this.image,0,0, this.radius);
     }
 }