
let endOfThePage = 0;
let preloading = false;


const showPreloader = () => {
    let preloader = document.getElementById("preloader");
    console.log("show preloader");
    preloader.style.display = 'block';
    preloading = true;
}

const hidePreloader = () => {
    let preloader = document.getElementById("preloader");
    console.log("hide preloader");
    preloader.style.display = 'none';
    preloading=false;
}



const getData = () => {

    if (!preloading) {
        showPreloader();
       
        

        fetch('https://akademia108.pl/api/ajax/get-users.php')
            // {
            //     mode: 'cors',
            //     method: 'GET',

            // })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                let body = document.body;
                let hr = document.createElement('hr');


                body.appendChild(hr);


                for (let user of data) {


                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');



                    pId.innerText = `User Id: ${user.id}`;
                    pName.innerText = `User name: ${user.name}`;
                    pWebsite.innerHTML = `User name: ${user.pWebsite}<br/>---------`;

                    ;


                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);
                }
                preloading=false;
                hidePreloader();



            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

}




const scrollToEndOfPage = () => {

    let d = document.documentElement;
    // wysokosc element content, including content not visible on the scrren
    let scrollHeight = d.scrollHeight;
    // console.log(`scroll height:${scrollHeight}`);

    // number of pixels that an element's content is scrolled vertically

    let scrollTop = d.scrollTop;
    // console.log(`scroll Top:${scrollTop}`);


    let clientHeight = d.clientHeight;
    // console.log(`client height:${clientHeight}`);

    let sumScrollTopClientHeight = Math.ceil(clientHeight + scrollTop);

    if (sumScrollTopClientHeight >= scrollHeight) {
        endOfThePage += 1;

        
        console.log(`scrolled to the end of page:${endOfThePage}`);
        
        getData();
    }

}



window.addEventListener('scroll', scrollToEndOfPage);









