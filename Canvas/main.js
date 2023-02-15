window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x=250;
    var y=150;
    var coinx=Math.random()*(600-50);
    var coiny=Math.random()*(400-50);

    var t=Date.now();
    let speed=200;
    let dir=0;
    let score=0;



    let up=document.getElementById('up');
    let down=document.getElementById('down');
    let left=document.getElementById('left');
    let right=document.getElementById('right');
    let yourscore=document.getElementById('score');
    let speedup=document.getElementById('speedup');
    let slowndown=document.getElementById('slowdown');


    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 4;}
    down.onmouseup = function() { dir = 3;}
    left.onmouseup = function() { dir = 2;}
    right.onmouseup = function() { dir = 1;}

    up.ontouchend = function() { dir = 4;}
    down.ontouchend = function() { dir = 3;}
    left.ontouchend = function() { dir = 2;}
    right.ontouchend = function() { dir = 1;}



   


    function draw(){

        var timePased=((Date.now()-t)/1000);
        var fps=Math.round(1/timePased);
        t=Date.now();
        context.clearRect(0,0,600,400);

        context.font="20px Arial";
        context.fillStyle="black";
        yourscore.innerText="Score: "+score;
    
        
        context.beginPath();
        context.rect(x,y,100,100);
        context.fillStyle="black";
        context.fill();

        context.beginPath();
        context.rect(coinx,coiny,50,50);
        context.fillStyle="green";
        context.fill();

        if (dir==1) {
            if (x+100<600) {
                x+=(speed*timePased);
                
            }
            
            
        }
        else if (dir==2) {
            if (x>0) {
                x-=(speed*timePased);                
                
            }
            
        }
        else if (dir==3) {
            if (y+100<400) {
                y+=(speed*timePased);                
            }
            
        }
        else if (dir==4) {
            if (y>0) {
             y-=(speed*timePased);
                
            }
            
        }

        if (coinx<=x+100&&x<=coinx+50&&coiny<=y+100&&y<=coiny+50       
            ) {
            
            score++;
            coinx = Math.random() * (600-50);
            coiny = Math.random() * (400-50);

        }
        

        speedup.onclick=function speedup(){
            speed=speed+20;
            console.log(speed);
        }

        slowndown.onclick=function speedup(){
            speed=speed-20;
            console.log(speed);
        }
      
             
   

        window.requestAnimationFrame(draw);
        
                }


    
    draw();

}







