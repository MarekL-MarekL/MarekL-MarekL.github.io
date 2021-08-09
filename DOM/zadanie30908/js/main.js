let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors=document.getElementById('errors');
    errors.innerHTML='';

    if(txtName.value.trim()===""){
        let liError=document.createElement('li');
        liError.innerText='Wpisz imie i nazwisko';
        errors.appendChild(liError);
    }

    if(txtEmail.value.trim()===""){
        let liError=document.createElement('li');
        liError.innerText='Wpisz email';
        errors.appendChild(liError);
    }

    if(!txtEmail.value.includes('@') ){
        let liError=document.createElement('li');
        liError.innerText='Wpisz prawidlowy email';
        errors.appendChild(liError);
    }

    if(!agree1.checked ){
        let liError=document.createElement('li');
        liError.innerText='nie wyraziles zgody';
        errors.appendChild(liError);
    }

    // console.log(errors.children.length);

    if(errors.children.length>0){
        event.preventDefault();

    }


   
    // console.log(errors);



}

// let wszystkieZgody = document.getElementById('all-agree')

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    // console.log(event.target.checked);


}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);








// console.log(newsletterForm);