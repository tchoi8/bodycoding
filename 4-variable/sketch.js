function setup() {
 createCanvas(500,500);
 

}

function draw() {

background(212)
line(100,0,100,500);
line(200,0,200,500);
line(300,0,300,500);
line(400,0,400,500);

line(0,100,500,100);
line(0,200,500,200);
line(0,300,500,300);
line(0,400,500,400);
 
   
  
  
 
 
  for(i=0;i<=height;i=i+100){ 
     fill(i);
        rect(i,i,100,100);

    }

  
 

 
}