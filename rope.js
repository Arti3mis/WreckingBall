        class rope{
        constructor(bodyA,pointB){
    var opt={bodyA:bodyA,pointB:pointB,stiffness:1.2,length:300}
    this.body=Constraint.create(opt)
    this.pointB=pointB;
    World.add(world,this.body);

        }
    
        display(){
    var pos=this.body.bodyA.position
    push();                    
    line(this.pointB.x,this.pointB.y,pos.x,pos.y);  
    pop();
        }  
        
        }