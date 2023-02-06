console.log('ustaw tlo elelmetow HTML');

const setBackground=()=>{
    let p1=document.querySelector(".first");
    let p2=document.querySelector(".second");

    p1.classList.toggle('bg-red');
    p2.classList.add('bg-yellow');

    // p1.style.backgroundColor='red';
    // p2.style.backgroundColor='yellow';


    // console.log(p2);
}

let btnSetBackground=document.getElementById('set-background');



btnSetBackground.addEventListener('click',setBackground);

// console.log(btnSetBackground);