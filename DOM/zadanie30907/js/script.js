console.log('obsluga formularza imie i nazwisko');

const submitForm = (zdarzenie) => {
    zdarzenie.preventDefault();
  

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imie: ${firstName.value}, Nazwisko:${lastName.value}`);


}


let form = document.getElementById('form');


form.addEventListener('submit', submitForm);

