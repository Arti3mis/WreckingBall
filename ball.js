                class ball{
            constructor(x,y,w,h,angle){

    var opt={frictionAir:0.005,
            density:1.0
            }
    this.body=Bodies.rectangle(x,y,w,h,opt);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
            
            }
    display(){
var angle = this.body.angle;
var pos = this.body.position;
push()
translate(pos.x,pos.y);
rotate(angle);

ellipseMode(RADIUS);
strokeWeight(2);
stroke("red")
fill(255,255,255);
ellipse(0,0,this.w,this.h);
 
pop()

            }
            }