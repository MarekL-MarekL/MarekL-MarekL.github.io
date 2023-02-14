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
        // context.fillText("Score:"+score,10,20);
        yourscore.innerText="Score: "+score;
    
        
        context.beginPath();
        context.rect(x,y,100,100);
        context.fillStyle="red";
        context.fill();

        context.beginPath();
        context.rect(coinx,coiny,50,50);
        context.fillStyle="orange";
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

       
      
        
        // if () {
        //     score++;
        //     coinx = Math.random() * (600-50);
        //     coiny = Math.random() * (400-50);
        // }


        // x=x+dir*(speed*timePased);

        // if (x>=500||x<=0) {
        //     dir=dir*-1;
            
        // }

        window.requestAnimationFrame(draw);
        
            
        }


    
    draw();

}








// function main(){
//     var year=1980;

//     console.log(calcCent(year));
   
// }


// function calcCent(year){
//     return Math.ceil(year/100)
// }

// main();

// var prices= [1,2,2,4,7,8,9];
// var newPrices=prices.map(myFunction)
// function myFunction(x){
//     return x*2
// }
// console.log(newPrices);
// var num=0;
// function next() {
//     var slider=document.getElementById('numer');
//     num++
    
// }


// next();
// console.log(num);

// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;  // same variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }
// varTest();

// // function letTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;  // different variable
//         console.log(x);  // 2
//     }
//     console.log(x);  // 1
// }

// letTest();

// const obj1 = {
//     a: 0,
//     b: 2,
//     c: 4
//   };
//   const obj2 = Object.assign({c: 5, d: 6}, obj1);
//   console.log(obj2.c, obj2.d);
// // // console.log(obj2);
// let map = new Map();
// // map.set('k1', 'v1').set('k2', 'v2');
// map.set('k1', 'v1');

// // console.log(map.get('k1')); // v1
// // console.log(map.has('k2')); // true
// console.log(map); // true
// const map = new Map();
// map.set('one', 1);
// map.set('2', 'two');
// console.log(map);

// window.onload=function(){

//     let btn=document.getElementById("jump");
//     let text=document.getElementById("text");
   
//     let count=0;

//     btn.onclick=function(){
//         y-=10;
//         count+=1;
//         text.innerHTML="Liczb klikniec to :"+count;

//         context.clearRect(0,0,600,400);
//         context.beginPath();
//         context.arc(x,y,50, 0,2*Math.PI);
//         context.fillStyle="red"
//         context.fill();

//         context.font = '25px Arial';
//         context.fillStyle = 'red';
//         context.fillText("Count: " + count, 20, 350);
//     }
       

    



//     var canvas=document.getElementById("canvas");
//         var context=canvas.getContext("2d");
//         var x=150;
//         var y=150;
    

//         context.clearRect(0,0,600,400);
//         context.beginPath();
//         context.arc(x,y,50, 0,2*Math.PI);
//         context.fillStyle="red"
//         context.fill();
       

    
// }
// let t;
// let ms =( Date.now()-t)/1000;
// t=Date.now();
// let fps=Math.round(1/ms);
// console.log(fps);


// var canvas=document.getElementById("canvas");
// var context=canvas.getContext("2d");
// var size=100;
// var y=10;

// function draw(){
//     context.clearRect(0,0,600,400);
//     context.beginPath();
//     context.arc(300,200,size, 0,2*Math.PI);
//     context.fillStyle="red"
//     context.fill();
//     size+=y;
//     if (size>=150||size<=50) {
//         y*=-1;
        
//     }

// }
// setInterval(draw,200)


    // context.rect(50,50,200,200);
    // context.stroke();

    // context.arc(150,150,100,0,2.5*Math.PI);
//     context.rect(x,y,100,100)
//     context.lineWidth=10;
//     context.strokeStyle="red";
//     context.fillStyle="green";
//     context.fill();
//     context.stroke();
// };